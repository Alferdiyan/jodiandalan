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

const clientData = [
    { id: 1, image: roger },
    {
        id: 2,
        image: hoopAi,
    },
    {
        id: 3,
        image: roger,
    },
    {
        id: 4,
        image: hoopAi,
    },
    {
        id: 5,
        image: roger,
    },
    {
        id: 6,
        image: roger,
    },
    {
        id: 7,
        image: roger,
    },
    {
        id: 8,
        image: roger,
    },
    {
        id: 9,
        image: roger,
    },
]

export default function Clients() {
    return (
        <div className='my-10 h-screen'>
            <div
                className='flex flex-col py-8 justify-center items-center
            '
            >
                <h1 className='font-semibold py-3 text-5xl'>Client Kami</h1>
                <p>
                    Menjaga hubungan yang baik dengan Client menjadi prioritas
                    bagi kami
                </p>
            </div>
            <div className='grid grid-cols-5  mt-10 items-center'>
                {/* Kolom 1 */}
                <div className='  flex justify-center'>
                    {clientData.slice(0, 1).map((card, index) => (
                        <Image
                            key={card.id}
                            src={card.image}
                            alt=''
                            height={110}
                            width={170}
                        />
                    ))}
                </div>

                {/* Kolom 2 */}
                <div className=' grid justify-center'>
                    {clientData.slice(1, 3).map((card, index) => (
                        <Image
                            src={card.image}
                            alt=''
                            height={110}
                            width={170}
                        />
                    ))}
                </div>

                {/* Kolom 3 */}
                <div className='  grid justify-center'>
                    {clientData.slice(3, 6).map((card, index) => (
                        <Image
                            src={card.image}
                            alt=''
                            height={110}
                            width={170}
                        />
                    ))}
                </div>

                {/* Kolom 4 */}
                <div className='  grid justify-center'>
                    {clientData.slice(6, 8).map((card, index) => (
                        <Image
                            src={card.image}
                            alt=''
                            height={110}
                            width={170}
                        />
                    ))}
                </div>

                {/* Kolom 5 */}
                <div className='col-span-1 grid justify-center'>
                    {clientData.slice(8, 9).map((card, index) => (
                        <Image
                            src={card.image}
                            alt=''
                            height={110}
                            width={170}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}
