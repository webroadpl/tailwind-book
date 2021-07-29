import DefaultLayout from "../../components/layouts/defaultLayout/DefaultLayout";
import Card from "../../components/card/Card";
import Input from "../../components/form/Input";
import Textarea from "../../components/form/Textarea";
import ButtonPrimary from "../../components/button/ButtonPrimary";

export default function Contact() {
    return (
        <DefaultLayout title="Formularz kontaktowy">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

                <Card title="Skontaktuj się z nami" className="grid grid-cols-1 gap-4">
                    <Input
                        placeholder="Krótko i na temat"
                        label="Temat wiadomości"/>

                    <Textarea
                        placeholder="Napisz coś więcej"
                        rows={8}
                        label="Temat wiadomości"/>
                
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        <Input
                            placeholder="Przedstaw się"
                            label="Imię i nazwisko"/>
                        <Input
                            placeholder="Na ten adres Ci odpowiemy"
                            type="email"
                            label="Adres zwrotny"/>
                    </div>
                
                    <div className="flex justify-end">
                        <ButtonPrimary>
                            Wyślij wiadomość
                        </ButtonPrimary>
                    </div>

                </Card>
                <Card title="Mapka poglądowa">
                    <div className="h-[500px]">
                        <iframe title="Mapka poglądowa" className="w-full h-full rounded-lg shadow" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"
                                src="https://www.openstreetmap.org/export/embed.html?bbox=17.60318756103516%2C53.4737439613841%2C18.176536560058597%2C53.66213681473142&amp;layer=mapnik"/>
                    </div>
                </Card>
            </div>
        </DefaultLayout>
    )
}
