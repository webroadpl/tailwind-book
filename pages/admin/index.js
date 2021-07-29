import DefaultLayout from "../../components/layouts/defaultLayout/DefaultLayout"
import AppStatus from "../../components/ui/appStatus/AppStatus"
import Card from "../../components/card/Card"
import Newsletter from "../../components/ui/newsletter/Newsletter"
import Cta from "../../components/ui/cta/Cta"
import Comments from "../../components/ui/comments/Comments"

import Spinner from "../../components/ui/spinner/Spinner"

export default function Index() {
    return (
        <DefaultLayout title="Panel administratora">

            <Card title="Status" className="mb-4">
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <AppStatus/>
                </div>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <section>
                    <div className="grid gap-4">
                        <Newsletter
                            title="Chcesz być na bieżąco?"
                            subTitle="Powiadomienia o naszych promocjach trafią bezpośrednio na Twoją skrzynkę e-mail!">
                        </Newsletter>
                        <Cta
                            title="Potrzebujesz pomocy eksperta?"
                            subTitle="Doradzimy, pomożemy!"
                            call="Skontaktuj się z nami!"
                            url="/admin/contact">
                        </Cta>
                        <Card>
                            <div className="text-center">
                                <div className="text-center pt-3 flex  justify-center">
                                    <div className="w-10">
                                        <Spinner />
                                    </div>

                                </div>
                                <div className="mt-5">
                                    <strong>
                                        Trwa pobieranie danych z serwera.
                                    </strong>
                                </div>
                                <p className="text-gray-500">
                                    Proszę czekać...
                                </p>
                            </div>
                        </Card>
                    </div>                    
                </section>

                <Comments/>
            </div>

        </DefaultLayout>
    )
}