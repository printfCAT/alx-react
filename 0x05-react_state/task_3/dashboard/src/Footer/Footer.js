import { getFullYear, getFooterCopy } from '../utils/utils.js';
import React from 'react';
import './Footer.css';
import appContext from '../App/AppContext.js';


function Footer() {
    return (
        <appContext.Consumer>
          {
            (context) => {
              return (
                <footer className="Footer">
                  <p>
                    <i>Copyright {getFullYear()} - {getFooterCopy()}</i>
                  </p>
                  {context.user.isLoggedIn && <a href='#'>Contact us</a>}
                </footer>
              );
            }
          }
        </appContext.Consumer>
    );
}

export default Footer;
