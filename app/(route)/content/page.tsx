import React from "react";
import Styled from "./content.module.sass";
import MenuList from "../../_components/_content/ContentList/listMenu";
const content = () => {
    return (
        <>
            <div className={Styled.contentTitle}>Learning record</div>
            <MenuList />
        </>
    );
};

export default content;
