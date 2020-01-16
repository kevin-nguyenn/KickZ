import React from 'react';

const Footer = () => {
    return (
        <section className="footer-container">
            <ul className="footer-list">
                <li className="footer-icon-container">
                    <a href="">
                        <i class="fab fa-linkedin"></i>
                    </a>
                </li>
                <li className="footer-icon-container">
                    <a href="">
                        <i class="fab fa-github"></i>
                    </a>
                </li>
            </ul>
            <div className="stockx-link-container">
                <p>
                    KickZ is a clone of STOCKX.com, the global destination for 
                    Live marketplace for exclusive sneakers, streetwear, handbags 
                    and watches.
                    <br/>
                    Follow the link below to visit the original site.
                    <a href="https://stockx.com/">
                        <button className="footer-link-button">
                            Visit StockX
                        </button>
                    </a>
                </p>
            </div>
        </section>
    )
}

export default Footer;