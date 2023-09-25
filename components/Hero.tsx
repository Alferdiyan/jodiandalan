import React from "react"
import jodi from "../public/images/jodiphoto.png"
import Image from "next/image"
import { Button } from "./ui/button"

export default function Hero() {
    return (
        <div className=' min-h-screen  px-24  bg-gradient-to-b from-yellow-100 to-blue-500'>
            <div className='flex flex-col justify-center items-center gap-5'>
                {/* <div className='lg:hidden'>
                        <Image
                            src={jodi}
                            alt=''
                            width={298}
                        />
                    </div> */}
                <p className='text-6xl font-extrabold'>Your best Partner</p>
                <p className='text-sm font-medium text-slate-500  '>
                    Anda fokus bekerja mengurus pelanggan, sementara Andalan
                    Digital akan fokus bekerja membangun brand bisnis Anda.
                </p>

                <Button
                    variant='default'
                    className='rounded-full w-1/'
                >
                    LET &apos; S TALK
                </Button>
            </div>
        </div>
    )
}
