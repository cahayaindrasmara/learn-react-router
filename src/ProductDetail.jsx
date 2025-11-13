import { useParams } from "react-router"

export default function ProductDetail(){
    const params = useParams();
    return(
        <>
            <h1>Product Detail Page {params.id}</h1>        
            <p>welcome to the product detail!</p>
        </>
    )
}