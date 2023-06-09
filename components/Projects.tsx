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
import roger from "../public/images/roger.png"
import hoopAi from "../public/images/hoopsAi.png"
import inVision from "../public/images/projects/inVisionUX.png"

const clientData = [
    {
        image: inVision,
    },
    {
        image: inVision,
    },
    {
        image: inVision,
    },
    {
        image: inVision,
    },
    {
        image: inVision,
    },
    {
        image: inVision,
    },
    {
        image: inVision,
    },
    {
        image: inVision,
    },
]

export default function Projects() {
    return (
        <div className='my-10'>
            <div className='flex flex-col py-8 justify-center items-center border'>
                <h1 className='font-semibold py-3 text-5xl'>Project Kami</h1>
                <p>Hasil karya Terbaik Kami</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8 mt-10'>
                {clientData.map((card, index) => (
                    <div className='flex justify-center'>
                        <Image
                            src={card.image}
                            alt=''
                            height={647}
                            width={517}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}
