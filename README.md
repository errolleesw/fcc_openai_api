# ChatGPT Course - Use the OpenAI API to Code 5 Projects.

Code to follow along the ChatGPT course from freeCodeCamp. 

See [ChatGPT Course – Use The OpenAI API to Code 5 Projects](https://www.youtube.com/watch?v=uRQH2CFvedY&list=PLyepHdUuvkLeMgB9_tvmNNHa9WeiqRIpN&index=1&t=929s).

## 01 Text Completions
This a simple example to make use of the completions API.
See sample code in /01_text_completions.

You can also access the API via a curl command with this:
```bash
    curl https://api.openai.com/v1/completions \
-H "Content-Type: application/json" \
-H "Authorization: Bearer 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" \
-d '{
    "model": "gpt-3.5-turbo-instruct",
    "prompt": "Hello, how are you?",
    "max_tokens": 7,
    "temperature": 0
}'
```

## 02 Creating Effective prompts
This is pretty straight forward, not technical, just prompt engineering techniques to remember.

## 03 Chat Completions
