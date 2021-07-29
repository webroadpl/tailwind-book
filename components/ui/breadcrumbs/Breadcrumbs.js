import BreadcrumbItem from "./breadcrumbItem/BreadcrumbItem";
import HomeIcon from "../../ui/icon/HomeIcon";

export default function Breadcrumbs({title}) {
    return (
        <div className="bg-blue-100 shadow rounded mb-4 p-4 flex justify-start items-center truncate">
            <BreadcrumbItem url="/">
                <HomeIcon/>
            </BreadcrumbItem>
            <BreadcrumbItem url="/admin">
                <span className="ml-2">Panel administratora</span>
            </BreadcrumbItem>
            <BreadcrumbItem isCurrent={true}>
                {title}
            </BreadcrumbItem>
        </div>
    );
}