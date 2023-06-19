
export default async function registerUser(email:string, password:string, name:string){
    const res = await fetch('/api/auth/user', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
            },
        body: JSON.stringify({
            email,
            password,
            name
        })
    })
    console.log(res.json())
    const data = await res.json();
    return data;
}