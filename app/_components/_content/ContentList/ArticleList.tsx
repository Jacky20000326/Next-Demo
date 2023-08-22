import React from "react";
import Styled from "./ArticleList.module.sass";
import Image from "next/image";
const ArticleList = () => {
    let testArr = [1, 2, 3, 4, 5];
    return (
        <div className={Styled.ArticleListContainer}>
            {testArr.map((item) => (
                <div className={Styled.ArticleListBlock}>
                    <div className={Styled.ArticleImgCube}>
                        <Image
                            width={120}
                            height={120}
                            alt="NextJS"
                            src="/rust2.jpeg"
                            style={{ objectFit: "contain" }}
                        />
                    </div>
                    <div className={Styled.ArticleContentCube}>
                        <div className={Styled.ArticleContentTitle}>
                            基於 Nginx 實現一個灰度上線系統
                        </div>
                        <div className={Styled.ArticleContentTime}>
                            2023年07月14日
                        </div>
                        <div className={Styled.ArticleContentIntroduction}>
                            軟件開發一般不會上來就是最終版本，而是會一個版本一個版本的迭代。
                            新版本上線前都會經過測試，但就算這樣，也不能保證上線了不出問題。
                            所以，在公司裏上線新版本代碼一般都是通過灰度系…
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ArticleList;
