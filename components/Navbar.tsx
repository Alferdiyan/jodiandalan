"use client"

import Image from "next/image"
import andalan from "../public/images/andalan.png"
import { useState } from "react"
import { Button } from "./ui/button"
import { CgMenuRight } from "react-icons/cg"
import { IoMdClose } from "react-icons/io"
import jodi from "../public/images/jodiphoto.png"
import Link from "next/link"

export default function Navbar() {
    const [menuItems] = useState([
        { id: 2, name: "About", link: "#" },
        { id: 3, name: "Service", link: "#" },
        { id: 4, name: "Portfolio", link: "#" },
        { id: 5, name: "Driblle", link: "https://dribbble.com/FerdiyanDSIGN" },
        { id: 6, name: "Behance", link: "https://www.behance.net/ferdiyanUI" },
    ])
    const [open, setOpen] = useState(false)

    return (
        <div className='px-24 py-5 '>
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
                <Link href='https://wa.me/message/WHEYTKS4DT6RJ1'>
                    <Button
                        variant='default'
                        className='rounded-full w-56 h-12'
                    >
                        LET &apos; S TALK
                    </Button>
                </Link>
            </div>

            {/* tombol botton Nav */}

            <div className='md:hidden border'>
                <div>
                    <a
                        href='/'
                        className='fixed top-3 left-5 gap-2 font-semibold hover:text-secondary text-3xl'
                    >
                        <Image
                            src={andalan}
                            alt=''
                            width={35}
                        />
                    </a>
                    <div
                        className='cursor-pointer fixed top-3 right-3 z-50'
                        onClick={() => setOpen(!open)}
                    >
                        {!open ? (
                            <CgMenuRight
                                size={24}
                                color='#0000FF'
                            />
                        ) : (
                            <IoMdClose
                                size={24}
                                color='#fff'
                            />
                        )}
                    </div>
                </div>

                <div
                    onClick={() => setOpen(false)}
                    className={`${
                        open ? "block" : "hidden"
                    } bg-transparent fixed inset-0  cursor`}
                ></div>

                <div
                    onClick={() => setOpen(false)}
                    className={`${
                        open ? "block" : "hidden"
                    } bg-transparent fixed inset-0 z-40 cursor`}
                ></div>

                <ul
                    className={`${
                        open ? "block" : "hidden"
                    } bg-base-100 opacity-95 text-2xl shadow-2xl fixed w-screen h-screen left-0 right-0 top-0  flex flex-col justify-center items-center       z-40  overflow-hidden gap-3 bg-blue-500`}
                >
                    {menuItems.map((item) => (
                        <li
                            key={item.id}
                            className='hover:text-primary text-white'
                        >
                            <a href={item.link}>{item.name}</a>
                        </li>
                    ))}
                    {/* <div className='fixed bottom-0 right-0 '>
                        <Image
                            src={jodi}
                            alt=''
                            width={200}
                        />
                    </div> */}
                </ul>
            </div>
        </div>
    )
}
