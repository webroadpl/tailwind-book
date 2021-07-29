export default function Select({label = '', options = [], ...props}) {
    return (
    <label>
        <span className="text-gray-500 text-sm block mb-1">
            {label}
        </span>
        <select {...props} className="border px-3 py-2 rounded-lg w-full">
            {options.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.text}
                </option>
            ))}
        </select>
    </label>
    )
}