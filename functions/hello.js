export default function handler(req, res) {
      console.log("incoming headers");
        console.log(req.headers);

  if (req.method === "GET") {
      console.log("Hello from eleventy website");
    res
      .status(200)
      .json({ method: "GET", route: "id", params: req.params, headers: req.headers  })
  } else {
          console.log("Call not supported");
        res
      .status(500)
      .json({ error: "Bad Request" })
    
  }
  


}
