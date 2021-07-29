export default function PaginationItem({className = '', children}) {
    return (
        <li>
            <a href="#" className={`btn h-8 btn-outline mr-1 shadow-sm hover:shadow-lg focus:shadow-lg ` + className}>
                {children}
            </a>
        </li>
    )
}
