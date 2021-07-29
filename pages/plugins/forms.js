import DefaultLayout from "../../components/layouts/defaultLayout/DefaultLayout";

export default function Forms() {
    return (
        <DefaultLayout title="Rozszerzenia: formularze">
            <div className="grid grid-cols-1 gap-3">
                <input type="email" placeholder="Wpisz swój adres e-mail" class="form-input px-4 py-3 rounded-full" />

                <select class="form-select px-4 py-3 rounded-full">
                    <option value>Opcja 1</option>
                    <option value>Opcja 2</option>
                    <option value>Opcja 3</option>
                </select>

                <label>
                    <input type="checkbox" class="form-checkbox rounded text-pink-500" /> 
                    Zaznacz mnie
                </label>
            </div>
        </DefaultLayout>
    )
}
