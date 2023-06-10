import React from "react"
import jodi from "../public/images/jodiphoto.png"
import Image from "next/image"
import { Button } from "./ui/button"

export default function Hero() {
    return (
        <div className=' h-screen px-24 bg-gradient-to-b from-white to-[#D4DDF8]'>
            <div className='flex justify-center'>
                <p className='uppercase text-9xl font-bold text-white'>
                    designer.
                </p>
            </div>
            <div className='flex justify-between'>
                <div className='flex flex-col gap-4'>
                    <p className='text-xs uppercase'>andalan design</p>
                    <p className='text-6xl font-extrabold'>
                        Logo and Brand
                        <br /> Designer
                    </p>
                    <p className='text-xs font-medium text-slate-500'>
                        Over the past 9 years, as an art director and designer,
                        I&apos;ve worked <br />
                        with big companies and up-and-coming startups to
                        successfully <br /> help them reach their full potential
                        and attract new customers.
                    </p>
                    <div className='flex gap-4 '>
                        <p className=''>View Project</p>
                        <p className='text-xs font-medium text-slate-500 flex items-center'>
                            or
                        </p>
                        <p>Read About Me</p>
                    </div>
                    <Button
                        variant='default'
                        className='rounded-full w-1/2'
                    >
                        LET &apos; S TALK
                    </Button>
                </div>
                <div>
                    <Image
                        src={jodi}
                        alt=''
                        width={298}
                    />
                </div>
            </div>
        </div>
    )
}
