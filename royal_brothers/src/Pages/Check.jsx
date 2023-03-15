import Checkout from '../components/Checkout';
import Summary from '../components/Summary';

function Check() {
    return (

        <div className="App">
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Summary />
                <Checkout />
            </div>

        </div>
    );
}

export default Check;
