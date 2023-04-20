import fetch from 'node-fetch';

export default function handler(req, res) {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  console.log(await response.json());
  res
    .status(200)
    .json({
      query: req.query,
      method: req.method,
      body: req.body,
      headers: req.headers,
      url: req.url,
      randomNumber: Math.floor((Math.random()*100) + 1)
    });
  }
