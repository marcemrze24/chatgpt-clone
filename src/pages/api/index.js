export default async function handler(req, res) {
    const options = {
        method: "POST",
        headers: {
            Authorization: `Bearer ${process.env.API_KEY}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: req.body.message }],
            max_tokens: 30,
        }),
    };

    if (req.method === "POST") {
        try {
            const response = await fetch(
                "https://api.openai.com/v1/chat/completions",
                options
            );
            const data = await response.json();
            res.send(data);
        } catch (error) {
            console.error(error);
        }
    }
}
