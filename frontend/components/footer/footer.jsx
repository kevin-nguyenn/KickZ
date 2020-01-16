import React from 'react';
import { library, icon, findIconDefinition } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

class Footer extends React.Component {
    componentDidMount() {
        library.add(fab);
        const github = findIconDefinition( {prefix: 'fab', iconName: 'github' });
        const githubIcon = icon(github);
        const linkedin = findIconDefinition( {prefix: 'fab', iconName: 'linkedin' });
        const linkedinIcon = icon(linkedin);
        Array.from(githubIcon.node).map(n => document.getElementsByClassName('fa-github')[0].appendChild(n));
        Array.from(linkedinIcon.node).map(n => document.getElementsByClassName('fa-linkedin')[0].appendChild(n));
    }

    render() {
        return (
            <section className="footer-container">
                <ul className="footer-list">
                    <li className="footer-icon-container">
                        <a href="https://www.linkedin.com/in/kevin-nguyen-1583ab19b/" className="fa linkedin" target="_blank">
                            <div className="fab fa-linkedin"></div>
                        </a>
                    </li>
                    <li className="footer-icon-container">
                        <a href="https://github.com/kevin-nguyenn" className="fa github" target="_blank">
                            <div className="fab fa-github"></div>
                        </a>
                    </li>
                </ul>
                <div className="stockx-link-container">
                    <p id="stockx-link-cta">
                        KickZ is a clone of STOCKX.com, the global destination for 
                        Live marketplace for exclusive sneakers, streetwear, handbags 
                        and watches.
                        <br/>
                        Follow the link below to visit the original site.
                        <a href="https://stockx.com/" target="_blank">
                            <button className="footer-link-button">
                                Visit StockX
                            </button>
                        </a>
                    </p>
                </div>
            </section>
        )
    }
}

export default Footer;