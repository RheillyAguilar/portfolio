

import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

export default function Navigation() {

    const [mobile, setMobile] = useState(false)
    const [sticky, setSticky] = useState(false)
    
    const stickyNavigation = () => {
        if(window.scrollY >= 10) {
            setSticky(true)
        } else {
            setSticky(false)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", stickyNavigation)
        return () => window.removeEventListener("scroll", stickyNavigation)
    },[])


    return (
        <header className={
            sticky ? "sticky nav" : "flex items-center justify-between px-10 py-5 text-2xl"
        }>
            <div>
                <a href='#home'>Ellie.</a>
            </div>
            <div className={mobile ? 'nav-link active' : 'nav-link mr-auto ml-auto '}>
                <ul className='flex items-center gap-10 '>
                    <a href='#about'>About</a>
                    <a href='#project'>Project</a>
                </ul>
            </div>
            <div className='mobile' onClick={() => setMobile(!mobile)}>
                {
                    mobile ? <FontAwesomeIcon icon={faTimes} /> :
                    <FontAwesomeIcon icon={faBars} />
                }
            </div>
        </header>
    )
}
