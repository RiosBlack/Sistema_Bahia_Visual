'use client'
import { useContext, useMemo, useState, useCallback, Key, useEffect } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Input,
  Button,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Chip,
  User,
  Pagination,
  Selection,
  ChipProps,
  SortDescriptor,
  Tooltip,
  user,
  image
} from "@nextui-org/react";
import { capitalize } from "../../config/reminder/utils";
import { FaEye } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa6";
import ProvidersAddModal from "./providersAddModal";
import { PrestadoresContext, ProviderData } from "@/context/providersContext";
import Link from "next/link";
import ContratarProviders from "./contratarProviders";
import DemitirProviders from "./demitirProviders";


const statusColorMap: Record<string, ChipProps["color"]> = {
  Contratado: "success",
  Demitido: "danger",
  Cadastrado: "warning",
};

const statusOptions = [
  { name: "Contratado", uid: "Contratado" },
  { name: "Cadastrado", uid: "Cadastrado" },
  { name: "Demitido", uid: "Demitido" },
];

const columns = [
  { name: "NOME", uid: "name" },
  { name: "FUNÇÃO", uid: "functionProviders" },
  { name: "STATUS", uid: "status" },
  { name: "AÇÕES", uid: "actions" },
  { name: "CONTRATAR", uid: "contratar" }
];

const INITIAL_VISIBLE_COLUMNS = ["name", "functionProviders", "status", "actions", "contratar"];

type User = ProviderData;

export default function TableProviders() {

  const [filterValue, setFilterValue] = useState("");
  const [visibleColumns, setVisibleColumns] = useState<Selection>(new Set(INITIAL_VISIBLE_COLUMNS));
  const [statusFilter, setStatusFilter] = useState<Selection>("all");
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [sortDescriptor, setSortDescriptor] = useState<SortDescriptor>({
    column: "age",
    direction: "ascending",
  });

  const { allProviders } = useContext(PrestadoresContext);

  const [page, setPage] = useState(1);

  const hasSearchFilter = Boolean(filterValue);

  const headerColumns = useMemo(() => {
    if (visibleColumns === "all") return columns;

    return columns.filter((column) => Array.from(visibleColumns).includes(column.uid));
  }, [visibleColumns]);

  const filteredItems = useMemo(() => {
    let filteredUsers: ProviderData[] = allProviders ? [...allProviders] : [];

    if (hasSearchFilter) {
      filteredUsers = filteredUsers.filter((provider) =>
        provider.name.toLowerCase().includes(filterValue.toLowerCase())
      );
    }
    if (statusFilter !== "all" && Array.from(statusFilter).length !== statusOptions.length) {
      filteredUsers = filteredUsers.filter((provider) =>
        Array.from(statusFilter).includes(provider.name)
      );
    }

    return filteredUsers;
  }, [allProviders, filterValue, statusFilter, hasSearchFilter]);

  const pages = Math.ceil(filteredItems.length / rowsPerPage);

  const items = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return filteredItems.slice(start, end);
  }, [page, filteredItems, rowsPerPage]);

  const sortedItems = useMemo(() => {
    return [...items].sort((a: ProviderData, b: ProviderData) => {
      const first = a[sortDescriptor.column as keyof ProviderData] as number;
      const second = b[sortDescriptor.column as keyof ProviderData] as number;
      const cmp = first < second ? -1 : first > second ? 1 : 0;

      return sortDescriptor.direction === "descending" ? -cmp : cmp;
    });
  }, [sortDescriptor, items]);

  const renderCell = useCallback((allProviders: User, columnKey: Key) => {
    const cellValue = allProviders[columnKey as keyof User];


    switch (columnKey) {
      case "name":
        return (
          <User
            avatarProps={{ radius: "lg", src: allProviders.urlImage }}
            description={allProviders.cpf}
            name={allProviders.name + " " + allProviders.surname}
          >
            {user.name}
          </User>
        );
      case "functionProviders":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-small capitalize">{allProviders.functionsProviders?.functionProviders}</p>
          </div>
        );
      case "status":
        const lastContratacaoDemissao = allProviders.contratacaoDemissao[allProviders.contratacaoDemissao.length - 1];
        {
          console.log(lastContratacaoDemissao);
        }
        return (
          <Chip className="capitalize" color={statusColorMap[lastContratacaoDemissao.isContratado]} size="sm" variant="flat">
            {lastContratacaoDemissao.isContratado}
          </Chip>
        );
      case "actions":
        return (
          <div className="relative flex items-center justify-center gap-2">
            <Link href={'http://localhost:3000/system/rh/profile/' + allProviders.cpf}>
              <Tooltip content="Perfil">
                <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                  <FaEye />
                </span>
              </Tooltip>
            </Link>
          </div>
        );
      case "contratar":
        return (
          <>
            {allProviders.contratacaoDemissao[allProviders.contratacaoDemissao.length - 1].isContratado === 'contratado' ? (
              <DemitirProviders
                contratacaoDate={allProviders.contratacaoDemissao[allProviders.contratacaoDemissao.length - 1].contratacaoDate}
                cpf={allProviders.cpf}
                diary={allProviders.contratacaoDemissao[allProviders.contratacaoDemissao.length - 1].diary}
                functionContratado={allProviders.contratacaoDemissao[allProviders.contratacaoDemissao.length - 1].functionContratado}
                imagem={allProviders.urlImage}
                nome={allProviders.name + " " + allProviders.surname}
                key={allProviders.cpf}
              />
            ) : (
              <ContratarProviders
                nome={allProviders.name + " " + allProviders.surname}
                cpf={allProviders.cpf}
                imagem={allProviders.urlImage}
                key={allProviders.cpf}
              />
            )}
          </>
        )
      default:
        return cellValue;
    }
  }, []);

  const onNextPage = useCallback(() => {
    if (page < pages) {
      setPage(page + 1);
    }
  }, [page, pages]);

  const onPreviousPage = useCallback(() => {
    if (page > 1) {
      setPage(page - 1);
    }
  }, [page]);

  const onRowsPerPageChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    setRowsPerPage(Number(e.target.value));
    setPage(1);
  }, []);

  const onSearchChange = useCallback((value?: string) => {
    if (value) {
      setFilterValue(value);
      setPage(1);
    } else {
      setFilterValue("");
    }
  }, []);

  const onClear = useCallback(() => {
    setFilterValue("")
    setPage(1)
  }, [])

  const topContent = useMemo(() => {
    return (
      <div className="flex flex-col gap-4">
        <div className="flex justify-between gap-3 items-end">
          <Input
            isClearable
            className="w-full sm:max-w-[44%]"
            placeholder="Pesquise por nome"
            startContent={<IoSearch />}
            value={filterValue}
            onClear={() => onClear()}
            onValueChange={onSearchChange}
          />
          <div className="flex gap-3">
            <ProvidersAddModal />
          </div>
        </div>
        <div className="flex justify-between items-center">
          <label className="flex items-center text-default-400 text-small">
            Prestadores por pagina:
            <select
              className="bg-transparent outline-none text-default-400 text-small"
              onChange={onRowsPerPageChange}
            >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
            </select>
          </label>
        </div>
      </div>
    );
  }, [
    filterValue,
    statusFilter,
    visibleColumns,
    onSearchChange,
    onRowsPerPageChange,
    hasSearchFilter,
  ]);

  const bottomContent = useMemo(() => {
    return (
      <div className="py-2 px-2 flex justify-center items-center">
        <Pagination
          isCompact
          showControls
          showShadow
          color="primary"
          page={page}
          total={pages}
          onChange={setPage}
        />
        <div className="hidden sm:flex w-[30%] justify-end gap-2">
          <Button isDisabled={pages === 1} size="sm" variant="flat" onPress={onPreviousPage}>
            Voltar
          </Button>
          <Button isDisabled={pages === 1} size="sm" variant="flat" onPress={onNextPage}>
            Proximo
          </Button>
        </div>
      </div>
    );
  }, [items.length, page, pages, hasSearchFilter]);

  return (
    <Table
      aria-label="Example table with custom cells, pagination and sorting"
      isHeaderSticky
      bottomContent={bottomContent}
      bottomContentPlacement="outside"
      classNames={{
        wrapper: "max-h-[382px]",
      }}
      sortDescriptor={sortDescriptor}
      topContent={topContent}
      topContentPlacement="outside"
      onSortChange={setSortDescriptor}
    >
      <TableHeader columns={headerColumns}>
        {(column) => (
          <TableColumn
            key={column.uid}
            align={column.uid === "actions" ? "center" : "start"}
            allowsSorting={column.sortable}
          >
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody emptyContent={"Sem prestadores cadastrados"} items={sortedItems}>
        {(item) => (
          <TableRow key={item.cpf}>
            {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
