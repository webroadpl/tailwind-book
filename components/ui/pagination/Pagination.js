import PaginationItem from "./paginationItem/PaginationItem";
import BackIcon from "../../ui/icon/BackIcon";
import NextIcon from "../../ui/icon/NextIcon";

export default function Pagination() {
    return (
        <div className="inline-block">
            <ul className="flex justify-start">
                <PaginationItem>
                    <BackIcon/>
                </PaginationItem>

                <PaginationItem className="hidden lg:inline-block">1</PaginationItem>
                <PaginationItem className="hidden lg:inline-block">2</PaginationItem>

                <PaginationItem className="hidden lg:inline-block">...</PaginationItem>

                <PaginationItem className="hidden lg:inline-block">25</PaginationItem>
                <PaginationItem className="hidden lg:inline-block">26</PaginationItem>

                <PaginationItem>
                    <NextIcon/>
                </PaginationItem>
            </ul>
        </div>
    )
}