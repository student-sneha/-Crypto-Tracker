
export const simulateCryptoChanges = (assets) => {
    return assets.map(asset => {
      const randomFactor = (range) => ((Math.random() - 0.5) * range).toFixed(2);
      const newPrice = +(asset.price + Number(randomFactor(asset.price * 0.01))).toFixed(2);
      const newVolume = asset.volume24h + Math.floor(Math.random() * 10000000);
  
      return {
        ...asset,
        price: newPrice,
        percentChange1h: +(asset.percentChange1h + Number(randomFactor(0.5))).toFixed(2),
        percentChange24h: +(asset.percentChange24h + Number(randomFactor(1))).toFixed(2),
        percentChange7d: +(asset.percentChange7d + Number(randomFactor(2))).toFixed(2),
        volume24h: newVolume
      };
    });
  };
  