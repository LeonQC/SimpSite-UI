const API_BASE_URL = process.env.NEXT_PUBLIC_SERVER_URL;

export const registerUser = async (user, setError) => {
    const response = await fetch(`${API_BASE_URL}/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user)
    })
    if (response.ok) {
        const res = await response.text()
        console.log("success", res);

    }
    else {
        const err = await response.text()
        setError(err)
        console.log("failed:", err);
    }
}