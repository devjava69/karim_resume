import Image from 'next/image'
import karim from '../../public/photo-profil-pro-karim.png'

export default function Hero() {
    return (
        <section className="
            bg-blue-950 flex-col text-yellow-300
            flex flex-col
            lg:flex-row
        ">
            <div className='flex-1'>
                <Image className='mx-auto' src={karim} alt='photo de karim' />
            </div>
            <div className='flex-1'>
                <h1 className="text-center pt-20">Karim TRABELSI</h1>
                <h2 className="text-center pt-5">Applications Conceptor-Developer</h2>
            </div>
        </section>
    )
}