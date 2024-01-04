"use client";
import React from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, User, Chip, Tooltip, ChipProps, getKeyValue, Checkbox, Pagination } from "@nextui-org/react";
import { FaPen } from "react-icons/fa6";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { columns, reminders } from "../../config/reminder/data";

export default function reminder() {

  type Reminder = typeof reminders[0];

  //pagination
  const [page, setPage] = React.useState(1);
  const rowsPerPage = 4;
  const pages = Math.ceil(reminders.length / rowsPerPage);
  // const items = React.useMemo(() => {
  //   const start = (page - 1) * rowsPerPage;
  //   const end = start + rowsPerPage;

  //   return users.slice(start, end);
  // }, [page, users]);



  const renderCell = React.useCallback((reminders: Reminder, columnKey: React.Key) => {
    const cellValue = reminders[columnKey as keyof Reminder];

    switch (columnKey) {
      case "reminder":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-sm capitalize">{cellValue}</p>
          </div>
        );
      case "date":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-sm capitalize">{cellValue}</p>
          </div>
        );
      case "isCheck":
        return (
          {
            ...reminders.isCheck === 'TRUE' ? (
              <Checkbox defaultSelected radius="lg"></Checkbox>
            ) : (
              <Checkbox radius="lg"></Checkbox>)
          }
        );
      case "actions":
        return (
          <div className="relative flex items-center gap-2">
            <Tooltip content="Editar Lembrete">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <FaPen />
              </span>
            </Tooltip>
            <Tooltip color="danger" content="Apagar lembrete">
              <span className="text-lg text-danger cursor-pointer active:opacity-50">
                <RiDeleteBin2Fill />
              </span>
            </Tooltip>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);

  return (
    <Table aria-label="Tabela de lembretes"
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
    >
      <TableHeader columns={columns}>
        {(column) => (
          <TableColumn key={column.uid} align={column.uid === "actions" ? "center" : "start"}>
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody items={reminders}>
        {(item) => (
          <TableRow key={item.id}>
            {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}







