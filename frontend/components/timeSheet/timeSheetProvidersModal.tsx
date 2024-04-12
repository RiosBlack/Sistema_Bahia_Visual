import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, User, Chip, Tooltip } from "@nextui-org/react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";
import { PrestadoresContext } from "@/context/providersContext";
import { useCallback, useContext } from "react";
import { LuPencilLine } from "react-icons/lu";

export default function TimeSheetProvidersModal() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const { allProviders } = useContext(PrestadoresContext)

  const columns = [
    { name: "NOME", uid: "name" },
    { name: "FUNÇÃO", uid: "functionsProviders" },
    { name: "AÇÕES", uid: "actions" },
  ];

  type User = typeof allProviders[];

  const renderCell = (allProviders: User, columnKey: React.Key) => {

    type Providers = typeof allProviders[0];

    const cellValue = allProviders[columnKey as keyof Providers];

    switch (columnKey) {
      case "name":
        return (
          <User
            avatarProps={{ radius: "lg", src: allProviders.urlImage}}
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
      case "actions":
        return (
          <div className="relative flex items-center gap-2">
            <Tooltip content="Folha de pagamento">
              <span className="text-lg cursor-pointer active:opacity-50">
                <LuPencilLine />
              </span>
            </Tooltip>
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
              <ModalHeader className="flex flex-col gap-1">Prestadores</ModalHeader>
              <ModalBody>
                <Table aria-label="Example static collection table">
                  <TableHeader columns={columns}>
                    {(column) => (
                      <TableColumn key={column.uid} align={column.uid === "actions" ? "center" : "start"}>
                        {column.name}
                      </TableColumn>
                    )}
                  </TableHeader>
                  <TableBody items={allProviders}>
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