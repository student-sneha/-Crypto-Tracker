import React from "react";
import CryptoTable from "./components/CryptoTable";

const App = () => {
  return (
    <div className="min-h-screen bg-white p-6">
      <h1 className="text-2xl font-bold mb-4 text-center">📈 Crypto Price Tracker</h1>
      <div className="bg-white rounded-lg shadow overflow-auto border">
        <CryptoTable />
      </div>
    </div>
  );
};

export default App;
