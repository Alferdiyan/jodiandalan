import React from "react"
import jodi from "../public/images/jodiphoto.png"
import Image from "next/image"
import { Button } from "./ui/button"
import Navbar from "./Navbar"

export default function Hero() {
    return (
        <div className=' h-screen  border-red-600 bg-gradient-to-b from-yellow-100 to-blue-500'>
            <Navbar />

            <div className='pt-36 px-10 flex justify-center items-center'>
                <div className='flex flex-col justify-center items-center gap-5 '>
                    {/* <div className='lg:hidden'>
                        <Image
                            src={jodi}
                            alt=''
                            width={298}
                        />
                    </div> */}
                    <div className='flex flex-col justify-center items-center gap-4'>
                        <p className='text-3xl md:text-6xl font-extrabold'>
                            Your best Partner
                        </p>
                        <p className='text-xs md:text-base flex justify-items-center place-items-center font-medium text-slate-500  '>
                            Anda fokus bekerja mengurus pelanggan, sementara
                            Andalan Digital akan fokus bekerja membangun brand
                            bisnis Anda.
                        </p>
                    </div>

                    <Button
                        variant='default'
                        className='rounded-full w-1/'
                    >
                        LET &apos; S TALK
                    </Button>
                </div>
            </div>
        </div>
    )
}
