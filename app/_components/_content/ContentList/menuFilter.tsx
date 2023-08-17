import React from "react";
import Styled from "./menuFilter.module.sass";
const menuFilter = () => {
    return (
        <div className={Styled.menuFilterContainer}>
            <div className={Styled.option}>Web3</div>
            <div className={Styled.option}>GIT</div>
            <div className={Styled.option}>JS</div>
            <div className={Styled.option}>React</div>
            <div className={Styled.option}>VUE</div>
        </div>
    );
};

export default menuFilter;
