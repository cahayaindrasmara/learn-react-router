import { useNavigate } from "react-router"

export default function Home() {
    const navigate = useNavigate();
    function handleNav() {
        navigate({
            pathname:  "/data"
        })
    }
    return (
        <div>
            <h1>Home Page</h1>
            <p>Selamat datang di Home...</p>
            <button onClick={handleNav}>Go to Data page</button>
        </div>
    )
}