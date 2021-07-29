import DefaultLayout from "../../components/layouts/defaultLayout/DefaultLayout";

export default function Lines() {
    return (
        <DefaultLayout title="Rozszerzenia: skracanie tekstu">
            <article class="prose lg:prose-xl">
                <h1>Własne rozszerzenia (pluginy)</h1>
                <p className="line-clamp-2 xl:line-clamp-none">
                Rozszerzenia Tailwinda, potocznie zwane pluginami, pozwalają nam tworzyć nowe zbiory klas CSS za pomocą kodu JavaScript. Nowe rozszerzenia instalujemy zwykle przez npm, a następnie odwołujemy się do nich w tablicy plugins, w pliku konfiguracyjnym tailwind.config.js.
                </p>
                <p className="line-clamp-2 xl:line-clamp-none">
                Przykładami takich rozszerzeń, są oficjalne paczki dla typografii, formularzy, skracania tekstu czy operacji na współczynnikach proporcji.
                </p>
            </article>
        </DefaultLayout>
    )
}
