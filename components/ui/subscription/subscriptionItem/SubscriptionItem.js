import Card from "../../../card/Card";
import ButtonPrimary from "../../../button/ButtonPrimary";
import CheckIcon from "../../icon/CheckIcon";

export default function SubscriptionItem({title, children}) {
    return <div>
        <Card
            className="group transition hover:shadow-2xl hover:scale-110 hover:bg-blue-100"
            title={title}>
            <div className="h-separator"/>
            <Card className="mb-4">
                {children}
            </Card>
            <ButtonPrimary className="w-full flex justify-center">
                <CheckIcon/>
                <span className="ml-2">
                    Wybierz
                </span>
            </ButtonPrimary>
        </Card>
    </div>;
}
