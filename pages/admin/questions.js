import DefaultLayout from "../../components/layouts/defaultLayout/DefaultLayout";
import Question from "../../components/ui/question/Question";
import Card from "../../components/card/Card";

export default function Questions() {
    const questions = [
        {
            question: "Czy korzystanie z usługi jest darmowe?",
            answer: "Tak, korzystanie z usługi jest darmowe. Użytkownik ma możliwość wykupienia płatnych funkcji, ale podstawowe możliwości nie są płatne.",
        },
        {
            question: "Jak usunąć konto?",
            answer: "Skontaktuj się z nami za pomocą wiadomości e-mail na adred pomoc@testowaaplikacja.pl.",
        },
        {
            question: "Gdzie kupić książkę?",
            answer: "Najlepiej na Helion.pl",
        },
        {
            question: "Gdzie kupić e-booka?",
            answer: "Ebookpoint.pl - nie ma lepszej opcji!",
        },
        {
            question: "Kto jest Administratorem moich danych osobowych?",
            answer: "Administratorem danych osobowych jest firma Krza i K Sp. z o.o.",
        },
    ];
    return (
        <DefaultLayout title="Pytania i odpowiedzi">
            <Card className="grid grid-cols-1 gap-4">
                { questions.map(question => <Question key={question.question} question={question.question} answer={question.answer} />) }
            </Card>
        </DefaultLayout>
    )
}
