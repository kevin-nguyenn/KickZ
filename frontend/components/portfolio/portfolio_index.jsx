import React from 'react';
import PortfolioItemContainer from './portfolio_item_container';
// import PortfolioGraphValues from './portfolio_graph_values';
import isEmpty from '../../util/object_api_util';
import { Link } from 'react-router-dom';

class PortfolioIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchShoes();
        this.props.fetchPortfolio(this.props.currentUser.id)
            .then(() => Object.values(this.props.portfolio)
            .forEach(item => this.props.fetchLastSale(item.shoe_id))
        );
    }

    render() {
        let portfolio = this.props.portfolio;
        let shoes = this.props.shoes;
        let sales = this.props.sales;
        
        return (
            <div className="portfolio-main">
                {/* <div id="portfolio-graph-outer">
                    <PortfolioGraphValues portfolio={portfolio} sales={sales} shoes={shoes} />
                </div> */}

                <span className="portfolio-header">Portfolio</span>
                <table className="portfolio-table">
                    <thead className="portfolio-table-heading">
                        <tr className="portfolio-row">
                            <th className="portfolio-col1"></th>
                            <th className="portfolio-col2" id="portfolio-center-this">Name</th>
                            <th className="portfolio-col3">Added Date</th>
                            <th className="portfolio-col4">Purchase Price</th>
                            <th className="portfolio-col5">Market Value</th>
                            <th className="portfolio-col6">Gain/Loss</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Object.values(portfolio).map(item => isEmpty(item) || isEmpty(sales[item.shoe_id]) ? null : <PortfolioItemContainer shoes={shoes} item={item} sales={sales[item.shoe_id]} key={`item${item.id}`} />)}
                    </tbody>
                </table>

                <Link to="/profile/portfolio/add">Add Item</Link>
            </div>
        )
    }
}

export default PortfolioIndex;