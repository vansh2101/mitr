export async function query(data) {
	const response = await fetch(
		"https://api-inference.huggingface.co/models/codellama/CodeLlama-34b-Instruct-hf",
		{
			headers: { "Authorization": `Bearer ${process.env.REACT_APP_API_KEY}`, "Content-Type": "application/json" },
			method: "POST",
			body: JSON.stringify(data),
		}
	);
	const result = await response.json();
	return result;
}


export async function query_complete(data) {
	const response = await fetch(
		"https://api-inference.huggingface.co/models/codellama/CodeLlama-7b-hf",
		{
			headers: { "Authorization": `Bearer ${process.env.REACT_APP_API_KEY}`, "Content-Type": "application/json" },
			method: "POST",
			body: JSON.stringify(data),
		}
	);
	const result = await response.json();
	return result;
}