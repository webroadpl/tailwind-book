import Button from "./Button";

export default function ButtonPrimary({type = 'button', className = '', children, props}) {
    return (
        <Button {...props} type={type} className={`btn-primary ` + className}>
            {children}
        </Button>
    )
}
