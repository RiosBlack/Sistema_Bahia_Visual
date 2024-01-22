'use client'
import Sidebar from '@/components/dashboard/sidebar'
import React from 'react'
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Select, SelectItem, Chip, Tooltip, ChipProps } from "@nextui-org/react";
import { FaRegPenToSquare } from "react-icons/fa6";
import SignatureModal from '@/components/timeSheet/signatureModal';

const statusColorMap: Record<string, ChipProps["color"]> = {
  Sim: "success",
  Não: "danger",
};
export default function Page({ params }: { params: { slug: string } }) {

  const rows = [
    {
      providers: "Joãozinho",
      cpf: "000.000.000-00",
      date: "25/10/1992",
      day: "Segunda",
      entradaTurnoDia: "8:00",
      intervaloTurnoDia: "12:00",
      retornoTurnoDia: "13:00",
      saidaTurnoDia: "17:00",
      entradaTurnoNoite: "17:00",
      intervaloTurnoNoite: "18:00",
      retornoTurnoNoite: "19:00",
      saidaTurnoNoite: "20:00",
      hoursService: "12:00",
      diaryDay: "60,00",
      hoursDiaryDay: "R$ 180,00",
      status: "Não",
    }
  ];

  for (let index = 0; index <= 30; index++) {
    rows.push({
      providers: "Joãozinho",
      cpf: "000.000.000-00",
      date: "25/10/1992",
      day: "Segunda",
      entradaTurnoDia: "8:00",
      intervaloTurnoDia: "12:00",
      retornoTurnoDia: "13:00",
      saidaTurnoDia: "17:00",
      entradaTurnoNoite: "17:00",
      intervaloTurnoNoite: "18:00",
      retornoTurnoNoite: "19:00",
      saidaTurnoNoite: "20:00",
      hoursService: "12:00",
      diaryDay: "60,00",
      hoursDiaryDay: "R$ 180,00",
      status: "Sim",
    })
  }

  const columns = [
    {
      key: "date",
      label: "DATA",
    },
    {
      key: "day",
      label: "DIA",
    },
    {
      key: "entradaTurnoDia",
      label: "ENT-1",
    },
    {
      key: "intervaloTurnoDia",
      label: "INT-ENT",
    },
    {
      key: "retornoTurnoDia",
      label: "INT-SAI",
    },
    {
      key: "saidaTurnoDia",
      label: "SAI-1",
    },
    {
      key: "entradaTurnoNoite",
      label: "ENT-2",
    },
    {
      key: "intervaloTurnoNoite",
      label: "INT-ENT",
    },
    {
      key: "retornoTurnoNoite",
      label: "INT-SAI",
    },
    {
      key: "saidaTurnoNoite",
      label: "SAI",
    },
    {
      key: "hoursService",
      label: "TOTAL",
    },
    {
      key: "diaryDay",
      label: "DIARIA",
    },
    {
      key: "hoursDiaryDay",
      label: "VALOR/DIA",
    },
    {
      key: "status",
      label: "ASS",
    },
    {
      key: "actions",
      label: "AÇÕES",
    },
  ];

  const dataMes = [
    {
      label: "Janeiro/2024",
      value: "Janeiro/2024",
    },
  ]

  type Rows = typeof rows[0];


  const renderCell = React.useCallback((rows: Rows, columnKey: React.Key) => {
    const cellValue = rows[columnKey as keyof Rows];

    switch (columnKey) {
      case "status":
        return (
          <Chip className="capitalize" color={statusColorMap[rows.status]} size="sm" variant="flat">
            {cellValue}
          </Chip>
        );
      case "actions":
        return (
          <>
            {rows.status === 'Não' ?
              <div className="relative flex items-center gap-2">
                
                <Tooltip content="Assinar">
                  <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                    <SignatureModal />
                  </span>
                </Tooltip>
                <Tooltip color="danger" content="Editar">
                  <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                    <FaRegPenToSquare />
                  </span>
                </Tooltip>
              </div>
              : <></>}
          </>
        );
      default:
        return cellValue;
    }
  }, []);

  return (
    <div className='h-full w-full flex'>
      <Sidebar />
      <div className='px-3 space-y-2 w-full'>
        <h1 className='text-xl font-bold'>Folha de ponto</h1>
        <div className='flex justify-between'>
          <div>
            <h2>Nome: </h2>
            <h2>Cpf: {params.slug}</h2>
          </div>
          <div>
            <Select
              items={dataMes}
              label="Mês/Ano"
              placeholder="Selecione o mês e ano de referência"
              className="max-w-xs"
            >
              {(data) => <SelectItem key={data.value}>{data.label}</SelectItem>}
            </Select>
          </div>
        </div>
        <Table aria-label="Example table with custom cells">
          <TableHeader columns={columns}>
            {(column) => (
              <TableColumn key={column.key} align={column.label === "actions" ? "center" : "start"}>
                {column.label}
              </TableColumn>
            )}
          </TableHeader>
          <TableBody items={rows}>
            {(item) => (
              <TableRow key={item.cpf}>
                {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}