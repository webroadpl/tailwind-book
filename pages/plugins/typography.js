import DefaultLayout from "../../components/layouts/defaultLayout/DefaultLayout";

export default function Typography() {
    return (
        <DefaultLayout title="Rozszerzenia: typografia">
            <article class="prose lg:prose-xl">
                <h1>Własne rozszerzenia (pluginy)</h1>
                <p>
                Rozszerzenia Tailwinda, potocznie zwane pluginami, pozwalają nam tworzyć nowe zbiory klas CSS za pomocą kodu JavaScript. Nowe rozszerzenia instalujemy zwykle przez npm, a następnie odwołujemy się do nich w tablicy plugins, w pliku konfiguracyjnym tailwind.config.js.
                </p>
                <p>
                Przykładami takich rozszerzeń, są oficjalne paczki dla typografii, formularzy, skracania tekstu czy operacji na współczynnikach proporcji.
                </p>
            </article>
        </DefaultLayout>
    )
}
