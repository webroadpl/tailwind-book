import TimesCircleIcon from "../../icon/TimesCircleIcon";

export default function AlertDanger({handleOnClick, message = ''}) {
    return (
        <div  onClick={handleOnClick} className="alert alert-danger">
            <h6 className="alert-title">
                <TimesCircleIcon/>
                <span className="ml-1">
                     Błąd!
                </span>
            </h6>
            <p>{message}</p>
        </div>
    );
}
