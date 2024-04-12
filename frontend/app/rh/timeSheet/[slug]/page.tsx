'use client'
import Sidebar from '@/components/dashboard/sidebar'
import React, { useEffect } from 'react'
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Select, SelectItem, Chip, Tooltip, ChipProps, Button, Input, User, user, Avatar } from "@nextui-org/react";
import { FaRegPenToSquare } from "react-icons/fa6";
import SignatureModal from '@/components/timeSheet/signatureModal';
import SignatureModalView from '@/components/timeSheet/signatureModalView';
import { useParams } from 'next/navigation'
import axiosApi from '@/services/axiosConfig';

const statusColorMap: Record<string, ChipProps["color"]> = {
  Sim: "success",
  Não: "danger",
};
export default function Page({ params }: { params: { slug: string } }) {

  const { slug } = useParams()

  async function getProvider() {
    try {
      const { data } = await axiosApi.post(`/timeSheet/cpfDateBetween/${slug}`, {
        dateInitial: "17/03/2024",
        dateFinal: "19/03/2024",
        cpf: "215.959.940-92"
      });
      console.log(data);
    } catch (error) {
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
      key: "status",
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
            <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" className="w-28 h-28 text-tiny" />
            <div className='grid content-start space-y-1 w-full'>
              <Input
                type='text'
                isDisabled
                defaultValue='Nome: João'
              />
              <Input
                type='text'
                isDisabled
                defaultValue={`cpf: ${params.slug}`}
              />
            </div>
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
    </div>
  );
}