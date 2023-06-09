import React from "react"
import Image from "next/image"
import avatar1 from "../public/images/andalan.png"
import avatar2 from "../public/images/andalan.png"
import avatar3 from "../public/images/andalan.png"

const testimonialData = [
    {
        id: 1,
        rating: 4.5,
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna",
        avatar: avatar1,
        name: "John Doe",
        location: "New York, USA",
    },
    {
        id: 2,
        rating: 5,
        description:
            "Nulla facilisi. Vestibulum non purus a diam cursus tincidunt.",
        avatar: avatar2,
        name: "Jane Smith",
        location: "London, UK",
    },
    {
        id: 3,
        rating: 4,
        description: "In commodo lacinia ex, id interdum sem semper in.",
        avatar: avatar3,
        name: "David Johnson",
        location: "Sydney, Australia",
    },
    // Tambahkan data testimoni lainnya di sini
]

export default function Testimonials() {
    const renderRatingStars = (rating) => {
        const stars = []
        const fullStars = Math.floor(rating)
        const hasHalfStar = rating % 1 !== 0

        for (let i = 0; i < fullStars; i++) {
            stars.push(<span key={i}>&#9733;</span>) // Menggunakan karakter Unicode untuk simbol bintang
        }

        if (hasHalfStar) {
            stars.push(<span key='half'>&#9733;&#189;</span>) // Menambahkan setengah simbol bintang jika ada
        }

        return stars
    }

    return (
        <div>
            <h1>Testimonials</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8'>
                {testimonialData.map((testimonial) => (
                    <div
                        key={testimonial.id}
                        className='border p-10 w-[390px] rounded-lg'
                    >
                        <div className='flex items-center justify-between mb-4'>
                            <div>
                                Rating: {renderRatingStars(testimonial.rating)}
                            </div>
                            <Image
                                src={testimonial.avatar}
                                alt='Avatar'
                                width={40}
                                height={40}
                                className='rounded-full'
                            />
                        </div>
                        <p>{testimonial.description}</p>
                        <div className='flex items-center mt-4'>
                            <Image
                                src={testimonial.avatar}
                                alt='Avatar'
                                width={30}
                                height={30}
                                className='rounded-full'
                            />
                            <div className='ml-2'>
                                <p className='font-semibold'>
                                    {testimonial.name}
                                </p>
                                <p className='text-sm'>
                                    {testimonial.location}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
