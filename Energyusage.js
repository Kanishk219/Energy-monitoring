import React, { useState, useEffect } from "react";
import "./Energyusage.css";

const EnergyUsage = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/api/energy") // Ensure this matches your backend route
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error("Error fetching data:", error));
    }, []);

    return (
        <div>
            <h1>Smart Home Energy Monitoring</h1>
            <h2>Energy Usage Data</h2>
            <table className="energy-table">
                <thead>
                    <tr>
                        <th>Device</th>
                        <th>Energy Consumed (kWh)</th>
                        <th>Timestamp</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td>{item.device}</td>
                            <td>{item.energyConsumed}</td>
                            <td>{new Date(item.timestamp).toLocaleString()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default EnergyUsage;
