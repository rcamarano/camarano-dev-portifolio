// ProjectsCard.js
import React from 'react';
import { useRef, useState } from 'react';
import { FaPlay } from 'react-icons/fa';
import Link from 'next/link';

export default function ProjectsCard({ project }) {
    const handleButtonClick = (e) => {
        e.preventDefault();
        window.open(project.url, "_blank");
    };

    const videoRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
        videoRef.current.play();
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
    };

    return (
        <Link onClick={handleButtonClick} href={''}>
            <div className={`aspect-w-16 aspect-h-10 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-16 xl:aspect-h-10 opacity-90 hover:opacity-100 border-2 border-gray-300 shadow-lg ${isHovered ? 'scale-110' : ''
                } transition-transform duration-300`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}>
                <button className="play-button" onClick={handleMouseEnter}>
                    <FaPlay />
                </button>
                <video
                    ref={videoRef}
                    className="object-cover"
                    loop
                    muted
                    playsInline
                >
                    <source src={project.thumbnail} type="video/mp4" />
                </video>


            </div>

            <div className="mt-4 flex items-center justify-between text-base font-medium text-gray-900">
                <h3>{project.title}</h3>
            </div>

            <p className="mt-1 text-sm italic text-gray-500 mb-15">
                {project.description}
            </p>

            <button
                className="flex items-center justify-center rounded-md border border-transparent bg-orange-400 px-4 py-3 text-base font-medium text-orange-900 shadow-sm hover:bg-orange-300 sm:px-8 mt-5"
                onClick={handleButtonClick}
            >
                Página do projeto!
            </button>
        </Link>
    );
}
