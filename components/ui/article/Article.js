import { useState } from "react";
import Card from "../../card/Card";
import ArticleFooter from "./articleFooter/ArticleFooter";
import Alerts from "../alerts/Alerts";

export default function Article({title, author, date, children}) {
    const [showDangerAlert, setShowDangerAlert] = useState(false);
    const [showSuccessAlert, setShowSuccessAlert] = useState(false);

    const handleDangerOnClick = e => {
        setShowDangerAlert(!showDangerAlert);
    };
    const handleSuccessOnClick = e => {
        setShowSuccessAlert(!showSuccessAlert);
    };

    return (
        <Card className="article">
            <h1 className="article-title">
                {title}
            </h1>

            <section className="article-data">
                <div>
                    {author}, {date}
                </div>
                <div className="inline-flex space-x-2 mt-5">
                    <a href="#" className="btn btn-danger" onClick={handleDangerOnClick}>
                        Udostępnij artykuł
                    </a>
                    <a href="#" className="btn btn-success" onClick={handleSuccessOnClick}>
                        Zapisz na później
                    </a>
                </div>
            </section>

            <article className="article-content">
                {children}
            </article>

            <footer className="article-footer">
                <ArticleFooter
                    views={Math.floor(Math.random() * 100)}
                    words={321}
                    chars={2186}
                    sharing={Math.floor(Math.random() * 100)}
                />
            </footer>

            <Alerts
                showSuccessAlert={showSuccessAlert}
                showDangerAlert={showDangerAlert}
                handleSuccessOnClick={handleSuccessOnClick}
                handleDangerOnClick={handleDangerOnClick}/>
        </Card>
    );

}
