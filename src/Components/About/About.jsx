

import ImageAbout from '../../assets/image-about.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGraduate } from '@fortawesome/free-solid-svg-icons';



export default function About({ skills }) {
    return (
        <section className='h-[100vh] px-5 flex items-center justify-center flex-col' id='about'>
            <div className="text-center">
                <p>Get to know more</p>
                <h1 className='text-4xl mt-3'>About Me</h1>
            </div>
            <div className='flex flex-wrap justify-center items-center gap-20 mt-20'>
                <img src={ImageAbout} alt="About" className='max-w-xs rounded-md px-5' />
                <div className='max-w-2xl flex flex-col gap-10'>

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                        <div className='border border-[#2b2d42] py-8 px-10 rounded-md text-center text-2xl'>
                                <h1>Skills</h1>
                                <div className='flex flex-wrap items-center justify-center gap-3 mt-2'>
                                    {
                                        skills.map(skill => (
                                            <img src={skill.image} alt="" className='w-9 hover:scale-105' key={skill.id}/>
                                        ))
                                    }
                                </div>
                        </div>
                        <div className='border border-[#2b2d42] py-8 px-10 rounded-md'>
                            <div className='text-center text-2xl mb-5'>
                                <FontAwesomeIcon icon={faUserGraduate} />
                                <h1>Education</h1>
                            </div>
                            <p>AMA Computer College</p>
                            <p>Bachelor of Science in Computer Science</p>
                            <p>2021 - Present</p>
                        </div>
                    </div>

                    <div>
                        <p>
                            As a dedicated Computer Science Student, I am seeking an opportunity
                            to apply my skills and knowledge through an OJT program. My goal is
                            to contribute to the success of a dynamic organization by collaborating
                            on real-world projects, while enhancing my technical abilities in areas
                            such as web development and database management.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}
