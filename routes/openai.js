const { Router } = require("express");
const { Configuration, OpenAIApi } = require("openai");

const router = Router();

router.get("/", async (req, res) => {
  const { question } = req.body;

  const configuration = new Configuration({
    apiKey: "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",
  });
  const openai = new OpenAIApi(configuration);
  const completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: question }],
  });

  res.json({
    data: completion.data.choices[0].message.content,
  });
});

module.exports = router;
