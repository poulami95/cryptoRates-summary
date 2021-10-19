import axios from 'axios';
export default async function getData(){
    let apiRes=[];
    await axios.get('https://api.lunarcrush.com/v2?data=exchanges&key=og2eo6kwy3evvlwgosqou&limit=50')
    .then((res)=>{
        //console.log(res.data.data)
        apiRes= res.data.data.exchanges;
    })
    .catch((error)=>{
        alert(error);
    })
    return apiRes
}
