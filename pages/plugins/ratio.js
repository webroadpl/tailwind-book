import DefaultLayout from "../../components/layouts/defaultLayout/DefaultLayout";

export default function Lines() {
    return (
        <DefaultLayout title="Rozszerzenia: współczynnik proporcji">
        <article class="prose lg:prose-xl">
            <h1>Film na YouTube</h1>
            <div class="aspect-w-16 aspect-h-9">
                <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </article>
        </DefaultLayout>
    )
}
