import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { OpenAIStream, StreamingTextResponse } from 'ai';
import { cookies } from 'next/headers';
import {
  Configuration,
  OpenAIApi,
  ChatCompletionRequestMessage
} from 'openai-edge';

const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY
});
const openai = new OpenAIApi(config);

export const runtime = 'edge';

export async function POST(req: Request) {
  const supabase = createRouteHandlerClient({ cookies });
  const { messages, subsectionId, subsectionPrompt, userId, id } =
    await req.json();
  console.log(messages);
  const initialMessage = [
    { role: 'system', content: subsectionPrompt }
  ] as Array<ChatCompletionRequestMessage>;

  const response = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    stream: true,
    messages: initialMessage.concat(messages)
  });

  const stream = OpenAIStream(response, {
    onCompletion: async (completion: string) => {
      const { data, error } = await supabase
        .from('verra_pdds_ai_outputs')
        .upsert({
          id: id,
          user_id: userId,
          [subsectionId]: completion
        })
        .select();
      if (error) {
        throw new Error('Upsert completion failed');
      }
    }
  });

  return new StreamingTextResponse(stream);
}
