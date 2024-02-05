'use client'
import { useCallback, useContext, useEffect, useMemo, useState } from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, User, Chip, Tooltip, ChipProps, Pagination } from "@nextui-org/react";
import { LuPencilLine } from "react-icons/lu";
import { RiNewspaperLine } from "react-icons/ri";
import { FaEye } from "react-icons/fa";
import { PrestadoresContext, ProvidersData, getAllProviders } from "@/context/providersContext";
import { pages } from "next/dist/build/templates/app-page";

export default function ProvidersTable() {

  const statusColorMap: Record<string, ChipProps["color"]> = {
    1: "success",
    0: "danger",
    null: "warning",
  };

  function ifProviders() {
    if (allProviders == null || allProviders == undefined) {
      getAllProviders
    } else {
      return allProviders;
    }
  }

  useEffect(() => {
    ifProviders()
    console.log(allProviders);
  }, [ifProviders])


  const columns = [
    { name: "NOME", uid: "name" },
    { name: "FUNÇÃO", uid: "functionsProviders" },
    { name: "STATUS", uid: "status" },
    { name: "AÇÕES", uid: "actions" },
  ];

  const { allProviders } = useContext(PrestadoresContext)


  //pagination
  // const [page, setPage] = useState(1);
  // const rowsPerPage = 4;

  // const pages = Math.ceil(allProviders.name.length / rowsPerPage);

  // const items = useMemo(() => {
  //   const start = (page - 1) * rowsPerPage;
  //   const end = start + rowsPerPage;

  //   return allProviders.slice(start, end);
  // }, [page, allProviders]);

  const renderCell = (allProviders: User, columnKey: React.Key) => {

    type Providers = typeof allProviders[0];

    const cellValue = allProviders[columnKey as keyof Providers];

    switch (columnKey) {
      case "name":
        return (
          <User
            avatarProps={{ radius: "lg", src: allProviders.image }}
            description={allProviders.cpf}
            name={allProviders.name}
          >
            {allProviders.cpf}
          </User>
        );
      case "functionsProviders":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-sm capitalize">{allProviders.functionsProviders.functionProviders}</p>
          </div>
        );
      case "status":
        return (
          <Chip className="capitalize" color={statusColorMap[allProviders.contratacaoDemissao.isContratado]} size="sm" variant="flat">
            {allProviders.contratacaoDemissao.isContratado == null ? "null": allProviders.contratacaoDemissao.isContratado}
          </Chip>
        );
      case "actions":
        return (
          <div className="relative flex items-center gap-2">
            <Tooltip content="Perfil">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <FaEye />
              </span>
            </Tooltip>
            <Tooltip content="Folha de pagamento">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <LuPencilLine />
              </span>
            </Tooltip>
            <Tooltip color="danger" content="">
              <span className="text-lg text-danger cursor-pointer active:opacity-50">
                <RiNewspaperLine />
              </span>
            </Tooltip>
          </div>
        );
      default:
        return cellValue;
    }
  };

  return (
    <Table
    // bottomContent={
    //   <div className="flex w-full justify-center">
    //     <Pagination
    //       isCompact
    //       showControls
    //       showShadow
    //       color="secondary"
    //       page={page}
    //       total={pages}
    //       onChange={(page) => setPage(page)}
    //     />
    //      <p>{console.log(allProviders)}</p>
    //   </div>
    // }
    // classNames={{
    //   wrapper: "min-h-[222px]",
    // }}
    >
      <TableHeader columns={columns}>
        {(column) => (
          <TableColumn key={column.uid} align={column.uid === "actions" ? "center" : "start"}>
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody items={allProviders}>
        {allProviders && allProviders.map((item: ProvidersData) => (
          <TableRow key={item.cpf}>
            {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}