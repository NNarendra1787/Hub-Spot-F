import React, { useEffect, useState } from "react";
import { Chart as ChartJs, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import axios from "axios";
import MidData from "./MidData";
import "../Navigation/Navbar.css"

ChartJs.register(ArcElement, Tooltip, Legend);

function Chart() {
  var [data, setData] = useState([]);

  useEffect(() => {
    const url = "https://hub-spot-backend-link-ngd8q9qd1-nnarendra1787s-projects.vercel.app/data/dataCheck";
    axios.get(url).then((res) => {
      setData(res.data);
      console.log(res.data);
    });
  }, []);

  data = {
    labels: ["Sends", "Opened", "Click", "ClickedRank"],
    datasets: [
      {
        data: [80, 95, 56, 56],
        backgroundColor: ["aqua", "lavender", "lightgreen", "yellow"],
      },
    ],
  };

  const options = {};
  return (
    <div>
      <section className="Chart-Part">
        <div style={{ padding: "20px", width: "34%" }} className="Chart-pie">
        <h5>Contact most recently created by source</h5>
        <h6>IN LAST 30 DAYS</h6>
          <Pie data={data} options={options}></Pie>
        </div>
          <MidData />
      </section>
    </div>
  );
}

export default Chart;
