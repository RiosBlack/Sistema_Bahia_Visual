'use client'
import { useCallback, useMemo, useState } from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, User, Chip, Tooltip, ChipProps, getKeyValue, Pagination } from "@nextui-org/react";
import { LuPencilLine } from "react-icons/lu";
import { RiNewspaperLine } from "react-icons/ri";
import { FaEye } from "react-icons/fa";
import { columns, users } from "../../config/providers/data";

const statusColorMap: Record<string, ChipProps["color"]> = {
  active: "success",
  paused: "danger",
  vacation: "warning",
};

type User = typeof users[0];

export default function ProvidersTable() {
  //pagination
  const [page, setPage] = useState(1);
  const rowsPerPage = 4;
  const pages = Math.ceil(users.length / rowsPerPage);

  const items = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return users.slice(start, end);
  }, [page, users]);

  const renderCell = useCallback((user: User, columnKey: React.Key) => {
    const cellValue = user[columnKey as keyof User];

    switch (columnKey) {
      case "name":
        return (
          <User
            avatarProps={{ radius: "lg", src: user.avatar }}
            description={user.cpf}
            name={cellValue}
          >
            {user.cpf}
          </User>
        );
      case "role":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-sm capitalize">{cellValue}</p>
          </div>
        );
      case "status":
        return (
          <Chip className="capitalize" color={statusColorMap[user.status]} size="sm" variant="flat">
            {cellValue}
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
  }, []);

  return (
    <Table
      bottomContent={
        <div className="flex w-full justify-center">
          <Pagination
            isCompact
            showControls
            showShadow
            color="secondary"
            page={page}
            total={pages}
            onChange={(page) => setPage(page)}
          />
        </div>
      }
      classNames={{
        wrapper: "min-h-[222px]",
      }}
    >
      <TableHeader columns={columns}>
        {(column) => (
          <TableColumn key={column.uid} align={column.uid === "actions" ? "center" : "start"}>
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody items={items}>
        {(item) => (
          <TableRow key={item.id}>
            {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}