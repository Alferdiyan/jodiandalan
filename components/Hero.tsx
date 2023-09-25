import React from "react"
import jodi from "../public/images/jodiphoto.png"
import Image from "next/image"
import { Button } from "./ui/button"
import Navbar from "./Navbar"
import cloud from "../public/cloud.png"
import Link from "next/link"

export default function Hero() {
    return (
        <div className='relative h-screen bg-gradient-to-tl from-blue-700  to-cyan-300 '>
            <Navbar />
            {/*  border-red-600 bg-gradient-to-b from-yellow-10 to-blue-500 */}

            <div className='pt-36 px-10 flex justify-center items-center z-10'>
                <div className='flex flex-col justify-center items-center gap-5 '>
                    {/* <div className='lg:hidden'>
                        <Image
                            src={jodi}
                            alt=''
                            width={298}
                        />
                    </div> */}
                    <div className='flex flex-col justify-center items-center gap-4 text-white'>
                        <p className='text-3xl md:text-6xl font-extrabold'>
                            Your best Partner
                        </p>
                        <div className='text-xs md:text-lg flex flex-col justify-center items-center font-medium  '>
                            <p>Anda fokus bekerja mengurus pelanggan,</p>
                            <p>
                                kami Andalan Digital akan fokus bekerja
                                membangun brand bisnis Anda.
                            </p>
                        </div>
                    </div>
                    <Link href='https://wa.me/message/WHEYTKS4DT6RJ1'>
                        <Button
                            variant='default'
                            className='rounded-full w-1/'
                        >
                            LET &apos; S TALK
                        </Button>
                    </Link>
                </div>
            </div>
            <Image
                src={cloud}
                className='cloud absolute bottom-0 opacity-20'
                alt='cloud'
            />
        </div>
    )
}
