import { useEffect, useState } from "react";
import Tarjetarobot from "./Tarjetarobot";
import "./styles.css";

export default function Ejercicio() {
  const [robots, setRobots] = useState(null);

  function fetchRobots() {
    fetch("https://random-data-api.com/api/users/random_user?size=10")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((data) => {
        setRobots(data);
        console.log(JSON.stringify(data, null, 2));
      })
      .catch((error) => {
        console.error(error.message);
      });
  }
  useEffect(() => {
    fetchRobots();
  }, []);

  return (
    <div className="Ejercicio">
      <div className="robotdatos">
        <button className="botonfetch" onClick={fetchRobots}>
          Buscar Robots
        </button>
        {robots &&
          robots.map((robot) => {
            return <Tarjetarobot key={robot.id} robot={robot} />;
          })}
      </div>
    </div>
  );
}
