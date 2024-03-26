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
  user
} from "@nextui-org/react";
import { capitalize } from "../../config/reminder/utils";
import { FaEye } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa6";
import Link from "next/link";
import axiosApi from "../../services/axiosConfig";
import { lastDayOfMonth, format, startOfMonth } from "date-fns";


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
  { name: "CPF", uid: "cpf" },
  { name: "AÇÕES", uid: "actions" },
  { name: "VALOR TOTAL", uid: "total"}
];

export type TimeSheetTableValueDTO = {
  urlImage: string | null;
  nameImageCloud: string | null;
  name: string,
  surname: string,
  cpf: string,
  valueDailyTotal: number
}

const INITIAL_VISIBLE_COLUMNS = ["name", "cpf", "status", "actions", "total"];

type User = TimeSheetTableValueDTO;

export default function TimeSheetProvidersTable() {

  const [filterValue, setFilterValue] = useState("");
  const [visibleColumns, setVisibleColumns] = useState<Selection>(new Set(INITIAL_VISIBLE_COLUMNS));
  const [statusFilter, setStatusFilter] = useState<Selection>("all");
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [sortDescriptor, setSortDescriptor] = useState<SortDescriptor>({
    column: "age",
    direction: "ascending",
  });

  const [timeSheet, setTimeSheet] = useState<TimeSheetTableValueDTO[] | null>(null);

  const [page, setPage] = useState(1);

  const hasSearchFilter = Boolean(filterValue);

  const headerColumns = useMemo(() => {
    if (visibleColumns === "all") return columns;

    return columns.filter((column) => Array.from(visibleColumns).includes(column.uid));
  }, [visibleColumns]);

  const filteredItems = useMemo(() => {
    let filteredUsers: TimeSheetTableValueDTO[] = timeSheet ? [...timeSheet] : [];

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
  }, [timeSheet, filterValue, statusFilter, hasSearchFilter]);

  const pages = Math.ceil(filteredItems.length / rowsPerPage);

  const items = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return filteredItems.slice(start, end);
  }, [page, filteredItems, rowsPerPage]);

  const sortedItems = useMemo(() => {
    return [...items].sort((a: TimeSheetTableValueDTO, b: TimeSheetTableValueDTO) => {
      const first = a[sortDescriptor.column as keyof TimeSheetTableValueDTO] as number;
      const second = b[sortDescriptor.column as keyof TimeSheetTableValueDTO] as number;
      const cmp = first < second ? -1 : first > second ? 1 : 0;

      return sortDescriptor.direction === "descending" ? -cmp : cmp;
    });
  }, [sortDescriptor, items]);

  async function getAllTimeSheet() {
    let lastDay = lastDayOfMonth(new Date(Date.now()))
    let lastDayFormat = format(lastDay, 'dd/MM/yyyy')
    let firstDayMonth = startOfMonth(new Date());
    let firstDayFormat = format(firstDayMonth, 'dd/MM/yyyy')
    try {
      const { data } = await axiosApi.post('/timeSheet/dateMonthValue', {
        dateInitial: firstDayFormat,
        dateFinal: lastDayFormat
      })
      setTimeSheet(data);
    } catch (error) {
      alert(error)
    }
  }

  useEffect(() => {
    getAllTimeSheet()
  }, [])
  
  const renderCell = useCallback((timeSheet: User, columnKey: Key) => {
    const cellValue = timeSheet[columnKey as keyof User];
    
  
    switch (columnKey) {
      case "name":
        return (
          <User
            avatarProps={{ radius: "lg", src: timeSheet.urlImage}}
            description={timeSheet.cpf}
            name={timeSheet.name + ' ' + timeSheet.surname}
          >
            {timeSheet.name}
          </User>
        );
      case "cpf":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-small capitalize">{timeSheet.cpf}</p>
          </div>
        );
      case "cpf":
        return (
          <Chip className="capitalize" color={'primary'} size="sm" variant="flat">
            {timeSheet.cpf}
          </Chip>
        );
      case "actions":
        return (
          <div className="relative flex items-center gap-2">
            <Link href={'http://localhost:3000/rh/profile/' + timeSheet.cpf}>
              <Tooltip content="Perfil">
                <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                  <FaEye />
                </span>
              </Tooltip>
            </Link>
          </div>
        );
        case "total":
        return (
          <Chip className="capitalize" color={"primary"} size="sm" variant="flat">
            {'R$ ' + timeSheet.valueDailyTotal}
          </Chip>
        );
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
            <Dropdown>
              <DropdownTrigger className="hidden sm:flex">
                <Button endContent={<FaAngleDown className="text-small" />} variant="flat">
                  Status
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                disallowEmptySelection
                aria-label="Table Columns"
                closeOnSelect={false}
                selectedKeys={statusFilter}
                selectionMode="multiple"
                onSelectionChange={setStatusFilter}
              >
                {statusOptions.map((status) => (
                  <DropdownItem key={status.uid} className="capitalize">
                    {capitalize(status.name)}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
            
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
