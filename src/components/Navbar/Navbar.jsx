import React, { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi'; 
import { FaGithub, FaLinkedin } from 'react-icons/fa'; 

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");
    const [isScrolled, setIsScrolled] = useState(false); 

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleMenuItemClick = (sectionId) => {
        setActiveSection(sectionId);
        setIsOpen(false);
    }

    const menuItems = [
        { id: "about", label: "About" },
        { id: "skills", label: "Skills" },
        {id:"projects",label:"Projects"},
        { id: "education", label: "Education" },
    ]

    return (
        <nav className={`fixed top-0 w-full z-50 transition duration-300 px-[7vw] lg:px-[20vw] ${isScrolled ? "bg-[#050414] bg-opacity-50 backdrop-blur-md" : "bg-transparent"}`}>
            <div className='text-white py-5 flex justify-between items-center'>
                <div className='text-lg font-semibold cursor-pointer'>
                    <span className='text-[#8245ec]'>&lt;</span>
                    <span className='text-white'>ANJALI</span>
                    <span className='text-[#8245ec]'>/</span>
                    <span className='text-white'>YADAV</span>
                    <span className='text-[#8245ec]'>&gt;</span>
                </div>

                <div className='hidden md:flex items-center space-x-8'>
                    <ul className='flex space-x-8 text-gray-300'>
                        {menuItems.map((item) => (
                            <li key={item.id} className={`cursor-pointer hover:text-[#8245ec] ${activeSection === item.id ? "text-[#8245ec]" : ""}`}>
                                <button onClick={() => handleMenuItemClick(item.id)}>
                                    {item.label}
                                </button>
                            </li>
                        ))}
                    </ul>

                    <div className='flex space-x-4 ml-4'>
                        <a href="https://github.com/anjaliyadav1709" target="_blank" rel="noopener noreferrer" className="cursor-pointer hover:text-[#8245ec]"> 
                            <FaGithub size={24}/>
                        </a>
                        <a href="https://www.linkedin.com/in/anjali-yadav-62921b315" target="_blank" rel="noopener noreferrer" className="cursor-pointer hover:text-[#8245ec]"> 
                            <FaLinkedin size={24}/>
                        </a> 
                    </div>
                </div>

                <div className='md:hidden' onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                </div>
            </div>

            {isOpen && (
                <div className='absolute top-16 left-1/2 transform -translate-x-1/2 w-4/5 bg-[#050414] bg-opacity-90 backdrop-blur-lg z-50 rounded-lg shadow-lg'>
                    <ul className='flex flex-col items-center space-y-4 py-4 text-gray-300'>
                        {menuItems.map((item)=>(
                            <li key={item.id} className={`cursor-pointer hover:text-white ${activeSection === item.id ? "text-[#8245ec]" : ""}`}>
                                <button onClick={() => handleMenuItemClick(item.id)}>{item.label}</button>
                            </li>
                        ))}
                        <div className='flex space-x-4 border-t border-gray-700 pt-4 w-full justify-center'>
                             <a href="https://github.com/anjaliyadav1709" target="_blank" rel="noopener noreferrer"> 
                                <FaGithub size={24}/>
                             </a>
                             <a href="https://www.linkedin.com/in/anjali-yadav-62921b315" target="_blank" rel="noopener noreferrer"> 
                                <FaLinkedin size={24}/>
                             </a>
                        </div>
                    </ul>
                </div>
            )}
        </nav>
    )
}

export default Navbar;