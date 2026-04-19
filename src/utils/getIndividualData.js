import axios from 'axios';

const COINGECKO_IDS = 'ethereum,bitcoin,binance-usd,tether,cardano,dogecoin,shiba-inu,solana,wrapped-bitcoin,litecoin,stellar,filecoin';
const COINCAP_IDS = 'ethereum,bitcoin,tether,cardano,dogecoin,shiba-inu,solana,litecoin,stellar,filecoin';

const mapCoinCapData = (coin) => ({
    id: coin.id,
    symbol: coin.symbol.toLowerCase(),
    name: coin.name,
    image: `https://assets.coincap.io/assets/icons/${coin.symbol.toLowerCase()}@2x.png`,
    current_price: parseFloat(coin.priceUsd) || 0,
    market_cap: parseFloat(coin.marketCapUsd) || 0,
    market_cap_rank: parseInt(coin.rank) || null,
    high_24h: null,
    low_24h: null,
    price_change_percentage_24h: parseFloat(coin.changePercent24Hr) || 0,
    last_updated: new Date().toISOString(),
});

export default async function getIndividualData() {
    try {
        const res = await axios.get(
            `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${COINGECKO_IDS}&order=market_cap_desc&per_page=100&page=1&sparkline=false`
        );
        if (res.data && res.data.length > 0) return res.data;
    } catch (error) {
        console.warn('CoinGecko API failed, switching to CoinCap:', error.message);
    }

    try {
        const res = await axios.get(
            `https://api.coincap.io/v2/assets?ids=${COINCAP_IDS}&limit=20`
        );
        if (res.data && res.data.data) {
            return res.data.data.map(mapCoinCapData);
        }
    } catch (error) {
        console.error('CoinCap API also failed:', error.message);
    }

    return [];
}
