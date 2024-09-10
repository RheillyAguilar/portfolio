

//  imports
import { VscVscode } from "react-icons/vsc";
import { RiReactjsFill, RiTailwindCssFill, RiFlutterFill } from "react-icons/ri";
import { SiAndroidstudio } from "react-icons/si";
import { FaCss3Alt, FaGithubAlt, FaHtml5  } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons"; // Import the icon correctly

// Icon map for dynamic rendering
const iconMap = {
    VscVscode: <VscVscode />,
    FaHtml5: <FaHtml5 />,
    RiReactjsFill: <RiReactjsFill />,
    FaCss3Alt: <FaCss3Alt />,
    RiTailwindCssFill: <RiTailwindCssFill />,
    FaGithubAlt: <FaGithubAlt />,
    RiFlutterFill: <RiFlutterFill />,
    SiAndroidstudio: <SiAndroidstudio />
};

export default function Project({ project }) {
    return (
        <section className='h-[80vh] px-5 mt-56' id="project">
            <div className="text-center">
                <p>Browse my recent</p>
                <h1 className='text-4xl mt-3'>Project</h1>
            </div>
            <div className='flex flex-wrap items-center justify-center mt-10 gap-10 relative'>
                {
                    project.map((project) => (
                        <div key={project.id} className='border border-[#2b2d42] h-[27rem] rounded-md max-w-xs relative'>
                            <img src={project.image} alt={project.name} className='w-full h-[10rem] rounded-t-md' />
                            <div className='px-10 text-center'>
                                <h1 className='text-2xl mt-3 font-bold'>{project.name}</h1>
                                <div className='flex flex-wrap items-center justify-center gap-5 text-base mt-5 mb-10'>
                                    {
                                        project.icons.map((iconName, index) => (
                                            <span key={index} className='bg-[#2b2d42] px-5 py-1.5 text-white rounded-lg hover:scale-105'>
                                                {iconMap[iconName]}
                                            </span>
                                        ))
                                    }
                                </div>
                                <div className="absolute bottom-5 flex justify-center left-0 right-0">
                                    <Link to={project.link} target='_blank'
                                        className='bg-[#2b2d42] text-white py-2 px-10 rounded-md text-xl hover:border hover:border-[#2b2d42] hover:bg-transparent hover:text-[#2b2d42]'>
                                        <FontAwesomeIcon icon={faUpRightFromSquare} className='mr-3' />
                                        View
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    );
}