import Image from "next/image"
import andalan from "../public/images/andalan.png"

export default function Navbar() {
    return (
        <div className='px-10 py-3 flex justify-between bg'>
            <Image
                src={andalan}
                alt=''
                width={40}
            />
            <ul>
                <li>
                    <button>Menu</button>
                </li>
            </ul>
        </div>
    )
}
