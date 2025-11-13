import { useParams } from "react-router";

export default function Image(){
    const params = useParams();

    return (
        <>
            <h1>Images Page</h1>
            <p>image pages: {params['*']}</p>
        </>
    )
}