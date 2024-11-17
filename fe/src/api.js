const BASE_URL = 'http://localhost:3001';

export const createSignature = async (data) => {
    const response = await fetch(`${BASE_URL}/sign`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ data }),
    });
    if (!response.ok) {
        throw new Error('Failed to create signature');
    }
    return response.json();
};

export const verifySignature = async (data, signature) => {
    const response = await fetch(`${BASE_URL}/verify`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ data, signature }),
    });
    if (!response.ok) {
        throw new Error('Failed to verify signature');
    }
    return response.json();
};
