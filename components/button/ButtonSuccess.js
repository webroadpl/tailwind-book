import Button from "./Button";

export default function ButtonSuccess({type = 'button', className = '', children, props}) {
    return (
        <Button {...props} type={type} className={`btn-success ` + className}>
            {children}
        </Button>
    )
}
