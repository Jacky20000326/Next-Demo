import React from "react";
import Styled from "./layout.module.sass";
const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className={Styled.ContentContainer}>
            <div className={Styled.decorationCircle2}></div>
            <div className={Styled.decorationCircle1}></div>
            {children}
        </div>
    );
};

export default layout;
