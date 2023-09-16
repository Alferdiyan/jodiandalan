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
        id: 1,
        image: inVision,
        title: "Triniso — responsive eCommerce website design",
        description: 2017,
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
                    <Card
                        key={index}
                        className='border-4 relative flex flex-col  border-[#D4DDF8] rounded-3xl p-10 w-[336px] h-[336px] '
                    >
                        <Image
                            key={card.id}
                            src={card.image}
                            alt=''
                            className='absolute z-0 h-full'
                        />
                        <CardHeader className='flex justify-start border z-10 text-white  gap-2'>
                            <CardDescription className='font-normal fex justify-items-center'>
                                {card.description}
                            </CardDescription>
                            <CardTitle className='font-semibold'>
                                {card.title}
                            </CardTitle>
                        </CardHeader>
                    </Card>
                ))}
            </div>
        </div>
    )
}


{
    /* {clientData.map((card, index) => (
                    <div className='flex justify-center'>
                        <Image
                            src={card.image}
                            alt=''
                            height={647}
                            width={517}
                            
                        />

                    </div>
                ))} */
}
