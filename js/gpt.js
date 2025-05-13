
async function askGPT() {
    const prompt = document.getElementById("prompt").value;
    const responseDiv = document.getElementById("response");
    responseDiv.innerHTML = "GPT 응답 생성 중...";
    const apiKey = localStorage.getItem("openai_api_key") || prompt("OpenAI API 키를 입력하세요:");
    localStorage.setItem("openai_api_key", apiKey);

    const res = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + apiKey
        },
        body: JSON.stringify({
            model: "gpt-4o",
            messages: [{ role: "user", content: prompt }],
            temperature: 0.7
        })
    });
    const data = await res.json();
    responseDiv.innerHTML = data.choices?.[0]?.message?.content || "응답 오류 발생";
}
