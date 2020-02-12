import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

// class ShoeIndexItem extends React.Component {
//     constructor(props) {
//         super(props);
//     }

//     render() {
//         // if (this.props.shoes === undefined) return null;
//         const linkPath  = `/shoes/${shoe.id}/views`;
//         return (
//             <div className="shoe-item">
//                 <li className="shoe-item-display" >
//                         <div className="shoe-item-img">
//                             <img src={this.props.shoe.photoUrl} 
//                                 alt="" className="shoe-item-pic"
//                             />
//                         </div>
//                         <span className="shoe-item-name">
//                             {this.props.shoe.name} 
//                             <br/>
//                             ${this.props.shoe.price}
//                         </span>
//                 </li>
//             </div>
//         );
//     }
// };

// export default withRouter(ShoeIndexItem);

export default ({ shoe }) => {
    const linkPath = `/shoes/${shoe.id}`
    // console.dir(shoe);
    return (
        <div className="shoe-item">
            <li className="shoe-item-display">
                <Link to={linkPath}>
                    <span className="shoe-item-img">
                        <img src={shoe.photoUrl} className="shoe-item-pic"/>
                    </span>
                    <span className="products-index-tag">
                        <h3>
                            <ul>
                                <li>
                                    {shoe.name}
                                </li>
                                <li>
                                    ${shoe.price}
                                </li>
                            </ul>
                        </h3>
                    </span>
                </Link>
            </li>
        </div>
    );
}