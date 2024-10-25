const OpenAI = require('openai');
require('dotenv').config();

const client = new OpenAI({
  apiKey: process.env['OPENAI_API_KEY'], // This is the default and can be omitted
});

async function main() {
  const chatCompletion = await client.chat.completions.create({
    messages: [{ role: 'user', content: "your a bot that creates hashtags for social media posts. using the questions and answers below, give me a list of 5 hashtags separated by a comma: What is the main topic or theme of your video? to inform people on how good brooklyn nine nine is. it's an amazing show and very funny. Who is your target audience? the target audience is netflix watchers, and show bingers, fans of comedy and sitcoms. What niche does your video primarily target? sitcoms and comedy" }],
    model: 'gpt-3.5-turbo',
  });

  console.log(chatCompletion.choices[0].message.content)
}

main();