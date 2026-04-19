import "./cards.css";

const formatPrice = (price) => {
    if (price == null) return 'N/A';
    if (price >= 1) return price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    if (price >= 0.0001) return price.toFixed(6);
    return price.toExponential(4);
};

const formatMarketCap = (cap) => {
    if (!cap) return 'N/A';
    if (cap >= 1e12) return `$${(cap / 1e12).toFixed(2)}T`;
    if (cap >= 1e9) return `$${(cap / 1e9).toFixed(2)}B`;
    if (cap >= 1e6) return `$${(cap / 1e6).toFixed(2)}M`;
    return `$${cap.toLocaleString()}`;
};

const Cards = ({ currency }) => {
    const url = `https://www.coingecko.com/en/coins/${currency.id}`;
    const priceChange = currency.price_change_percentage_24h;
    const isPositive = priceChange >= 0;

    return (
        <div className="cards-outer-wrapper">
            <a href={url} target="_blank" rel="noreferrer">
                <div className="card-top-row">
                    <span className="rank-badge">#{currency.market_cap_rank || '—'}</span>
                    {priceChange != null && (
                        <span className={`change-badge ${isPositive ? 'positive' : 'negative'}`}>
                            {isPositive ? '▲' : '▼'} {Math.abs(priceChange).toFixed(2)}%
                        </span>
                    )}
                </div>

                <div className="card-logo-wrapper">
                    <img
                        src={currency.image}
                        alt={currency.name}
                        onError={(e) => { e.target.style.display = 'none'; }}
                    />
                </div>

                <div className="card-name-section">
                    <span className="card-name">{currency.name}</span>
                    <span className="card-symbol">{currency.symbol.toUpperCase()}</span>
                </div>

                <div className="card-price">${formatPrice(currency.current_price)}</div>

                <div className="card-divider" />

                <div className="card-stats">
                    <div className="stat-row">
                        <span className="stat-label">Market Cap</span>
                        <span className="stat-value">{formatMarketCap(currency.market_cap)}</span>
                    </div>
                    {currency.high_24h != null && (
                        <div className="stat-row">
                            <span className="stat-label">24h High</span>
                            <span className="stat-value green">${formatPrice(currency.high_24h)}</span>
                        </div>
                    )}
                    {currency.low_24h != null && (
                        <div className="stat-row">
                            <span className="stat-label">24h Low</span>
                            <span className="stat-value red">${formatPrice(currency.low_24h)}</span>
                        </div>
                    )}
                    <div className="stat-row">
                        <span className="stat-label">Updated</span>
                        <span className="stat-value">{new Date(currency.last_updated).toLocaleDateString()}</span>
                    </div>
                </div>
            </a>
        </div>
    );
};

export default Cards;
