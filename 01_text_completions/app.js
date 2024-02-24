const API_KEY = "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"

async function fetchData() {
    const response = await fetch("https://api.openai.com/v1/completions", {
        method: "POST",
        headers: {
            Authorization: `Bearer ${API_KEY}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo-instruct",
            prompt: "hello, how are you today?",
            max_tokens: 7
        })
    })
    
    const data = await response.json()
    console.log(data)
}

fetchData() 