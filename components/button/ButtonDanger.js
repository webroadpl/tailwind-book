import Button from "./Button";


export default function ButtonDanger({type = 'button', className = '', children, props}) {
    return (
        <Button {...props} type={type} className={`btn-danger ` + className}>
            {children}
        </Button>
    )
}
