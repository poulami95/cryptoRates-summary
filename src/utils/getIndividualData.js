import axios from 'axios';
export default async function getIndividualData(currency){
    let apiRes=[];
    //console.log(currency)
    await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${currency}`)
    .then((res)=>{
        //console.log(res.data[0])
        apiRes= res.data[0];
    })
    .catch((error)=>{
        alert(error);
    })
    return apiRes
}