import React from 'react';
import { Link } from 'react-router-dom';

export default ({ watchlist }) => {
    return (
        <div className="watchlist-items">
            <li className="watchlist-item-display">
                <Link>
                    {/* show each followed shoe here --------------- */}
                    <span>
                        {/* shoe img here -------------------------- */}
                    </span>
                </Link>
            </li>
        </div>
    );
};