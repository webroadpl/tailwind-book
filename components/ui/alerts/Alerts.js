import AlertSuccess from "./alertSuccess/alertSuccess";
import AlertDanger from "./alertDanger/alertDanger";

export default function Alerts({showDangerAlert, showSuccessAlert, handleSuccessOnClick, handleDangerOnClick}) {
    return (
        <div className="alert-section">
            {
                showSuccessAlert && <AlertSuccess
                    handleOnClick={handleSuccessOnClick}
                    message="Pomyślnie wykonano zadanie."/>
            }
            {
                showDangerAlert && <AlertDanger
                    handleOnClick={handleDangerOnClick}
                    message="Nie udało się wykonać zadania."/>
            }
        </div>

    );
}
