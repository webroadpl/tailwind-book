import Link from 'next/link'

import Button from '../components/button/Button'
import ButtonSuccess from '../components/button/ButtonSuccess'
import ButtonDanger from '../components/button/ButtonDanger'
import ButtonInfo from '../components/button/ButtonInfo'
import ButtonPrimary from '../components/button/ButtonPrimary'
import ButtonWarning from '../components/button/ButtonWarning'
import Input from '../components/form/Input'
import Select from '../components/form/Select'
import Radio from '../components/form/Radio'
import Checkbox from '../components/form/Checkbox'
import Textarea from '../components/form/Textarea'
import Card from '../components/card/Card'

export default function Home() {
  return (
    <div className="flex bg-gray-200 justify-center min-h-screen">
      <div className="bg-white shadow-xl min-h-full w-full md:w-10/12 lg:w-3/4 xl:w-2/3 2xl:w-1/2">
        <div className="p-10 text-center">

          <h1 className="text-4xl font-sans antialiased tracking-wider">
            <span className="font-extrabold underline">Twój</span> <strong className="text-indigo-600">panel administracyjny</strong>
          </h1>

          <div className="my-5 antialiased">
            Zbudowany za pomocą <strong>Tailwind CSS</strong> i <strong>Next.js</strong> <br/>
            na podstawie książki <em>"Tailwind CSS. Projektowanie WWW i podejście Utility-First"</em>, <br/>
            wydanej nakładem Wydawnictwa <strong>Helion</strong>.
          </div>



          <span className="separator-horizontal"></span>

          <div className="p-10 mb-5">
            <div className="flex flex-col">
              <h2 className="text-3xl">Nasze przyciski</h2>
              <div className="text-center my-5">
                <Button>Przycisk bazowy</Button>
              </div>

              <div className="grid grid-cols-3 lg:grid-cols-5 gap-2">
                  <ButtonSuccess>Zapisz</ButtonSuccess>
                  <ButtonDanger>Usuń</ButtonDanger>
                  <ButtonInfo>Zobacz</ButtonInfo>
                  <ButtonPrimary>Edytuj</ButtonPrimary>
                  <ButtonWarning>Sprawdź</ButtonWarning>
              </div>
            </div>
          </div>

          <span className="separator-horizontal"></span>

          <div className="p-10 mb-5">
            <div className="flex flex-col">
              <h2 className="text-3xl mb-5">Pola formularza</h2>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 text-left">
                <Input label="Pole tekstowe" placeholder="Wprowadź krótki tekst" name="input" />
                <Select label="Lista rozwijana" name="select" options={[{'value': 1, 'text': 'Pierwsza opcja'}]} />
                
                <Textarea label="Pole tekstu rozszerzonego" placeholder="Wprowadź długi tekst" name="textarea" />
                <Checkbox label="Wybierz tę opcję" name="checkbox[]" />
                <Radio label="Zaznacz tę opcję" name="radio" />

              </div>
            </div>
          </div>

          <span className="separator-horizontal"></span>

          <Card title="Sprawdź nasz szablon">
            <div className="flex justify-center space-x-2">
              <Link href="/auth/login">
                <a className="btn btn-success">
                  Zaloguj się
                </a>
              </Link>
              <Link href="/auth/register">
                <a className="btn btn-primary">
                  Zarejestruj
                </a>
              </Link>
            </div>
          </Card>

        </div>
      </div>
    </div>
  )
}
