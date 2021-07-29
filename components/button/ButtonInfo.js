import Button from "./Button";

export default function ButtonInfo({type = 'button', className = '', children, props}) {
    return (
        <Button {...props} type={type} className={`btn-info ` + className}>
            {children}
        </Button>
    )
}
