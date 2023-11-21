import React from "react";
import { Link } from "react-router-dom";

export function Navigation() {
    return(
        <nav className="n-[50px] flex justify-between px-5 py-5 mb-4 bg-gray-400 text-white">
            <span className="font-bold">React Products App</span>
            <span>
                <Link to="/" className="mr-2">Products</Link>
                <Link to="/about">About</Link>
            </span>
        </nav>
    )
}