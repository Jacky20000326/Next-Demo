import React from "react";

type apiDataType = {
    userId: number;
    id: number;
    title: string;
    body: string;
};

const getApiData = async () => {
    let apiResult = await fetch("https://jsonplaceholder.typicode.com/posts", {
        cache: "no-store",
    });
    return apiResult.json();
};

export default async function playerList() {
    let getApiDataResult: apiDataType[] = await getApiData();
    console.log(getApiDataResult);
    return (
        <>
            {getApiDataResult.map((item: apiDataType) => (
                <>
                    <div className="player">
                        <div className="player-title">title:{item.title}</div>
                        <div className="player-body">body:{item.body}</div>
                    </div>
                    <br />
                </>
            ))}
        </>
    );
}
