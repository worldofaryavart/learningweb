import { useState, useRef, useEffect } from 'react';
import { FaShieldAlt, FaCalendarAlt, FaCog, FaGamepad } from 'react-icons/fa';

const navItems = [
  { label: "DAN", icon: <FaShieldAlt size={40} color="red" /> },
  { label: "Event", icon: <FaCalendarAlt size={40} color="red" /> },
  { label: "R&R", icon: <FaCog size={40} color="red" /> },
  { label: "Gaming Zone", icon: <FaGamepad size={40} color="red" /> },
];

const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => setIsDropdownOpen(prev => !prev);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <nav className="bg-white shadow-md" style={{ height: '106px' }}>
            <div className="max-w-full px-14 flex justify-between items-center h-full">
                <div className="flex items-center">
                    <img
                        src="images/logo.png"
                        alt="Learning Fest 2024 Logo"
                        className="h-[73px] w-[173px] mr-4"
                    />
                </div>

                <div className="flex items-center ml-[-20px]">
                    <div
                        className="bg-[#6D1E1E] w-[65px] h-[65px] flex items-center justify-center rounded-full animate-pulse cursor-pointer"
                        onClick={toggleDropdown}
                    >
                        <button className="p-2 rounded-md text-white">
                            {isDropdownOpen ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-8 w-8"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-8 w-8"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {isDropdownOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50" onClick={toggleDropdown}>
                    <div ref={dropdownRef} className="flex space-x-4" onClick={(e) => e.stopPropagation()}>
                        {navItems.map((navitem, index) => (
                            <div
                                key={index}
                                className="bg-white p-4 shadow-md flex flex-col items-center justify-center"
                                style={{ width: '179px', height: '179px' }}
                            >
                                <div className="mb-4 text-4xl">{navitem.icon}</div>
                                <p className="text-lg font-medium text-center">{navitem.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;