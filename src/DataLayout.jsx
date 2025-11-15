import { Outlet, Link, NavLink, useLocation } from "react-router";
import "./data.css"

export default function DataLayout() {
    const location = useLocation();
    
    return (
        <>
            <div>
                <h1>This is header..</h1>
            </div>
            <div>
                <ul>
                    {/* menggunakan anchor element */}
                    {/* <li><a href="/data/product">Products</a></li>
                    <li><a href="/data/customer">Customers</a></li>
                    <li><a href="/data/seller">Sellers</a></li> */}

                    <li><NavLink to="/data/product">Product</NavLink></li>
                    <li><NavLink to="/data/customer">Customer</NavLink></li>
                    <li><NavLink to="/data/seller">Seller</NavLink></li>
                </ul>
            </div>
            <Outlet/>
            <div>
                <p>This is footer</p>
                <p>location: {location.pathname}{location.search}{location.hash}</p>
            </div>
        </>
    )
}