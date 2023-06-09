// use client
import React, { useState } from "react"

export default function Contact() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [service, setService] = useState("")
    const [budget, setBudget] = useState("")

    const handleSubmit = (e: { preventDefault: () => void }) => {
        e.preventDefault()
        // Logika untuk mengirim data ke WhatsApp
        const message = `Nama: ${name}\nEmail: ${email}\nJasa: ${service}\nBudget: ${budget}`
        const encodedMessage = encodeURIComponent(message)
        const whatsappLink = `https://wa.me/6281392955870?text=${encodedMessage}`
        window.open(whatsappLink, "_blank")
    }

    return (
        <div className='container mx-auto py-8'>
            <h1 className='text-3xl font-bold mb-4'>Hubungi Kami</h1>
            <p>
                Silakan lengkapi formulir di bawah ini untuk menghubungi kami.
            </p>
            <form
                onSubmit={handleSubmit}
                className='mt-8'
            >
                <div className='mb-4'>
                    <label
                        htmlFor='name'
                        className='block font-semibold mb-2'
                    >
                        Nama
                    </label>
                    <input
                        type='text'
                        id='name'
                        className='w-full border border-gray-300 rounded px-3 py-2'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className='mb-4'>
                    <label
                        htmlFor='email'
                        className='block font-semibold mb-2'
                    >
                        Email
                    </label>
                    <input
                        type='email'
                        id='email'
                        className='w-full border border-gray-300 rounded px-3 py-2'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className='mb-4'>
                    <label
                        htmlFor='service'
                        className='block font-semibold mb-2'
                    >
                        Jasa
                    </label>
                    <select
                        id='service'
                        className='w-full border border-gray-300 rounded px-3 py-2'
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                        required
                    >
                        <option value=''>Pilih Jasa</option>
                        <option value='Visual Design'>Visual Design</option>
                        <option value='Branding'>Branding</option>
                        <option value='Company Profile'>Company Profile</option>
                    </select>
                </div>
                <div className='mb-4'>
                    <label
                        htmlFor='budget'
                        className='block font-semibold mb-2'
                    >
                        Budget
                    </label>
                    <input
                        type='text'
                        id='budget'
                        className='w-full border border-gray-300 rounded px-3 py-2'
                        value={budget}
                        onChange={(e) => setBudget(e.target.value)}
                        required
                    />
                </div>
                <button
                    type='submit'
                    className='bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded'
                >
                    Hubungi Kami
                </button>
            </form>
        </div>
    )
}
