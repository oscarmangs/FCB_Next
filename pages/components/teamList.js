import { useEffect, useState } from "react";
import classes from "./teamList.module.css"

export default function TeamList() {
  const [squadArray, setSquadArray] = useState([]);

  useEffect(() => {
    const storedData = localStorage.getItem("squadData") || "";

    async function fetchData() {
      try {
        const response = await fetch("/api/fetchSquad");
        const data = await response.json();
        return data;
      } catch (error) {
        console.error("Error fetching data", error);
        return null;
      }
    }

      console.log("Fetching data from API...");
      fetchData()
        .then((data) => {
          if (data) {
            console.log("Fetched data:", data);
            localStorage.setItem("squadData", JSON.stringify(data));

            // Convert object to array of objects
            const squadArray = Object.keys(data).map((number) => ({
              number: parseInt(number), // Convert key to integer
              name: data[number], // Get name corresponding to the key
            }));
            setSquadArray(squadArray);

          } else {
            console.log("Data fetching failed or empty");
            setSquadArray([]);
          }
        })
        .catch((error) => {
          console.log("Error fetching data", error);
          setSquadArray([]);
        });
  }, []);


  return (
    <ul className={classes.list}>
      {squadArray.map((player, index) => (
        <li key={index} className={classes.playerCard}>
          {player.number}: {player.name}
        </li>
      ))}
    </ul>
  );
}
