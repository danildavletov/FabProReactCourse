import { useParams } from "react-router-dom"

export default ()=>{
    const params = useParams();
    return(
        <p>Котик номер {params.catId}</p>
    )
}