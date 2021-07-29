export default function Td({className = '', children}) {
    return (
        <td className={`bg-white text-left text-gray-600 text-sm p-3 shadow min-w-[100px] ` + className}>
            {children}
        </td>
    )
}
