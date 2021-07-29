import Card from "../../../card/Card";
import BookIcon from "../../icon/BookIcon";
import EyeIcon from "../../icon/EyeIcon";
import ShareIcon from "../../icon/ShareIcon";
import CharIcon from "../../icon/CharIcon";

export default function ArticleFooter({views = 0, words = 0, chars = 0, sharing = 0}) {
    return (
        <Card>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 article-statistics">
                <Card className="article-statistics-box" title="Wyświetlenia">
                    <h3>
                        <EyeIcon/>
                        <span className="ml-2">
                            {views}
                        </span>
                    </h3>
                </Card>
                <Card className="article-statistics-box" title="Słowa">
                    <h3>
                        <BookIcon/>
                        <span className="ml-2">
                            {words}
                        </span>
                    </h3>
                </Card>
                <Card className="article-statistics-box" title="Znaki">
                    <h3>
                        <CharIcon/>
                        <span className="ml-2">
                            {chars}
                        </span>
                    </h3>
                </Card>
                <Card className="article-statistics-box" title="Udostępnienia">
                    <h3>
                        <ShareIcon/>
                        <span className="ml-2">
                            {sharing}
                        </span>
                    </h3>
                </Card>
            </div>
        </Card>
    );
}
