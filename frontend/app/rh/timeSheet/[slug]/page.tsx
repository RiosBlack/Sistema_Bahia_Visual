'use client'
import Sidebar from '@/components/dashboard/sidebar'
import React, { useEffect, useState } from 'react'
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Select, SelectItem, Chip, Tooltip, ChipProps, Button, Input, User, user, Avatar } from "@nextui-org/react";
import { FaRegPenToSquare } from "react-icons/fa6";
import SignatureModal from '@/components/timeSheet/signatureModal';
import SignatureModalView from '@/components/timeSheet/signatureModalView';
import { useParams } from 'next/navigation'
import axiosApi from '@/services/axiosConfig';
import useTimeSheetCpfStore from '@/context/timeSheetCpfStore';
import TitleTimeSheet from '@/components/timeSheet/slug/titleTimeSheet';
import { format } from 'date-fns';

const statusColorMap: Record<string, ChipProps["color"]> = {
  Sim: "success",
  Não: "danger",
};
export default function Page({ params }: { params: { slug: string } }) {

  const { slug } = useParams()

  const timeSheetCpf = useTimeSheetCpfStore((state) => state.setTimeSheetCpf)
  const timeSheetStateCpf = useTimeSheetCpfStore((state) => state.timeSheetCpf)
  const setIsLoading = useTimeSheetCpfStore((state) => state.setIsLoading)

  async function getProvider() {
    try {
      setIsLoading(true);
      const { data } = await axiosApi.post('/timeSheet/cpfDateBetween', {
        dateInitial: "17/03/2024",
        dateFinal: "19/03/2024",
        cpf: slug
      });
      timeSheetCpf(data);
      setIsLoading(false);
      console.log(data);
      
    } catch (error) {
      setIsLoading(false);
      console.log("Erro ao buscar dados.", error);
    }
  }

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
      key: "isSigned",
      label: "ASS",
    },
    {
      key: "actions",
      label: "AÇÕES",
    },
  ];

  type Rows = typeof rows[0];

  useEffect(() => {
    getProvider()
  }, [])


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

                <Tooltip content="Assinar" color='danger'>
                  <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                    <SignatureModal />
                  </span>
                </Tooltip>
                <Tooltip color="warning" content="Editar">
                  <Button isIconOnly variant="light" size="md" className="text-lg text-default-400 cursor-pointer active:opacity-50">
                    <FaRegPenToSquare />
                  </Button>
                </Tooltip>
              </div>
              :
              <>
                <Tooltip color="primary" content="Visualizar Assinatura">
                  <SignatureModalView />
                </Tooltip>
              </>}
          </>
        );
      default:
        return cellValue;
    }
  }, []);

  return (
    <div className='h-full w-full flex space-x-2'>
      <Sidebar />
      <div className=' space-y-2'>
        <h1 className='text-xl font-bold'>Folha de ponto</h1>
        <div className='flex justify-between space-x-2'>
          <div className='flex w-full space-x-2'>
            <Avatar src={timeSheetStateCpf[0]?.providers.urlImage} className="w-32 h-28 text-tiny" />
            <TitleTimeSheet />
          </div>
          <div className='grid space-y-1'>
            <Input
              isClearable
              type="date"
              label="Data Inicial"
              defaultValue='01/10/1992'
            />
            <Input
              isClearable
              type="date"
              label="Data Final"
              defaultValue='01/10/1992'
            />
            <Button color="primary" variant='shadow'>
              Atualizar
            </Button>
          </div>
        </div>
        <div>
          <Table>
            <TableHeader columns={columns}>
              {(column) => (
                <TableColumn key={column.key} align={column.label === "actions" ? "center" : "start"}>
                  {column.label}
                </TableColumn>
              )}
            </TableHeader>
            <TableBody items={timeSheetStateCpf}>
              {(item) => (
                <TableRow key={item.cpf}>
                  {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}