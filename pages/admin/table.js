import DefaultLayout from "../../components/layouts/defaultLayout/DefaultLayout";
import TableWrapper from "../../components/ui/table/tableWrapper/TableWrapper";
import Th from "../../components/ui/table/th/Th";
import Td from "../../components/ui/table/td/Td";

export default function Table() {
    return (
        <DefaultLayout title="Lista użytkowników">
            <TableWrapper>
            <thead>
                <tr>
                    <Th>Imię</Th>
                    <Th>Nazwisko</Th>
                    <Th>E-mail</Th>
                    <Th>Telefon</Th>
                    <Th>Data rejestracji</Th>
                    <Th/>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <Td>Michał</Td>
                    <Td>Kortas</Td>
                    <Td>michal@webroad.pl</Td>
                    <Td>123-456-789</Td>
                    <Td>10. czerwca 2021</Td>
                    <Td className="td-actions">
                        <a href="#" className="btn btn-sm btn-info">
                            Zobacz
                        </a>
                    </Td>
                </tr>
                <tr>
                    <Td>Jan</Td>
                    <Td>Nowak</Td>
                    <Td>jan@nowak.pl</Td>
                    <Td>321-654-987</Td>
                    <Td>9. czerwca 2021</Td>
                    <Td className="td-actions">
                        <a href="#" className="btn btn-sm btn-info">
                            Zobacz
                        </a>
                    </Td>
                </tr>
                <tr>
                    <Td>Adam</Td>
                    <Td>Winiarski</Td>
                    <Td>adam@winiarski.pl</Td>
                    <Td>222-333-444</Td>
                    <Td>8. czerwca 2021</Td>
                    <Td className="td-actions">
                        <a href="#" className="btn btn-sm btn-info">
                            Zobacz
                        </a>
                    </Td>
                </tr>
                <tr>
                    <Td>Natalia</Td>
                    <Td>Lewandowska</Td>
                    <Td>natalia@lewandowska.pl</Td>
                    <Td>111-222-333</Td>
                    <Td>8. czerwca 2021</Td>
                    <Td className="td-actions">
                        <a href="#" className="btn btn-sm btn-info">
                            Zobacz
                        </a>
                    </Td>
                </tr>
                </tbody>
            </TableWrapper>
        </DefaultLayout>
    )
}
