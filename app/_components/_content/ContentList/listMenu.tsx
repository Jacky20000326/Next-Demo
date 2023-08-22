import React from "react";
import Styled from "./listMenu.module.sass";
import MenuFilter from "./menuFilter";
import ArticleList from "./ArticleList";
const List = () => {
    return (
        <div className={Styled.menuListContainer}>
            <MenuFilter />
            <ArticleList />
        </div>
    );
};

export default List;
