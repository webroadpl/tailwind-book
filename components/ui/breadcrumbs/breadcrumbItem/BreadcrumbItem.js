export default function BreadcrumbItem({isCurrent = false,  url = '#', children}) {

    return (
        <a href={url}
           className={`truncate bg-white hover:bg-gray-100 focus:bg-gray-100 transition first:rounded-tl first:rounded-bl last:rounded-tr last:rounded-br shadow p-3 flex justify-start  ` + (isCurrent ? `font-semibold` : `text-gray-500`)}>
            {children}
        </a>
    );
}
