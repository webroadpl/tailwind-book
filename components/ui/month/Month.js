import Day from "./day/Day";

export default function Month({name, days, start = 0, end = 0}) {
    return (
        <div className="calendar">
            <div className="sm:flex justify-between items-center mb-5 sm:mb-5">
                <h2 className="text-2xl font-bold">
                    {name}
                </h2>
                <div className="pt-1">
                    <a href="#" className="btn btn-outline mr-2">Poprzedni</a>
                    <a href="#" className="btn btn-outline">Następny</a>
                </div>
            </div>

            <div className="calendar-month">
                {[...Array(start)].map((x, i) => <Day key={i} />)}
                {[...Array(days)].map((x, i) => <Day key={i} no={i+1} />)}
                {[...Array(end)].map((x, i) => <Day key={i} />)}
            </div>
        </div>

    );
}
