import React from "react";
import Styled from "./Footer.module.sass";
const Footer = () => {
    return (
        <div className={Styled.footerContainer}>
            <div className={Styled.footerContent}>
                Copyright © 2023 Jacky. Built with myself.
            </div>
        </div>
    );
};

export default Footer;
