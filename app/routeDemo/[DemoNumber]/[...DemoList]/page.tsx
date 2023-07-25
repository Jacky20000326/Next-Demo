const DemoList = ({params}:{params:{
    DemoNumber:string,
    DemoList:[string]
}})=>{
    console.log(params.DemoList)
    return(
        <>
            <h1>DEMO LIST</h1>
            <hr />
            <h4>DEMO LIST</h4>
            <ul>
                {
                    params.DemoList.map(listItem => 

                    <li>
                        {listItem}
                    </li>)
                }
            </ul>
            <br />
            <hr />
            <h4>Route Number</h4>
            {params.DemoNumber}
        </>
    )
}

export default DemoList