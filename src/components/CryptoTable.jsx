/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
const CryptoTable = ({ cryptos }) => {
  return (
    <div className="table-responsive-sm">
      <table className="table table-bordered border-primary table-hover table-striped">
        <thead className="table-dark">
          <tr>
            <th scope="col">id</th>
            <th scope="col">Image</th>
            <th scope="col">Symbol</th>
            <th scope="col">Name</th>
            <th scope="col">total_supply</th>
            <th scope="col">Total_Volume</th>
            <th scope="col">Market_cap</th>
            <th scope="col">high_24h</th>
            <th scope="col">Low_24h</th>
            <th scope="col">Ath_Change_Percentage</th>
            <th>Market_Cap_Change_Percentage_24h</th>
          </tr>
        </thead>
        <tbody>
          {cryptos.map((crypto, index) => (
            <tr key={crypto.id} className="table-info">
              <th scope="row">{index + 1}</th>
              <td>
                <img
                  src={crypto.image}
                  alt={`${crypto.name} logo`}
                  style={{ width: "50px", height: "50px", borderRadius: "50%" }}
                />
              </td>
              <td className="text-uppercase">{crypto.symbol}</td>
              <td>{crypto.name}</td>
              <td>{crypto.total_supply.toLocaleString()}</td>
              <td>{crypto.total_volume.toLocaleString()}</td>
              <td>{crypto.market_cap.toLocaleString()}</td>
              <td>{crypto.high_24h.toLocaleString()}</td>
              <td>{crypto.low_24h.toLocaleString()}</td>
              <td style={{ textAlign: "center" }}>
                {crypto.ath_change_percentage.toLocaleString()}
              </td>
              <td style={{ textAlign: "center" }}>
                {crypto.market_cap_change_percentage_24h.toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CryptoTable;
