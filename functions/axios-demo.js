import axios from 'axios';
// const axios = require('axios'); // legacy way

export default async function handler(req, res) {
  try {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users");
    // console.log(data);
    console.log("After data");
    res.status(200).send(response.data);
  } catch (error) {
    console.log("In catch");
    console.error("Error", error);
    res.status(500).end();
  }

}
