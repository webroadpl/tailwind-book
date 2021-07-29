export default function Comment({title = '', date = '', children}) {
    return (
        <li className="border border-gray-200 bg-white shadow-sm transition p-4 rounded-lg transform hover:scale-110 hover:shadow-xl block text-center xl:text-left xl:flex xl:justify-start">
            <div className="flex-none w-full xl:w-20 text-center xl:text-left">
                <img
                    className="rounded-full mb-4 xl:mb-0 inline xl:block"
                    src={`https://i.pravatar.cc/100?img=`+Math.floor(Math.random() * 15)} alt="Awatar"/>
            </div>
            <div className="flex-grow px-4">
                {title.length > 0 ? <h6 className="font-semibold mb-2">{title}</h6> : ''}
                <p className="text-sm">
                    {children}
                </p>
                <div className="text-xs text-gray-500 italic mt-2">
                    Dodano: {date}
                </div>
            </div>
        </li>
    )
}
