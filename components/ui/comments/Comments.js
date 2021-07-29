import Card from "../../card/Card";
import Comment from "./Comment";

export default function Comments() {
    return (
        <Card title="Najświeższe komentarze">
            <ul className="grid grid-cols-1 gap-2">
                <Comment title="Komentarz przykładowy" date="2021-08-27">
                    Świetna obsługa! Wszystko tak, jak być należy.
                </Comment>
                <Comment title="Super" date="2021-08-25">
                    Jestem zadowolony. Na pewno wrócę skorzystać z Państwa usług.
                </Comment>
                <Comment title="Przykro mi" date="2021-08-24">
                    Nie podobało mi się wykonanie usługi.
                </Comment>
                <Comment title="Świetny produkt" date="2021-08-24">
                    Już poleciłem znajomym. Na pewno wrócę!
                </Comment>
            </ul>
        </Card>
    )
}
