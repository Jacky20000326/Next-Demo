import React from "react";
import Styled from "./Header.module.sass";
import Link from "next/link";
const Header = () => {
    return (
        <div className={Styled.headerContainer}>
            <div className={Styled.Logo}>Jacky Blog</div>
            <div className={Styled.content}>
                <Link href="/content">Content</Link>
            </div>
            <div className={Styled.about}>
                <Link href="/about">About</Link>
            </div>
        </div>
    );
};

export default Header;
