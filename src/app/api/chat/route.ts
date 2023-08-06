import { Configuration, OpenAIApi } from 'openai-edge';
import { OpenAIStream, StreamingTextResponse } from 'ai';

const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY
});

const openai = new OpenAIApi(config);
console.log('openai', openai);
export async function POST(request: Request) {
  const {messages} = await request.json();

  const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    stream: true,
    messages
  });

  const stream = OpenAIStream(response);

  console.log(messages);
  return new StreamingTextResponse(stream);
}
