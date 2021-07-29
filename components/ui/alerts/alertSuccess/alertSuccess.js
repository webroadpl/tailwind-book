import CheckCircleIcon from "../../icon/CheckCircleIcon";

export default function AlertSuccess({handleOnClick, message = ''}) {
    return (
        <div className="alert alert-success" onClick={handleOnClick}>
            <h6 className="alert-title">
                <CheckCircleIcon/>
                <span className="ml-1">
                     Sukces!
                </span>
            </h6>
            <p>{message}</p>
        </div>
    );
}
