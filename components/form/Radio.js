export default function Radio({label = '', ...props}) {
    return (
        <label className="flex justify-start items-center">
            <input type="radio" className="mr-1" {...props} />
            <span className="text-gray-500 text-sm">
                {label}
            </span>
        </label>
    )
}