import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, User, Chip, Tooltip } from "@nextui-org/react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";
import { PrestadoresContext } from "@/context/providersContext";
import { useCallback, useContext, useEffect } from "react";
import { LuPencilLine } from "react-icons/lu";
import Link from "next/link";

export default function TimeSheetProvidersModal() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const { allProvidersIsContratado, getAllProvidersIsContratado } = useContext(PrestadoresContext)

  const columns = [
    { name: "NOME", uid: "name" },
    { name: "FUNÇÃO", uid: "functionsProviders" },
    { name: "AÇÕES", uid: "actions" },
  ];

  useEffect(() => {
    getAllProvidersIsContratado()
  }, [])

  type User = typeof allProvidersIsContratado[];

  const renderCell = (allProvidersIsContratado: User, columnKey: React.Key) => {

    type Providers = typeof allProvidersIsContratado[0];

    const cellValue = allProvidersIsContratado[columnKey as keyof Providers];

    switch (columnKey) {
      case "name":
        return (
          <User
            avatarProps={{ radius: "lg", src: allProvidersIsContratado.urlImage }}
            description={allProvidersIsContratado.cpf}
            name={allProvidersIsContratado.name}
          >
            {allProvidersIsContratado.cpf}
          </User>
        );
      case "functionsProviders":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-sm capitalize">{allProvidersIsContratado.functionsProviders.functionProviders}</p>
          </div>
        );
      case "actions":
        return (
          <div className="relative flex items-center gap-2">
            <Link href={'http://localhost:3000/system/rh/timeSheet/' + allProvidersIsContratado.cpf}>
              <Tooltip content="Folha de pagamento">
                <span className="text-lg cursor-pointer active:opacity-50 hover:text-orange-500">
                  <LuPencilLine />
                </span>
              </Tooltip>
            </Link>
          </div>
        );
      default:
        return cellValue;
    }
  };


  return (
    <>
      <Button onPress={onOpen} color="warning" variant="shadow">Lançar Diária</Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Prestadores Contratados</ModalHeader>
              <ModalBody>
                <Table aria-label="Example static collection table" selectionMode="single">
                  <TableHeader columns={columns}>
                    {(column) => (
                      <TableColumn key={column.uid} align={column.uid === "actions" ? "center" : "start"}>
                        {column.name}
                      </TableColumn>
                    )}
                  </TableHeader>
                  <TableBody items={allProvidersIsContratado}>
                    {(item) => (
                      <TableRow key={item.cpf}>
                        {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </ModalBody>
              <ModalFooter>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}