import {useState} from "react";
import {bottomBarLinks} from "@/constants";
import {cn} from "@/lib/cn"
import {Link} from 'react-router-dom';

const BottomNavigation = () => {
    const [currentLink, setCurrentLink] = useState(0);

    return (
        <div
            className="flex items-center gap-1 fixed bottom-5 bg-black/75 left-1/2 -translate-x-1/2 rounded-full px-2 py-2 z-50">
            {bottomBarLinks.map((link, index) => (
                <Link
                    to={link.src}
                    className={cn(
                        'flex flex-col items-center py-3 px-6 rounded-full duration-500 ease-in-out transition-colors cursor-pointer',
                        currentLink === index && 'bg-white'
                    )}
                    key={index + link.id}
                    onClick={() => setCurrentLink(index)}
                >
                    <img
                        src={link.imgSrc}
                        alt="icon"
                        className={cn(
                            'w-4.5 h-4.5',
                            currentLink === index && 'invert'
                        )}
                    />
                    <p className={cn(
                        'text-[0.625rem] font-normal',
                        currentLink === index ? 'text-black' : 'text-white'
                    )}>
                        {link.name}
                    </p>
                </Link>
            ))}
        </div>
    );
}

export default BottomNavigation;
