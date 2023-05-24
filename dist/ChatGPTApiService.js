"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatGPTApiService = void 0;
const openai_1 = require("openai");
class ChatGPTApiService {
    constructor(openaiKey, model) {
        this.openaiKey = openaiKey;
        this.model = model;
        this.client = new openai_1.OpenAIApi(new openai_1.Configuration({ apiKey: openaiKey }));
    }
    async getAnswer(question) {
        let messages = [
            { role: "user", content: question }
        ];
        const result = await this.client.createChatCompletion({
            model: this.model,
            messages: messages,
        });
        return result.data.choices[0].message?.content ?? 'NONE';
    }
}
exports.ChatGPTApiService = ChatGPTApiService;
