import React from "react";
import QuestionIcon from "../../ui/icon/QuestionIcon";

export default function Question({question, answer = ''}) {

    const [isOpen, setIsOpen] = React.useState(false);

    function handleOpenOnClick() {
        setIsOpen(!isOpen);
    }

    return (
        <div>
            <button onClick={handleOpenOnClick} type="button" className="bg-white shadow rounded p-4 mb-1 font-bold text-xl w-full text-left flex items-center justify-start">
                <QuestionIcon/>
                <span className="ml-3">
                    {question}
                </span>
            </button>
            <div className={`bg-white shadow rounded p-4 ` + (!isOpen && `hidden`)}>
                {answer}
            </div>
        </div>
    )
}
