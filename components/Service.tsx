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
        <div className='bg-gradient-to-b from-[#D4DDF8] to-white '>
            <div className=' flex justify-center border border-rose-300'>
                <p>What We Do</p>
            </div>
            <div className='grid grid-cols-3 gap-8 mt-10'>
                {cardData.map((card, index) => (
                    <Card
                        key={index}
                        className='border-4 border-[#D4DDF8] rounded-3xl p-10 w-[336px] h-[336px] '
                    >
                        <Image
                            src={card.image}
                            alt=''
                            height={77}
                        />
                        <CardHeader className='flex justify-center border'>
                            <CardTitle className='font-semibold'>
                                {card.title}
                            </CardTitle>
                            <CardDescription className='font-normal justify-center'>
                                {card.description}
                            </CardDescription>
                        </CardHeader>
                    </Card>
                ))}
            </div>
        </div>
    )
}
{
    /* <div>
                <Card className='w-[336px] h-[336px] border-4 border-[#D4DDF8]  rounded-3xl p-10'>
                    <Image
                        src={visual}
                        alt=''
                        height={77}
                    />
                    <CardHeader className='flex justify-center border'>
                        <CardTitle className='font-semibold'>
                            Visual Branding
                        </CardTitle>
                        <CardDescription className='font-normal justify-center'>
                            Logo Mark, Skema Warna, Tipografi, Branding
                            Guidelines, Desain Materi Promosi & Marketing,
                            Packaging.
                        </CardDescription>
                    </CardHeader>
                </Card>
            </div> */
}
