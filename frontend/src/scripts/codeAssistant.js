export async function ask_gpt(data) {
		const response = await fetch('http://localhost:8000/assistant/msg', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({"prompt": data}),
        })

		const result = await response.json();
		return result;
}

export async function text_2_code(data) {
	const response = await fetch('http://localhost:8000/assistant/generate', {
		method: 'POST',
		headers: {"Content-Type": "application/json"},
		body: JSON.stringify({"prompt": data}),
	})

	const result = await response.json();
	return result;
}


export async function code_completion(data) {
	const response = await fetch(
		"http://localhost:8000/assistant/code",
		{
			headers: {"Content-Type": "application/json" },
			method: "POST",
			body: JSON.stringify({prompt: data}),
		}
	);
	const result = await response.json();
	return result;
}

export async function debug_code(data) {
	const response = await fetch(
		"http://localhost:8000/assistant/debug",
		{
			headers: {"Content-Type": "application/json" },
			method: "POST",
			body: JSON.stringify({prompt: data}),
		}
	);
	const result = await response.json();
	return result;
}


export async function img_2_code(data) {
	const response = await fetch(
		"http://localhost:8000/assistant/image",
		{
			headers: {"Content-Type": "application/json" },
			method: "POST",
			body: JSON.stringify({prompt: data}),
		}
	);
	const result = await response.json();
	return result;
}