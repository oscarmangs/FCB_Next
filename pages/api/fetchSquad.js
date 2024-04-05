// pages/api/fetchSquad.js

import https from "https"; // Import the native Node.js 'https' module

export default async function handler(req,res) {
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

  req = https.request(options, (response) => {
    let chunks = [];

    response.on("data", (chunk) => {
      console.log("data");

      chunks.push(chunk);
    });

    response.on("end", () => {
      const body = Buffer.concat(chunks);
      const data = JSON.parse(body.toString());
      res.setHeader("Content-Type", "application/json");
      res.statusCode = 200; // Set the status code directly
      res.status(200).json(data); // Return the data directly to the client
      console.log(data);
      // res.status(200).json(data);
    });

    response.on("error", (error) => {
      console.log("error");
      console.error(error);
      //  res.status(500).json({ error: "Internal Server Error" });
      res.statusCode = 500;
    });
  });

  req.end();
}
