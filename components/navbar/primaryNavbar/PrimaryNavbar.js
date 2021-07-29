import { useState } from 'react'
import Logo from "../../ui/logo/Logo";
import MainMenu from "../../menu/mainMenu/MainMenu";
import MenuIcon from '../../ui/icon/MenuIcon';
import Footer from '../../ui/footer/Footer';

export default function PrimaryNavbar({ className })
{
    const [isVisible, setIsVisible] = useState(false)

    function handleOnClick() {
        setIsVisible(!isVisible);
    }

    return (
        <div className="flex items-center justify-between text-blue-200 bg-blue-900 border-b border-blue-700 shadow z-30 p-4 md:flex-shrink-0 md:w-56 md:py-0 md:px-8 md:justify-start">
            <Logo/>

            <div className="flex justify-end relative w-3/4 md:hidden" onClick={handleOnClick}>
                <MenuIcon/>
                <div className={`absolute top-8 right-0 z-50 text-center ` + (!isVisible && 'hidden')}>
                    <div className="bg-blue-800 p-5 rounded shadow-xl border border-blue-700 font-normal">
                        <MainMenu/>
                        <Footer/>
                    </div>
                </div>
            </div>
        </div>
    );
};
