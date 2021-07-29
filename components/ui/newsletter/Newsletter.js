import Input from "../../form/Input";
import ButtonSuccess from "../../button/ButtonSuccess";

export default function Newsletter({title = '', subTitle = ''}) {
    return (
        <div className="bg-gradient-to-l from-gray-900 to-gray-800 xl:flex justify-between items-center p-8 shadow rounded-lg">
            <div className="w-full xl:w-1/2">
                {title.length > 0 ?
                    <h2 className="font-semibold text-xl xl:text-2xl pr-0 lg:pr-5 text-gray-100 flex justify-start items-center">
                        {title}
                    </h2> :
                    ''}
                {subTitle.length > 0 ?
                    <h3 className="pr-0 lg:pr-5 text-gray-300 flex justify-start items-center">
                        {subTitle}
                    </h3> :
                    ''}
            </div>

            <div className="w-full xl:w-1/2 mt-5 xl:mt-0 transition hover:transform hover:scale-105 text-right xl:pl-8">
                <Input type="email" label="Podaj swój adres e-mail"></Input>
                <ButtonSuccess type="submit" className="mt-4">Zapisz się</ButtonSuccess>
            </div>
        </div>
    )
}
