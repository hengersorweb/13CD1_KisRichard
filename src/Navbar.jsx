import React from "react";
import { Link, NavLink } from 'react-router-dom'

const Navbar = (() => {
    return (
        <div>
            <nav className="pa3 pa4-ns bb bt">
                <Link className="link dim black b f1 f-headline-ns tc db mb1 mb1-ns" to="/">Covid</Link>
                <div className="tc pb3">
                    <NavLink className="link dim gray f6 f5-ns dib mr3" to="/">Főoldal</NavLink>
                    <NavLink className="link dim gray f6 f5-ns dib mr3" to="/ermesek">Az olimpia érmesei</NavLink>
                    <NavLink className="link dim gray f6 f5-ns dib mr3" to="/mermesek">A magyar érmesek</NavLink>
                </div>
            </nav>
        </div>
    )
})

export default Navbar