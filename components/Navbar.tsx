"use client"

import Image from "next/image"
import andalan from "../public/images/andalan.png"
import { useState } from "react"

export default function Navbar() {
    const [menuItems] = useState([
        { id: 2, name: "About", link: "#" },
        { id: 3, name: "Service", link: "#" },
        { id: 4, name: "Portfolio", link: "#" },
        { id: 5, name: "Driblle", link: "https://dribbble.com/FerdiyanDSIGN" },
        { id: 6, name: "Behance", link: "https://www.behance.net/ferdiyanUI" },
    ])

    return (
        <div className='px-10 py-3 flex justify-between bg'>
            <Image
                src={andalan}
                alt=''
                width={40}
            />
            <ul>
                <li>
                    <button>Menu</button>
                </li>
            </ul>
        </div>
    )
}
