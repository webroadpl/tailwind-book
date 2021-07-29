import Card from "../card/Card";
import ArticleStatistics from "./articleStatistics/ArticleStatistics";

export default function Article({title, author, date, children}) {
    return (
        <Card className="article">
            <h1 className="article-title">
                {title}
            </h1>

            <section className="article-data">
                {author}, {date}
            </section>

            <article className="article-content">
                {children}
            </article>

            <footer className="article-footer">
                <ArticleStatistics
                    views={Math.floor(Math.random() * 100)}
                    words={321}
                    chars={2186}
                    sharing={Math.floor(Math.random() * 100)}
                />
            </footer>
        </Card>
    );

}
