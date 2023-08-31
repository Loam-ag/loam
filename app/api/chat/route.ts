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
  const { messages, subsectionId, subsectionPrompt, userId } = await req.json();
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
      // const { data, error } = await supabase.from('form_ai_outputs').upsert({
      //   subsection_id: subsection_id,
      //   user_id: user_id,
      //   output_value: completion
      // });
      console.log(completion);
    }
  });

  return new StreamingTextResponse(stream);
}
