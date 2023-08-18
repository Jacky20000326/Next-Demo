import React from "react";
import Styled from "./DisplayBoard.module.sass";
import Image from "next/image";
const DisplayBoard = () => {
    return (
        <div className={Styled.displayBoardContainer}>
            <div className={Styled.DisplayBoardInnerContainer}>
                <Image
                    src="/NextLogo.png"
                    alt="NextJS"
                    width="150"
                    height="50"
                />

                <Image
                    src="/NodeLogo.png"
                    alt="NextJS"
                    width="150"
                    height="80"
                />
                <Image
                    src="/reactLogo.png"
                    alt="NextJS"
                    width="80"
                    height="80"
                />
            </div>
        </div>
    );
};

export default DisplayBoard;
