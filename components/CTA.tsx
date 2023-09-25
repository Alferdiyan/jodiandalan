import Image from "next/image"
import Link from "next/link"
import React from "react"
import behance from "../public/icon/Iconbehance.svg"
import dribbbel from "../public/icon/Icondribbbel.svg"
import instagram from "../public/icon/Iconinstagram.svg"
import { Button } from "./ui/button"

const social = [
    {
        id: 1,
        image: behance,
        href: "https://www.behance.net/jodiandalan",
    },
    {
        id: 2,
        image: dribbbel,
        href: "https://dribbble.com/jodihartanto",
    },
    {
        id: 3,
        image: instagram,
        href: "https://www.instagram.com/andalandigital.id/",
    },
]

export default function CTA() {
    return (
        <div className='border border-red-800 py-16 bg-gradient-to-b from-white to-[#D4DDF8] flex flex-col items-center justify-center '>
            <p className='text-5xl mb-10'>
                Tertarik untuk kerja sama dengan kami?
            </p>
            <Link href='https://wa.me/message/WHEYTKS4DT6RJ1'>
                <Button
                    variant='default'
                    className='rounded-full w-56 h-12'
                >
                    LET &apos; S TALK
                </Button>
            </Link>
            <div className='flex gap-2 mt-28'>
                {social.map((card, index) => (
                    <div key={card.id}>
                        <Link
                            href={card.href}
                            className='h-12 w-12 flex justify-center bg-white rounded-full'
                        >
                            <Image
                                src={card.image}
                                alt=''
                                height={26}
                                width={26}
                            />
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}
