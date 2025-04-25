import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateAssets } from "../redux/cryptoSlice";
import { simulateCryptoChanges } from "../utils/simulateUpdates";

const CryptoTable = () => {
  const assets = useSelector((state) => state.crypto.assets);
  const dispatch = useDispatch();

  useEffect(() => {
    const interval = setInterval(() => {
      const updated = simulateCryptoChanges(assets);
      dispatch(updateAssets(updated));
    }, 1500);
    return () => clearInterval(interval);
  }, [assets, dispatch]);

  return (
    <div className="overflow-x-auto w-full">
      <table className="w-full min-w-[1200px] table-auto border-collapse">
       <thead className="bg-gray-100 text-xs text-gray-600 uppercase tracking-wider">
  <tr>
    <th className="px-4 py-2 text-left">#</th>
    <th className="px-4 py-2 text-left">Name</th>
    <th className="px-4 py-2 text-left">Price</th>
    <th className="px-4 py-2 text-left">1h %</th>
    <th className="px-4 py-2 text-left">24h %</th>
    <th className="px-4 py-2 text-left">7d %</th>
    <th className="px-4 py-2 text-left">Market Cap</th>
    <th className="px-4 py-2 text-left">24h Volume</th>
    <th className="px-4 py-2 text-left">Circulating</th>
    <th className="px-4 py-2 text-left">Max Supply</th>
    <th className="px-4 py-2 text-left">7D Chart</th>
  </tr>
</thead>
<tbody>
  {assets.map((asset, index) => (
    <tr key={asset.id} className="border-b hover:bg-gray-50">
      <td className="px-4 py-2">{index + 1}</td>

      <td className="px-4 py-2">
        <div className="flex items-center gap-2">
          <img src={asset.logo} alt={asset.symbol} className="w-6 h-6" />
          <div>
            <div className="font-medium">{asset.name}</div>
            <div className="text-xs text-gray-500">{asset.symbol}</div>
          </div>
        </div>
      </td>

      <td className="px-4 py-2">${asset.price.toLocaleString()}</td>
      <td className={`px-4 py-2 ${asset.percentChange1h >= 0 ? "text-green-600" : "text-red-500"}`}>
        {asset.percentChange1h}%
      </td>
      <td className={`px-4 py-2 ${asset.percentChange24h >= 0 ? "text-green-600" : "text-red-500"}`}>
        {asset.percentChange24h}%
      </td>
      <td className={`px-4 py-2 ${asset.percentChange7d >= 0 ? "text-green-600" : "text-red-500"}`}>
        {asset.percentChange7d}%
      </td>
      <td className="px-4 py-2">${asset.marketCap.toLocaleString()}</td>
      <td className="px-4 py-2">${asset.volume24h.toLocaleString()}</td>
      <td className="px-4 py-2">{asset.circulatingSupply}</td>
      <td className="px-4 py-2">{asset.maxSupply}</td>
      <td className="px-4 py-2">
  <img
    src={asset.chartUrl}
    alt="7d chart"
    className="w-24 filter hue-rotate-90 saturate-200"
  />
</td>
    </tr>
  ))}
</tbody>

      </table>
    </div>
  );
};

export default CryptoTable;
