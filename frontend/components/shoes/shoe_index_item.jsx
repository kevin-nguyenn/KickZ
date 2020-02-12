import React from 'react';
import { Link } from 'react-router-dom';

export default ({ shoe }) => {
    const linkPath = `/shoes/${shoe.id}`
    return (
        <div className="shoe-item">
            <li className="shoe-item-display">
                <Link to={linkPath}>
                    <span className="shoe-item-img">
                        <img src={shoe.photoUrl} className="shoe-item-pic"/>
                    </span>
                    <span className="shoe-item-name">
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
};