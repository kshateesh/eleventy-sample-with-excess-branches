import fetch from 'node-fetch';

export default async function handler(req, res) {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();

    console.log(data);

    res.status(200).send(data);
}