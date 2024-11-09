
// Import
import { faFacebook, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faMessage, faChevronDown, faQuestion } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {  useState } from "react"
import { Link } from "react-router-dom"
import Message from "../Message"

export default function Social() {

    const [open, setOpen] = useState(false)
    const [message, setMessage] = useState(false)

    const handleOpen = () => {
        setOpen(!open)
    }

    const handleMessage = () => {
        setMessage(!message)
        setOpen(false)
    }



    return (
        <section>
            <div className="fixed bottom-10 right-5 flex flex-col items-center gap-5 ">
                {
                    open ?
                        <div className="flex flex-col items-center justify-center gap-2.5">
                            <Link to='https://www.facebook.com/rheilly.aguilar.03' target="_blank" className="bg-[#2b2d42] text-2xl w-10 h-10 rounded-[50%] text-white flex justify-center items-center">
                                <FontAwesomeIcon icon={faFacebook} />
                            </Link>
                            <Link to='https://www.linkedin.com/in/rheilly-aguilar-5254a1193/' target="_blank" className="bg-[#2b2d42] text-2xl w-10 h-10 rounded-[50%] text-white flex justify-center items-center">
                                <FontAwesomeIcon icon={faLinkedin} />
                            </Link>
                            <Link to='https://github.com/RheillyAguilar' target="_blank" className="bg-[#2b2d42] text-2xl w-10 h-10 rounded-[50%] text-white flex justify-center items-center">
                                <FontAwesomeIcon icon={faGithub} />
                            </Link>
                            <button 
                            onClick={handleMessage}
                            className="bg-[#2b2d42] text-2xl w-10 h-10 rounded-[50%] text-white flex justify-center items-center">
                                <FontAwesomeIcon icon={faMessage} />
                            </button>
                        </div>
                        :
                        ''
                }
                <button
                    className="bg-[#2b2d42] text-2xl w-10 h-10 rounded-[50%] text-white"
                    onClick={handleOpen}
                >
                    {
                        open ?
                            <FontAwesomeIcon icon={faChevronDown} />
                            :
                            <FontAwesomeIcon icon={faQuestion} />
                    }
                </button>
            </div>

            {
                message && <Message onClose={() => setMessage(false)}/>
            }

        </section>
    )
}
