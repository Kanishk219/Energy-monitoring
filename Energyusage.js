import React, { useEffect, useState } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import "./Energyusage.css";

Chart.register(...registerables);

const EnergyUsage = () => {
  const [energyData, setEnergyData] = useState([]);

  // Fetch data from backend
  useEffect(() => {
    axios.get("http://localhost:5000/api/energy")
      .then((response) => {
        console.log("Fetched data:", response.data);
        setEnergyData(response.data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // Prepare chart data
  const chartData = {
    labels: energyData.map((entry) => new Date(entry.timestamp).toLocaleTimeString()),
    datasets: [
      {
        label: "Energy Consumption (kWh)",
        data: energyData.map((entry) => entry.energyConsumed),
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 2,
        fill: true,
      },
    ],
  };

  return (
    <div className="energy-container">
      <h1>Energy Consumption Data</h1>

      {/* Table */}
      <table className="energy-table">
        <thead>
          <tr>
            <th>Device</th>
            <th>Energy Consumed (kWh)</th>
            <th>Timestamp</th>
          </tr>
        </thead>
        <tbody>
          {energyData.map((entry, index) => (
            <tr key={index}>
              <td>{entry.device}</td>
              <td>{entry.energyConsumed}</td>
              <td>{new Date(entry.timestamp).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Chart */}
      <h2>Energy Consumption Over Time</h2>
      {energyData.length > 0 ? <Line data={chartData} /> : <p>Loading chart...</p>}
    </div>
  );
};

export default EnergyUsage;
