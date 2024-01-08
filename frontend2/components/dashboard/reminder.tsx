"use client";
import React from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Tooltip, Checkbox, Pagination, Button, useDisclosure, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Textarea } from "@nextui-org/react";
import { FaPen } from "react-icons/fa6";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { columns, reminders } from "../../config/reminder/data";
import { CgMathPlus } from "react-icons/cg";


export default function reminder() {

  type Reminder = typeof reminders[0];

  //pagination
  const [page, setPage] = React.useState(1);
  const rowsPerPage = 6;
  const pages = Math.ceil(reminders.length / rowsPerPage);
  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return reminders.slice(start, end);
  }, [page, reminders]);

  //modal add
  const { isOpen, onOpen, onOpenChange } = useDisclosure();


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
    <div>
      <Table aria-label="Tabela de lembretes"
        bottomContent={
          <div className="flex w-full justify-center items-center space-x-2">
            <Pagination
              isCompact
              showControls
              showShadow
              color="secondary"
              page={page}
              total={pages}
              onChange={(page) => setPage(page)}
            />
            <Button onPress={onOpen} color="warning">
              Adicionar <CgMathPlus />
            </Button>
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
        <TableBody items={items}>
          {(item) => (
            <TableRow key={item.id}>
              {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
            </TableRow>
          )}
        </TableBody>
      </Table>
      <Modal
        isOpen={isOpen}
        placement={'bottom'}
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Adicionar lembrete</ModalHeader>
              <ModalBody>
                <Textarea
                  placeholder="Descreva o lembrete abaixo"
                />
              </ModalBody>
              <ModalFooter>
                {/* <Button color="danger" variant="light" onPress={onClose}>
                  Fechar
                </Button> */}
                <Button color="warning" onPress={onClose}>
                  Adicionar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}







