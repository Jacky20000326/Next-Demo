import React from "react";
import Styled from "./main.module.sass";
const Main = () => {
    return (
        <div className={Styled.aboutContainer}>
            <div className={Styled.aboutTitle}>CODE SHARING</div>
            <div className={Styled.aboutContent}>
                <p className={Styled.typeFirstLine}>
                    Engineering is about problem-solving , constantly seeking
                </p>
                <p className={Styled.typeSecondLine}>
                    innovative ways to overcome challenges
                </p>
            </div>
            <div className={Styled.aboutBtnGroup}>
                <div className={Styled.welcome}>WELCOME</div>
                <div className={Styled.Contact}>CONTACT</div>
            </div>
            <div className={Styled.decorationCircle2}></div>
            <div className={Styled.decorationCircle1}></div>
        </div>
    );
};

export default Main;
