import "./cards.css";
export default function(props){

    const {currency} = props
    return(
    <div className="cards-outer-wrapper">
        <span className="card-header-text">{currency.exchange_id}</span> 
        <div className="card-content">
           <ul>
               <li><span className="title-name">NAME : </span><span>{currency.name}</span></li>
               <li><span className="title-name">LAUNCH DATE : <span>{currency.data_start}</span></span></li>
               <li><span className="title-name">PRICE(IN USD) : </span><span>{currency.price_usd}</span></li>
               <li><span className="title-name">COUNT OF TRADES : </span><span>{currency.data_symbols_count}</span></li>
               <li><span className="title-name">OFFICIAL WEBSITE : </span><span><a href={currency.website} style={{textDecoration:"none",color:"#2f4f4f"}} target="_blank" rel="noreferrer">{currency.website}</a></span></li>
            </ul> 
        </div>   
    </div>
    )
    
}