import React from "react"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "../components/ui/card"
import Image from "next/image"
import visual from "../public/icon/visual-branding.png"

const cardData = [
    {
        title: "Visual Design",
        description:
            "Logo Mark, Skema Warna, Tipografi, Branding Guidelines, Desain Materi Promosi & Marketing, Packaging.",
        image: visual,
    },
    {
        title: "Visual Branding",
        description:
            "Logo Mark, Skema Warna, Tipografi, Branding Guidelines, Desain Materi Promosi & Marketing, Packaging.",
        image: visual,
    },

    {
        title: "Company Profile",
        description:
            "Logo Mark, Skema Warna, Tipografi, Branding Guidelines, Desain Materi Promosi & Marketing, Packaging.",
        image: visual,
    },

    // Tambahkan data untuk kartu lainnya di sini
]

export default function Service() {
    return (
        <div className=' min-h-screen px-28 selection: bg-gradient-to-b from-[#D4DDF8] to-white '>
            <div className=' flex justify-center text-5xl font-semibold'>
                <p>What We Do</p>
            </div>
            <div className='grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mt-24 justify-center'>
                {cardData.map((card, index) => (
                    <Card
                        key={index}
                        className='border-4 flex flex-col items-center justify-center border-[#D4DDF8] rounded-3xl p-10 w-[336px] h-[336px] '
                    >
                        <Image
                            src={card.image}
                            alt=''
                            height={77}
                        />
                        <CardHeader className='flex justify-center items-center gap-2'>
                            <CardTitle className='font-semibold'>
                                {card.title}
                            </CardTitle>
                            <CardDescription className='font-normal fex justify-items-center'>
                                {card.description}
                            </CardDescription>
                        </CardHeader>
                    </Card>
                ))}
            </div>
        </div>
    )
}
