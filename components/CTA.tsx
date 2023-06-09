import Image from "next/image"
import Link from "next/link"
import React from "react"
import behance from "../public/icon/Iconbehance.svg"
import dribbbel from "../public/icon/Icondribbbel.svg"
import instagram from "../public/icon/Iconinstagram.svg"

const social = [
    {
        image: behance,
    },
    {
        image: dribbbel,
    },
    {
        image: instagram,
    },
]

export default function CTA() {
    return (
        <div className='py-16 bg-gradient-to-b from-white to-[#D4DDF8] flex flex-col items-center justify-center '>
            <p className='text-5xl mb-10'>
                Tertarik untuk kerja sama dengan kami?
            </p>
            <Link href='/contact'>
                <button className='bg-blue-500 w-56 h-12 rounded-full text-white px-4 py-2  mt-2 uppercase'>
                    Let's Talk
                </button>
            </Link>
            <div className='flex gap-2 mt-28'>
                {social.map((card, index) => (
                    <div className='h-12 w-12 flex justify-center bg-white rounded-full'>
                        <Image
                            src={card.image}
                            alt=''
                            height={26}
                            width={26}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}
