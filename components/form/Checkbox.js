export default function Checkbox({label = '', ...props}) {
    return (
        <label className="flex justify-start items-center">
            <input type="checkbox" className="mr-1" {...props} />
            <span className="text-gray-500 text-sm">
                {label}
            </span>
        </label>
    )
}