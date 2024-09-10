

// IMPORT
import ImageMe from '../../assets/image-me.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import Resume from '../Home/RheillyAguilar.pdf'


export default function Home() {



    return (
        <section className='flex flex-wrap items-center justify-center gap-32 h-[100vh]' id='home'>
            <div>
                <img src={ImageMe} alt="" className='max-w-sm rounded-[50%] px-5' />
            </div>
            <div className='text-center text-[#2b2d42]'>
                <p className='my-2 text-xl'>Hello, I'm</p>
                <h1 className='my-2 font-bold text-4xl'>Rheilly Aguilar</h1>
                <h3 className='mt-2 mb-7 text-4xl'>Frontend Developer</h3>
                <a href={Resume} download='RheillyAguilar' className='bg-[#2b2d42] text-white py-2 px-10 rounded-md text-xll hover:border hover:border-[#2b2d42] hover:bg-transparent hover:text-[#2b2d42]'>
                    <FontAwesomeIcon icon={faDownload} /> Download CV
                </a>
            </div>

        </section>
    )
}
