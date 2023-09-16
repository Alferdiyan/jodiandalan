import Image from "next/image"
import Navbar from "../../components/Navbar"
import Hero from "../../components/Hero"
import Service from "../../components/Service"
import Projects from "../../components/Projects"
import Testimonials from "../../components/Testimonials"
import Clients from "../../components/Clients"
import CTA from "../../components/CTA"
// import Contact from "../../components/Contact"

export default function Home() {
    return (
        <main>
            <Navbar />
            <div className=' '>
                <Hero />
            </div>
            <div>
                <Service />
                <Clients />
                <Projects />
                <Testimonials />
                <section>
                    <CTA  />
                </section>
                {/* <Contact /> */}
            </div>
        </main>
    )
}
