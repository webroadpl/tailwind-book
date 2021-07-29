import Logo from '../../components/ui/logo/Logo'
import LoginForm from '../../components/form/loginForm/LoginForm'

export default function Login() {
    return <>
        <div className="flex items-center justify-center min-h-screen bg-blue-900">
            <div>
                <div className="w-full flex justify-center">
                    <Logo/>
                </div>
                <div className="w-full mt-3">
                    <LoginForm/>
                </div>
            </div>
        </div>
    </>
  }