import "./cards.css";
export default function(props){

    const {currency} = props
    const url = `https://www.coingecko.com/en/coins/${currency.id}`
    return(
    <div className="cards-outer-wrapper">
        <a href={url} style={{textDecoration:"none"}} target="_blank">
            <div className="card-logo-wrapper">
                <img src={currency.image} style={{height:"100px",width:"100px"}}></img>
            </div>
            <span className="card-header-text">{currency.name.toUpperCase()}</span> 
            <div className="card-content">
            <ul>
                <li><span className="title-name">SYMBOL : </span><span className="title-value">{currency.symbol}</span></li>
                <li><span className="title-name">MARKET CAP RANK : </span><span className="title-value">{currency.market_cap_rank}</span></li>
                <li><span className="title-name">PRICE : <span className="title-value">${currency.current_price}</span></span></li>
                <li><span className="title-name">LAST UPDATED : </span><span>{new Date(currency.last_updated).toLocaleDateString()}</span></li>
                    <li><span className="title-name">MARKET CAP : </span><span>${currency.market_cap}</span></li> 
                    <li><span className="title-name">HIGHEST IN 24H : </span><span className="title-value">${currency.high_24h}</span></li>
                    <li><span className="title-name">LOWEST IN 24H : </span><span className="title-value">${currency.low_24h}</span></li>
                    {/*<li><span className="title-name">PRICE CHANGE IN 24H : </span><span>${currency.price_change_24h}</span></li>
                < li><span className="title-name">OFFICIAL WEBSITE : </span><span><a href={currency.website} style={{textDecoration:"none",color:"#2f4f4f"}} target="_blank" rel="noreferrer">{currency.website}</a></span></li> */}
                </ul> 
            </div>
        </a>   
    </div>
    )
    
}