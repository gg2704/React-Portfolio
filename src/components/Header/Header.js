import React from 'react';
import '../Header/Header.css';
import Typed from 'react-typed';

const Header = () => {
    return (
        <div className="header-wrapper">
            <canvas></canvas>
           <div className="main-info">
               <h1>Gabriels's Portfolio</h1>
               <Typed 
               className="typed-text"
               strings={["Web Design", "Web Development", "Node"]}
               typeSpeed={40}
               backSpeed={60}
               loop
                   />
                <a href="" target="blank" className="btn-main-offer">Connect with me</a>
           </div>
        </div>
    )
}

export default Header
