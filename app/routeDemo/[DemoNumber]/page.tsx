const RouteDemoTest = ({params}:{params:{DemoNumber:string}})=>{
    console.log(params)
    return(<>
    <h1>
        RouteDemoTest
    </h1>
    <h4>Page Number {params.DemoNumber}</h4>
    </>)
}

export default RouteDemoTest