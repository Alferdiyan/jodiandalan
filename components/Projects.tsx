import React from "react"
import Image from "next/image"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "../components/ui/card"
import roger from "../public/images/roger.png"
import hoopAi from "../public/images/hoopsAi.png"
import COFFEEBAE from "../public/images/projects/DESAIN LOGO COFFEEBAE 2.jpg"
import inVisionUX from "../public/images/projects/inVisionUX.png"

const clientData = [
    {
        id: 1,
        image: inVisionUX,
        title: "Triniso — Responsive eCommerce Website Design",
        description: "2017", // Ubah ini menjadi string jika description adalah teks
    },
    {
        id: 2,
        image: inVisionUX,
        title: "Triniso — Responsive eCommerce Website Design",
        description: "2017", // Ubah ini menjadi string jika description adalah teks
    },
    {
        id: 3,
        image: inVisionUX,
        title: "Triniso — Responsive eCommerce Website Design",
        description: "2017", // Ubah ini menjadi string jika description adalah teks
    },
    {
        id: 4,
        image: inVisionUX,
        title: "Triniso — Responsive eCommerce Website Design",
        description: "2017", // Ubah ini menjadi string jika description adalah teks
    },
]

export default function Projects() {
    return (
        <div className='my-10'>
            <div className='flex flex-col py-8 justify-center items-center '>
                <h1 className='font-semibold py-3 text-5xl'>Project Kami</h1>
                <p>Hasil Karya Terbaik Kami test</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-2 mt-10'>
                {clientData.map((card) => (
                    <Card
                        key={card.id}
                        className='border-4 relative flex flex-col border-[#D4DDF8]  overflow-hidden last:rounded-3xl p-10 w-[336px] h-[336px]'
                    >
                        <Image
                            src={card.image}
                            alt=''
                            className='w-full absolute top-0 left-0 overflow-hidden z-0 h-full'
                        />
                        <CardHeader className='flex justify-start border z-10 text-white gap-2'>
                            <CardDescription className='font-normal flex justify-items-center'>
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
