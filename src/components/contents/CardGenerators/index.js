import { Component } from 'react';
import getIndividualData from '../../../utils/getIndividualData';
import Cards from '../../Cards';
import './CardGeneratorsStyle.css';
import loader from '../../../assets/gifs/BitcoinGoldCoin.gif';

class CardGenerators extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currencyApiRes: [],
            error: null,
        };
    }

    async componentDidMount() {
        const data = await getIndividualData();
        if (data.length === 0) {
            this.setState({ error: 'Unable to fetch market data. Please try again later.' });
        } else {
            this.setState({ currencyApiRes: data });
        }
    }

    render() {
        const { currencyApiRes, error } = this.state;

        if (error) {
            return (
                <div className="loader-wrapper">
                    <p className="error-text">{error}</p>
                </div>
            );
        }

        if (currencyApiRes.length === 0) {
            return (
                <div className="loader-wrapper">
                    <img src={loader} style={{ height: '100px', width: '80px' }} alt="Loading" />
                    <p className="loader-text">Fetching live market data...</p>
                </div>
            );
        }

        return (
            <div className="contents-wrapper">
                {currencyApiRes.map((item, index) => (
                    <div key={index} className="individual-card-wrapper">
                        <Cards currency={item} />
                    </div>
                ))}
            </div>
        );
    }
}

export default CardGenerators;
