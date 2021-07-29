export default function Button({type = 'button', className = '', children, ...props}) {
    return (
        <button type={type} className={`btn ` + className} {...props}>
            {children}
        </button>
    )
}
