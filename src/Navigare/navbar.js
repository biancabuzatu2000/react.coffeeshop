import {Link, useMatch, useResolvedPath} from "react-router-dom"
import React from "react";
import ShoppingCart from "./ShoppingCart";

export default function Navbar() {

    return (
        <nav className="nav">
            <img src={'https://i.ytimg.com/vi/zy9neIJzttY/maxresdefault.jpg'} alt={Navbar}>
            </img>

            <ul>
                <CustomLink to="/home">Home</CustomLink>
                <CustomLink to="/Espresso">Espresso</CustomLink>
                <CustomLink to="/Fresh">Fresh Drinks and Iced Tea</CustomLink>
                <CustomLink to="/Frappucino">Frappucino</CustomLink>

                <CustomLink to="/Signin">Sign in</CustomLink>
                <CustomLink to="/ShoppingCart">
                    <img src={'https://static-00.iconduck.com/assets.00/shopping-trolley-emoji-512x512-ju7qcz5c.png'}
                         alt={ShoppingCart} width={50} height={50}/>

                </CustomLink>

            </ul>
        </nav>
    )
}

function CustomLink({to, children, ...props}) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({path: resolvedPath.pathname, end: true})

    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}