import React from 'react'
import { BsMouse } from "react-icons/bs"

import Logo from "../assets/logo.png"

const Misc = () => {
    return (
        <>
            <div className="cursor"></div>
            <a href="/" className="logo">
                <img src={Logo} alt="logo" data-cursorpointer />
            </a>
            <a href="/franchise" className="franchiseBtn" data-cursorpointer>
                GET A FRANCHISE
            </a>

            <BsMouse data-cursorpointer className="scroolBtn" />
        </>
    )
}

export default Misc