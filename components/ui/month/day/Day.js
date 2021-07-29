export default function Day({no = 0}) {
    return (
        <div className={`day ` + (no === 0 ? `bg-gray-200 hidden lg:block` : `bg-white`) }>
            
            <div className="grid grid-cols-1 gap-3">
                <div className="flex justify-center">
                    {no > 0 && <h2 className="day-number">{no}</h2>}
                </div>
                <div className="flex justify-center">
                    {no > 0 && <p className="text-gray-500 text-xs">
                        Zadania: {Math.floor(Math.random() * 10)}
                    </p>}
                </div>
            </div>
        </div>
    );
}
