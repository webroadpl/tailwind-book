import MainMenuItem from "./mainMenuItem/mainMenuItem";
import Modal from "../../ui/modal/Modal";
import Subscription from "../../ui/subscription/Subscription";

export default function MainMenu({ className })
{
    return (
        <>
        <ul className={className}>
            <MainMenuItem url="/admin">Panel główny</MainMenuItem>
            <MainMenuItem url="/admin/calendar">Kalendarz</MainMenuItem>
            <MainMenuItem url="/admin/table">Tabela danych</MainMenuItem>
            <MainMenuItem url="/admin/gallery">Galeria</MainMenuItem>
            <MainMenuItem url="/admin/regulation">Regulamin</MainMenuItem>
            <MainMenuItem url="/admin/questions">FAQ</MainMenuItem>
            <MainMenuItem url="/admin/contact">Kontakt</MainMenuItem>
        </ul>

        <Modal buttonTitle="Usługi dodatkowe" title="Wybierz pakiet usług dodatkowcyh, który Ci odpowiada">
            <Subscription/>
        </Modal>
        </>
    );
};
