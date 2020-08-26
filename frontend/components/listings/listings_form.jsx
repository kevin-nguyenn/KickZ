import React from 'react';
import isEmpty from '../../util/object_api_util';
// import ProductDropdown from './listings_form_product_dropdown';

const sizes = [10];

class ListingsForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user_id: this.props.currentUser.id,
            price: "",
            // errors: this.props.errors,
            shoes: []
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        if (isEmpty(this.props.shoes)) {
            this.props.fetchShoes().then((pl) => this.setState({ shoes: Object.values(pl.shoes) }));
        } else {
            this.setState({ shoes: Object.values(this.props.shoes) });
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const itemData = document.getElementById("listings-form-product-dropdown").value.split('|jj|');
        let ss = document.getElementById("listings-form-size-sex-dropdown").value;
        let sn = document.getElementById("listings-form-size-num-dropdown").value;
        let ot = document.getElementById("listings-form-type-dropdown").value;
        const item = Object.assign({}, this.state, {
            product_id: itemData[0],
            order_type: ot,
            size: sn,
            sex: ss,
            asker_id: this.state.user_id,
            active: 'true',
            sold: 'false',
            shipped: 'false'
        });
        this.props.createOrder(item).then(success => {
            window.location.href = window.location.origin + `/#/profile/listings/created`;
            // this.props.history.push('/profile/listings');
        }, failure => {
            this.setState({ errors: failure.errors });
            $(document.getElementById("listings-form-errors")).removeClass('hidden');
        });
    }

    handleInput(type) {
        return (e) => { this.setState({ [type]: Math.round(e.target.value) }) }
    }

    // renderErrors() {
    //     return (
    //         <ul className="error-list">
    //             {this.state.errors.map((error, i) => (
    //                 <li className="error-item" key={`error-${i}`}>
    //                     {error}
    //                 </li>
    //             ))}
    //         </ul>
    //     );
    // }

    componentWillUnmount() {
        this.state.errors = [];
        // this.props.resetErrors();
    }

    render() {
        let shoes = this.state.shoes;
        return (
            <div id="listings-form-div">
                <form id="listings-form" onSubmit={this.handleSubmit}>
                    <label id="listings-form-type">
                        <select defaultValue="" id="listings-form-type-dropdown">
                            <option value="" disabled>Type</option>
                            <option value="buy" key="sex-opt-M">Buying</option>
                            <option value="sell" key="sex-opt-F">Selling</option>
                        </select>
                    </label>
                    <label id="listings-shoes">
                        <ProductDropdown shoes={shoes} />
                    </label>
                    <label id="listings-input-size">
                        <select defaultValue="" id="listings-form-size-sex-dropdown">
                            <option value="" disabled>Sex</option>
                            <option value="M" key="sex-opt-M">M</option>
                            {/* <option value="F" key="sex-opt-F">F</option>
                            <option value="K" key="sex-opt-K">K</option> */}
                        </select>
                        <select defaultValue="" id="listings-form-size-num-dropdown">
                            <option value="" disabled>Size</option>
                            {sizes.map(size => (
                                <option value={size} key={`size-opt-${size}`}>{size}</option>
                            ))}
                        </select>
                    </label>
                    <label>
                        <input type="number" min="0" step="1" id="listings-form-price" placeholder="Price" onChange={this.handleInput('price')} />
                    </label>
                    <input type="submit" value="Submit" id="listings-form-submit" />
                </form>
                {/* <div id="listings-form-errors" className="hidden">
                    {this.renderErrors()}
                </div> */}
            </div>
        );
    }
}

export default ListingsForm;