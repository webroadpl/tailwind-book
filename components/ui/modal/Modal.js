import { useState } from 'react'
import ButtonPrimary from '../../button/ButtonPrimary';

export default function Modal({ title = '', buttonTitle = 'Otwórz okno', children })
{
    const [isVisible, setIsVisible] = useState(false);

    function handleOnOpenClick() {
        setIsVisible(true);
    }

    function handleOnCloseClick() {
        setIsVisible(false);
    }

    return (
        <>
            <a onClick={handleOnOpenClick}>
                <ButtonPrimary className="mt-8">
                    {buttonTitle}
                </ButtonPrimary>
            </a>

            <div className={`fixed top-0 left-0 z-40 w-screen h-screen bg-black bg-opacity-60 backdrop-filter backdrop-blur-lg flex justify-center items-center  ` + (!isVisible && 'hidden')}>
                <div className="overflow-y-auto w-full h-full md:h-auto md:w-5/6 lg:w-3/4 2xl:w-1/2 rounded shadow-lg p-8 bg-white text-black">
                    <h3 className="w-full font-bold text-xl inline-flex items-center justify-between border-b mb-5 pb-3">
                        <span>
                            {title}
                        </span>

                        <span onClick={handleOnCloseClick} className="font-bold text-sm text-gray-400 hover:text-gray-900 cursor-pointer">
                            X
                        </span>
                    </h3>
                    {children}
                </div>
            </div>
        </>
    )
};
