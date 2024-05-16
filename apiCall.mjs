

export async function fetchData(url) {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Failed to fetch data: ${response.statusText}`);
    }
    return response.json();
}

export async function postData(url, data, apiKey) {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'x-api-key': apiKey
        },
        body: JSON.stringify(data)
    });
    if (!response.ok) {
        throw new Error(`Failed to post data: ${response.statusText}`);
    }
    return response.json();
}
