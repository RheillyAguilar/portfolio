import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Alert from "@mui/material/Alert";

export default function Message({ onClose }) {
    const [isClose, setIsClose] = useState(false);
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [alert, setAlert] = useState(false);
    const [warning, setWarning] = useState(false)
    const form = useRef();

    // close of message form
    const handleClose = () => {
        setIsClose(true);
        onClose();
    };

    // handle send the message
    const handleSend = (e) => {
        e.preventDefault();

        if(!email || !subject || !message) {
            setWarning(true)
        } else {
            emailjs
            .sendForm("service_iaf2s96", "template_4ppspo9", form.current, {
                publicKey: "pZ_5pRfG2knz9XYaV",
            })
            .then(setEmail(""), 
            setSubject(""),
             setMessage(""), 
             setAlert(true));
        }
    };

    // overflow for message
    useEffect(() => {
        document.body.classList.add("overflow-hidden");

        return () => {
            document.body.classList.remove("overflow-hidden");
        };
    }, []);

    // Remove the success message
    useEffect(() => {
        if(alert) {
            const timer = setTimeout(() => setAlert(false), 3000)
            return () => clearTimeout(timer)
        }
    }, [alert])

    // Remove the warning sign
    useEffect(() => {
        if(warning) {
            const timer = setTimeout(() => setWarning(false), 3000)
            return () => clearTimeout(timer)
        }
    }, [warning])



    if (isClose) return null;

    return (
        <section className="fixed inset-0 bg-[#2b2d42] bg-opacity-50 flex items-center justify-center z-10 px-5">
            <div className="bg-[#2b2d42] max-w-md w-full px-10 py-10 rounded-md text-white">
                <button onClick={handleClose}>
                    <FontAwesomeIcon icon={faTimes} className="mb-5 text-3xl" />
                </button>
                <h1 className="text-2xl text-center mb-6">Contact Me</h1>
                <form
                    ref={form}
                    className="flex flex-col gap-4 mb-5"
                    onSubmit={handleSend}
                >
                    <input
                        type="email"
                        name="reply_to"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        placeholder="Email"
                        className="px-5 py-2.5 w-full text-lg outline-none text-[#2b2d42]"
                    />
                    <input
                        type="text"
                        name="subject"
                        onChange={(e) => setSubject(e.target.value)}
                        value={subject}
                        placeholder="Subject"
                        className="px-5 py-2.5 text-lg w-full outline-none text-[#2b2d42]"
                    />
                    <textarea
                        placeholder="Message"
                        onChange={(e) => setMessage(e.target.value)}
                        value={message}
                        name="message"
                        className="px-5 py-2.5 text-lg outline text-[#2b2d42]"
                        rows={5}
                    ></textarea>
                    <button
                        type="submit"
                        className="bg-white px-5 py-2 text-[#2b2d42] text-lg w-full hover:border hover:bg-transparent hover:text-white"
                    >
                        Send
                    </button>
                </form>
            </div>
            {alert && (
                <Alert 
                severity="success"   
                sx={{fontSize: '1rem'}}                 
                className="absolute bottom-10 right-5 flex items-center">
                Message Sent
                </Alert>
            )}
            {
                warning && (
                    <Alert 
                    severity="error"
                    sx={{fontSize: '1rem'}}
                    className="absolute bottom-10 right-5 flex items-center">
                    Please complete the input!
                    </Alert>
            )
            }
        </section>
    );
}
