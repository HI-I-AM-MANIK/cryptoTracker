export const settingCoinObject = (setCoin, data) => {
    setCoin({
      id: data?.id ?? '',
      name: data?.name ?? '',
      symbol: data?.symbol ?? '',
      image: data?.image?.large ?? '', // Use optional chaining to avoid errors
      desc: data?.description?.en ?? 'No description available', // Handle cases where description might be missing
      price_change_percentage_24h: data?.market_data?.price_change_percentage_24h ?? 'N/A', // Handle cases where price_change_percentage_24h might be missing
      total_volume: data?.market_data?.total_volume?.usd ?? 'N/A', // Handle cases where total_volume might be missing
      current_price: data?.market_data?.current_price?.usd ?? 'N/A', // Handle cases where current_price might be missing
      market_cap: data?.market_data?.market_cap?.usd ?? 'N/A', // Handle cases where market_cap might be missing
    });
  };
  