import { Component } from "react";
import getData from "../../../utils/getData";
import Cards from "../../Cards";
import './CurrencyCards.css';

class CurrencyCards extends Component{
    constructor(props){
        super(props);
        this.state ={
            allCurreny:[]
        }
    }
    async componentDidMount(){
        let apiRes = await getData();
        this.setState({
          allCurreny : apiRes  
        }/* ,()=>{
            console.log(this.state.allCurreny)
        } */)
    }
    generateCurrentCards = (res) =>{
        if(res.length > 0){
            return(
                res.map((item,index)=>{
                    return(
                        <div key={index}>
                            <Cards currency={item }/>
                        </div>
                    )
                })
            )
        }
    }
    render(){
        return(
            <div className="contents-wrapper">
                {this.generateCurrentCards(this.state.allCurreny)}
            </div>
        )
    }
}
export default CurrencyCards;