import classes from "./teamList.module.css";
import { useEffect, useState } from "react";

export default function TeamList() {
  const [squadArray, setSquadArray] = useState([]); // Declare state for squad data

  useEffect(() => {
          const storedData = localStorage.getItem("squadData") || "";

    async function fetchData() {
        const response = await fetch("/api/fetchSquad"); // Making a request to the API route
        const data = await response.json();
        return data;
    }
      if (storedData) {
       const jsonData = JSON.parse(storedData); 
        console.log(jsonData.data)
     setSquadArray(JSON.parse(storedData));
    } else { 
      fetchData().then((data) =>{
      console.log(data);
      localStorage.setItem("squadData", JSON.stringify(data));
      setSquadArray(data);

      }).catch((error)=> {    console.log("Error fetching data", error); }
  );
  }}, []);

  /*
  const apiKey = "OcEM5Hwc3hH5rX4iCavAHjr0E5J5hbP8S5i8zkXn70EyMoTtj8KvpQIKIxnP";
  const endpoint =
    "https://soccer.sportmonks.com/api/v3/teams/85?include=squad.player&api_token=" +
    apiKey;

      const endpoint2 =
        "https://api.sportmonks.com/v3/football/squads/teams/85?api_token=" + apiKey;

  const [squadArray, setSquadArray] = useState([]); // Declare state for squad data


  useEffect(() => {
      const storedData = localStorage.getItem("squadData");

    if (storedData) {
      setSquadArray(JSON.parse(storedData));
    } else {
      fetch(endpoint2)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          if (
            data &&
            data.data &&
            data.data.squad &&
            data.data.squad.data.length > 0
          ) {
            const squad = data.data.squad.data;
            const updatedSquadArray = squad.map((player) => ({
              name: player.player.data.fullname,
              number: player.number,
            }));
            setSquadArray(updatedSquadArray);
            localStorage.setItem(
              "squadData",
              JSON.stringify(updatedSquadArray)
            );
          } else {
            throw new Error("No squad data available");
          }
        })
        .catch((error) => console.error("Error fetching data:", error));
    }
  }, []); // Empty dependency array to run effect only once
*/


  return (
    <ul>
    {/*}
      {squadArray.map((player, index) => (
        <li key={index}>
          {player.number}: {player.name}
        </li>
      ))}
    {*/}
    </ul>
  );
}
