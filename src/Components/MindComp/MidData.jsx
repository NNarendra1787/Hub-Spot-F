import axios from "axios";
import React, { useEffect, useState } from "react";

function MidData() {
  const [data, setData] = useState([]);

  useEffect(() => {
    let url = "https://hub-spot-backend-link-ngd8q9qd1-nnarendra1787s-projects.vercel.app/data/dataCheck";
    axios.get(url).then((res) => {
      setData(res.data.Result);
      console.log(res.data);
    });
  }, []);
  return (
    <div>
      {data.slice(1, 2).map((ch, ind) => (
        <section className="mid-right-details" key={ind}>
          <div className="chart-details-main">
            <h6>Email sent, opened, and click by totals by email send data</h6>
          </div>
          <div className="offer">
            <div>
              <h6>IN LAST 30 DAYS</h6>
            </div>
            <div>
              <h6>COMPAIRE TO | PREVIOUS 30 DAYS</h6>
            </div>
          </div>
          <section id="data-part">
            <div className="FirstBox">
              <h6>SENT</h6>
              <h5>{ch.send}</h5>
            </div>
            <div className="SecondBox">
              <h6>OPENED</h6>
              <h5>{ch.opened}</h5>
            </div>
            <div className="ThirdBox">
              <h6>CLICK</h6>
              <h5>{ch.click}</h5>
            </div>
            <div className="FouthBox">
              <h6>CLICK RATED</h6>
              <h5>{ch.clickedrate}%</h5>
            </div>
          </section>
        </section>
      ))}
    </div>
  );
}

export default MidData;
