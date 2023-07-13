import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { OpenAIStream, StreamingTextResponse } from 'ai';
import { cookies } from 'next/headers';
import {
  Configuration,
  OpenAIApi,
  ChatCompletionRequestMessage
} from 'openai-edge';

// Create an OpenAI API client (that's edge friendly!)
const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY
});
const openai = new OpenAIApi(config);

export const runtime = 'edge';

export async function POST(req: Request) {
  const supabase = createRouteHandlerClient({ cookies });
  // Extract the `messages` from the body of the request
  const { messages, subsection_id, section_prompt } = await req.json();
  const initialMessage = [
    { role: 'system', content: section_prompt }
  ] as Array<ChatCompletionRequestMessage>;
  // Ask OpenAI for a streaming chat completion given the prompt
  console.log(messages);
  const response = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    stream: true,
    messages: initialMessage.concat(messages)
  });
  // C onvert the response into a friendly text-stream
  const stream = OpenAIStream(response, {
    onCompletion: async (completion: string) => {
      const {
        data: { session }
      } = await supabase.auth.getSession();
      const { data } = await supabase.from('form_ai_outputs').upsert({
        subsection_id: subsection_id,
        user_id: session?.user.id,
        output_value: completion
      });
      console.log(data);
    }
  });
  // Respond with the stream
  return new StreamingTextResponse(stream);
}
