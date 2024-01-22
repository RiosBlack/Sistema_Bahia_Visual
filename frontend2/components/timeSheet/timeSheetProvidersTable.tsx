'use client'
import React from "react";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, User, Chip, Tooltip, ChipProps, getKeyValue} from "@nextui-org/react";
import { LuPencilLine } from "react-icons/lu";
import { FaEye } from "react-icons/fa";
import {users} from "../../config/providers/data";
import { Props } from "next/script";

const statusColorMap: Record<string, ChipProps["color"]>  = {
  active: "success",
  paused: "danger",
  vacation: "warning",
};

const columns = [
  {name: "NOME", uid: "name"},
  {name: "FUNÇÃO", uid: "role"},
  {name: "STATUS", uid: "status"},
  {name: "AÇÕES", uid: "actions"},
  {name: "FOLHA DO MÊS", uid: "money"}
];

type User = typeof users[0];

export default function TimeSheetProvidersTable({}: Props) {
const renderCell = React.useCallback((user: User, columnKey: React.Key) => {
  const cellValue = user[columnKey as keyof User];

  switch (columnKey) {
    case "name":
      return (
        <User
          avatarProps={{radius: "lg", src: user.avatar}}
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
          <Tooltip color="danger" content="Folha de pagamento">
            <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
              <LuPencilLine />
            </span>
          </Tooltip>
        </div>
      );
      case "money":
      return (
        <Chip className="capitalize" size="sm" variant="faded">
          {user.timeSheet}
        </Chip>
      );
    default:
      return cellValue;
  }
}, []);

return (
<Table aria-label="Example table with custom cells">
    <TableHeader columns={columns}>
      {(column) => (
        <TableColumn key={column.uid} align={column.uid === "actions" ? "center" : "start"}>
          {column.name}
        </TableColumn>
      )}
    </TableHeader>
    <TableBody items={users}>
      {(item) => (
        <TableRow key={item.id}>
          {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
        </TableRow>
      )}
    </TableBody>
  </Table>
);
}