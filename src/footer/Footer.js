import React from 'react'
import unilorin from "../images/unilorin.png";
import "../footer/footer.css"
const Footer = () => {
    return (
        <div>
            <section className='foot'>
               <div className="logo-name">
            <img className="image" src={unilorin} alt="unilorin" height="60" />
            <h4 className="name">Unilorin</h4>
            <h4 className="hostels">Hostels</h4>
          </div>
          <div className='foot-nav'>
                <ul>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>FAQs</li>
                </ul>
          </div>
          <div className="reserved">
            <h4>© 2022 All Rights Reserved.</h4>
            <h4>Terms of Service | Privacy Policy</h4>
          </div>
          </section>
        </div>
    )
}

export default Footer
