import https from "https";

export default async function handler(req, res) {/*
  console.log(process.env.FOOTBALL_API_KEY);

  const options = {
    method: "GET",
    hostname: "api.sportmonks.com",
    path: `/v3/football/squads/teams/85?api_token=${process.env.FOOTBALL_API_KEY}`,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    maxRedirects: 20,
  };

  const promise = new Promise((resolve, reject) => {
    const request = https.request(options, (response) => {
      let chunks = [];

      response.on("data", (chunk) => {
        console.log("data");
        chunks.push(chunk);
      });

      response.on("end", () => {
        const body = Buffer.concat(chunks);
        const data = JSON.parse(body.toString());
        resolve(data); // Resolve promise with data
      });
    });

    request.on("error", (error) => {
      console.error("Error making HTTP request:", error);
      reject(error); // Reject promise with error
    });

    request.end();
  });

  promise
    .then((data) => {
      res.setHeader("Content-Type", "application/json");
      res.status(200).json(data); // Send response to client
      console.log(data);
    })
    .catch((error) => {
      console.error("Error:", error);
      res.status(500).json({ error: "Internal Server Error" }); // Send error response to client
    });
    */

      res.status(200).json({
      "10": "Messi", 
      "9": "Suarez", 
      "6": "Xavi",
    });
}
