import RegisterForm from "../../components/form/registerForm/RegisterForm";
import Logo from "../../components/ui/logo/Logo";

export default function Register() {
    return <>
        <div className="flex items-center justify-center min-h-screen bg-green-900">
            <div>
                <div className="w-full flex justify-center">
                    <Logo/>
                </div>
                <div className="w-full mt-3">
                    <RegisterForm/>
                </div>
            </div>
        </div>
    </>
  }
