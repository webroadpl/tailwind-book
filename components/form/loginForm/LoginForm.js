import Link from "next/link";
import Checkbox from "../Checkbox";
import Input from "../Input";

export default function LoginForm() {
    return <form className="overflow-hidden bg-white rounded-lg shadow-xl">
        <div className="px-10 pt-8 pb-6 text-center">
            <h1 className="text-xl font-bold">
                Zaloguj się
            </h1>
            <h2 className="text-xl">
                w panelu <strong>administracyjnym</strong>
            </h2>

            <div className="separator-horizontal"/>

            <div className="flex flex-col space-y-4 text-left">
                <Input label="Login"/>
                <Input type="password" label="Hasło"/>
                <Checkbox label="Zapamiętaj mnie"/>
            </div>

        </div>
        <footer className="flex items-center space-x-2 justify-center px-10 py-4 bg-gray-100 border-t border-gray-200">
            <Link href="/admin">
                <a className="btn btn-primary">
                    Zaloguj się
                </a>
            </Link>
            <Link href="/auth/register">
                <a className="btn btn-link">
                    Nowe konto
                </a>
            </Link>
        </footer>
    </form>
}