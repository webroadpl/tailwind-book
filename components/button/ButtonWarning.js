import Button from "./Button";

export default function ButtonWarning({type = 'button', className = '', children, props}) {
    return (
        <Button {...props} type={type} className={`btn-warning ` + className}>
            {children}
        </Button>
    )
}
