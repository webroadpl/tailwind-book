import Link from "next/link";

export default function MainMenuItem({ url, children, className }) 
{
    return (
        <>
            <li className="pb-2">
                <Link href={url}>
                    <a className="p-1 text-blue-400 hover:text-blue-100  focus:text-blue-100">
                        {children}
                    </a>
                </Link>
            </li>
        </>
    );
};
