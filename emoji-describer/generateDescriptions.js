require('dotenv').config({path: '../server/.env'});
const fs = require('fs');
const { OpenAI } = require('openai');
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const emojis = JSON.parse(fs.readFileSync('./emojibase.json', 'utf-8'));
const output = [];

const delay = ms => new Promise(res => setTimeout(res, ms));

async function getDescription(name, symbol) {
  const prompt = `Describe the emoji "${symbol}" (${name}) in 1 sentence.`;
  const res = await openai.chat.completions.create({
    model: "gpt-4",
    messages: [{ role: "user", content: prompt }],
    temperature: 0.7,
  });
  return res.choices[0].message.content.trim();
}

(async () => {
  for (let i = 0; i < emojis.length; i++) {
    const emoji = emojis[i];
    const htmlCode = emoji.htmlCode?.[0] || '';
    const symbol = htmlCode.replace(/&#x([^;]+);/g, (_, hex) =>
      String.fromCodePoint(parseInt(hex, 16))
    );

    console.log(`${i + 1}/${emojis.length}: Generating for ${emoji.name}...`);

    try {
      const description = await getDescription(emoji.name, symbol);
      output.push({ ...emoji, description });

      // Optional: save every 10
      if ((i + 1) % 10 === 0) {
        fs.writeFileSync('emoji_with_descriptions.json', JSON.stringify(output, null, 2));
        console.log('Checkpoint saved');
      }

      await delay(2000); // wait to avoid rate limit
    } catch (err) {
      console.error(`Failed: ${emoji.name}`, err.message);
    }
  }

  fs.writeFileSync('emoji_with_descriptions.json', JSON.stringify(output, null, 2));
  console.log('Done! Descriptions saved in emoji_with_descriptions.json');
})();
