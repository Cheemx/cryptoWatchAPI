import axios from 'axios';
import { Coin } from '../models/Coin.js';

const fetchCryptoData = async () => {
    try {
        const coins = ['bitcoin', 'matic-network', 'ethereum'];
        const baseURL = "https://api.coingecko.com/api/v3/simple/price";

        const params = new URLSearchParams({
            ids: coins.join(','),             // ids of coins/currencies
            vs_currencies: "usd",             // Target currency
            include_market_cap: "true",       // market cap
            include_24hr_change: "true",      // 24h change
        });

        const url = `${baseURL}?${params.toString()}`;


        const response = await axios.get(url);
        const data = response.data;

        coins.forEach(async (coin) => {
        const coinData = {
            coin,
            price: data[coin].usd,
            marketCap: data[coin].usd_market_cap,
            change: data[coin].usd_24h_change,
        };

        await Coin.create(coinData);
        });
        console.log("Crypto data fetched and stored successfully.");
    } catch (error) {
        console.error("Error fetching crypto data:", error.message);
    }
};

export default fetchCryptoData