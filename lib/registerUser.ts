
export default async function registerUser(email: string, password: string, name: string) {
    const res = await fetch('/api/user', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            name,
            email,
            password,
        })
    })
    console.log(JSON.stringify({
        name,
        email,
        password,
    }))
    const data = await res.json();
    return data;
}