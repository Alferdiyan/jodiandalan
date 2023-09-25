"use client"

import Image from "next/image"
import andalan from "../public/images/andalan.png"
import { useState } from "react"
import { Button } from "./ui/button"
import { CgMenuRight } from "react-icons/cg"
import { IoMdClose } from "react-icons/io"

export default function Navbar() {
    const [menuItems] = useState([
        { id: 2, name: "About", link: "#" },
        { id: 3, name: "Service", link: "#" },
        { id: 4, name: "Portfolio", link: "#" },
        { id: 5, name: "Driblle", link: "https://dribbble.com/FerdiyanDSIGN" },
        { id: 6, name: "Behance", link: "https://www.behance.net/ferdiyanUI" },
    ])
    const [open, setOpen] = useState(true)

    return (
        <div className='px-24 py-5 bg-yellow-50'>
            <div className='hidden md:flex justify-between'>
                <div className='flex gap-10'>
                    <a
                        href='/'
                        className='flex gap-2 font-semibold hover:text-secondary text-3xl'
                    >
                        <Image
                            src={andalan}
                            alt=''
                            width={60}
                        />
                    </a>

                    {/* Nav Menu */}

                    <ul
                        className={`flex gap-4 justify-center font-semibold items-center`}
                    >
                        {menuItems.map((item) => (
                            <li
                                className='hover:text-secondary'
                                key={item.id}
                            >
                                <a href={item.link}>{item.name}</a>
                            </li>
                        ))}
                    </ul>
                </div>
                <Button
                    variant='default'
                    className='rounded-full w-56 h-12'
                >
                    LET &apos; S TALK
                </Button>
            </div>

            <div className='md:hidden '>
                <div
                    onClick={() => setOpen(false)}
                    className={`${
                        open ? "block" : "hidden"
                    } bg-transparent fixed inset-0  cursor`}
                >
                    <ul
                        className={`${
                            open ? "block" : "hidden"
                        } bg-base-100 opacity-95 text-2xl shadow-2xl fixed w-screen h-screen left-0 right-0 top-0  flex flex-col justify-center items-center   rounded-xl    z-40  overflow-hidden gap-3 `}
                    >
                        <div
                            onClick={() => setOpen(false)}
                            className={`${
                                open ? "block" : "hidden"
                            } bg-transparent fixed inset-0 z-40 cursor`}
                        ></div>
                        <div
                            className='cursor-pointer fixed top-3 right-3 z-50'
                            onClick={() => setOpen(!open)}
                        >
                            {!open ? (
                                <CgMenuRight
                                    size={24}
                                    color='#fff'
                                />
                            ) : (
                                <IoMdClose
                                    size={24}
                                    color='#fff'
                                />
                            )}
                        </div>
                        {menuItems.map((item) => (
                            <li
                                key={item.id}
                                className='hover:bg-secondary'
                            >
                                <a href={item.link}>{item.name}</a>
                            </li>
                        ))}
                    </ul>

                    <div
                        className='cursor-pointer fixed top-3 right-3 '
                        onClick={() => setOpen(!open)}
                    >
                        {!open ? (
                            <CgMenuRight
                                size={24}
                                color='#fff'
                            />
                        ) : (
                            <IoMdClose
                                size={24}
                                color='#fff'
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
