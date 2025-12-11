import { createInterface } from "readline/promises"
import OpenAI from "openai";


const client = new OpenAI({
    apiKey: process.env.GROQ_API_KEY,
    baseURL: "https://api.groq.com/openai/v1",
});


const rl = createInterface({ input: process.stdin, output: process.stdout })
let messages = []
while (true) {

    let query = await rl.question("# ")

    if (query === "bye") {
        console.log("Goodbye!")
        rl.close()
        break;
    }
    messages.push({ "role": "user", "content": query })

    let response = await client.chat.completions.create({
        model: "llama-3.1-8b-instant",
        messages: messages
    })

    messages.push(response.choices[0].message)
    console.log(response.choices[0].message.content)

    // console.log("messages", messages)
}
