
import { OpenAIApi, Configuration, ChatCompletionRequestMessage } from "openai";

export class ChatGPTApiService {
    private readonly client: OpenAIApi

    constructor(private readonly openaiKey: string, private readonly model: string){
        this.client = new OpenAIApi(
            new Configuration({apiKey: openaiKey})
        );
    }
    
    async getAnswer(question: string): Promise<string> {
        let messages: ChatCompletionRequestMessage[] = [
            { role: "user", content: question }
        ];

        const result = await this.client.createChatCompletion({
            model: this.model,
            messages: messages,
          });
         
          return result.data.choices[0].message?.content ?? 'NONE';
    }
}