import React from "react";
import Styled from "./listMenu.module.sass";
import MenuFilter from "./menuFilter";
const List = () => {
    return (
        <div className={Styled.menuListContainer}>
            <MenuFilter />
        </div>
    );
};

export default List;
