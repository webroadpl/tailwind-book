export default function Textarea({label = '', type = 'text', ...props}) {
    return (
        <label>
            <span className={`text-gray-500 text-sm mb-1 block ` + (label === '' && `hidden`)}>
                {label || props.placeholder || ''}
            </span>
            <textarea className="border px-3 py-2 w-full rounded-lg" {...props} />
        </label>
    )
}
