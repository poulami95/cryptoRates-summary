import { Component } from 'react';
import getIndividualData from '../../../utils/getIndividualData';
import Cards from '../../Cards';
import './CardGeneratorsStyle.css'

class CardGenerators extends Component{
    constructor(props){
        super(props);
        this.state = {
            currencyApiRes : []
        }
    }
    async componentDidMount(){
        let apiData = []
        let currencySymbols= [
            'ethereum',
            'bitcoin',
            'binance-usd',
            'tether',
            'cardano',
            'dogecoin',
            'shiba-inu',
            'solana',
            'wrapped-bitcoin',
            'litecoin',
            'stellar',
            'filecoin'
        ];
        //console.log(currencySymbols);
        for(let i=0;i<currencySymbols.length;i++){
            //console.log(currencySymbols[i]);
            let res = await getIndividualData(currencySymbols[i])
            apiData[i] = res
        }
        //console.log(apiData)
        this.setState({
            currencyApiRes : apiData
        })
    }
    generateCurrentCards = (res) =>{
        if(res.length > 0){
            return(
                res.map((item,index)=>{
                    return(
                        <div key={index}>
                            <Cards currency = {item}/>
                        </div>
                    )
                })
            )
        }
    }
    render(){
        return(
            <div className="contents-wrapper">
                {this.generateCurrentCards(this.state.currencyApiRes)}
            </div>
        )
    }
}
export default CardGenerators;