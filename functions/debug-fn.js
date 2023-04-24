import fetch from "node-fetch";

export default function handler(request, response) {

    if (request.method === 'POST') {
        return post(request, response)
    } else if (request.method === 'GET') {
        return get(request, response)
    }
}

async function get(request, response) {

    const url = new URL("https://cdn.contentstack.io" + request.url)
    const contentType = url.searchParams.get('type');
    url.searchParams.delete('type');

    // change host
    url.host = "cdn.contentstack.io"
    url.protocol = "https:"
    url.pathname = `/v3/content_types/${contentType}/entries`
    url.port = 443

    let res = {}

    try {
        res = await getDataFromAPI(url)
        response.status(200).json(res);
    } catch (error) {
        console.log({error: JSON.stringify(error)});
        res = await getDataFromURL('https://jsonplaceholder.typicode.com/todos/1');
        response.status(200).json(
            {
                "url": url.toString(),
                "p": process.env.REACT_APP_CONTENTSTACK_DELIVERY_TOKEN,
                "a": process.env.REACT_APP_CONTENTSTACK_API_KEY,
                "api_key": process.env.REACT_APP_CONTENTSTACK_API_KEY,
                "access_token": process.env.REACT_APP_CONTENTSTACK_DELIVERY_TOKEN,
                "fallback_response": res
            });
    }
}

function post(request, response) {
    response.status(200).json("POST Content" + Date.now() + " " + request.url);
}


function getDataFromURL(url) {
    return fetch(url)
        .then(function (response) { return response.json(); })
}

function getDataFromAPI(url) {
    return fetch(
        url.toString(),
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "api_key": process.env.REACT_APP_CONTENTSTACK_API_KEY,
                "access_token": process.env.REACT_APP_CONTENTSTACK_DELIVERY_TOKEN
            }
        }
    ).then(function (response) { return response.json(); })

}
