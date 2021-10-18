import axios from 'axios';
export default async function getData(){
    let apiRes=[];
    await axios.get('https://rest.coinapi.io/v1/exchanges?apikey=FC9A6B3B-452F-441E-8A69-2922AAEB4D24')
    .then((res)=>{
        //console.log(res.data)
        apiRes= res.data;
    })
    .catch((error)=>{
        alert(error);
    })
    return apiRes
}
