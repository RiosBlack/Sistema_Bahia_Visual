'use client'
import Sidebar from '@/components/dashboard/sidebar'
import React, { useEffect, useState } from 'react'
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Chip, Tooltip, ChipProps, Button, Input, Avatar, Spinner, DatePicker } from "@nextui-org/react";
import { FaRegPenToSquare } from "react-icons/fa6";
import SignatureModal from '@/components/timeSheet/signatureModal';
import SignatureModalView from '@/components/timeSheet/signatureModalView';
import { useParams } from 'next/navigation'
import axiosApi from '@/services/axiosConfig';
import useTimeSheetCpfStore from '@/context/timeSheetCpfStore';
import TitleTimeSheet from '@/components/timeSheet/slug/titleTimeSheet';
import ButtonLancarDiaria from '@/components/timeSheet/buttonLancarDiaria';
import { startOfMonth, endOfMonth, format } from 'date-fns';
import { parseDate, DateValue } from "@internationalized/date";
import { I18nProvider } from "@react-aria/i18n";

const statusColorMap: Record<string, ChipProps["color"]> = {
  Sim: "success",
  null: "danger",
};
export default function Page({ params }: { params: { slug: string } }) {

  const { slug } = useParams()

  const timeSheetCpf = useTimeSheetCpfStore((state) => state.setTimeSheetCpf)
  const timeSheetStateCpf = useTimeSheetCpfStore((state) => state.timeSheetCpf)
  const providerBackup = useTimeSheetCpfStore((state) => state.providerBackup)
  const setIsLoading = useTimeSheetCpfStore((state) => state.setIsLoading)
  const isLoading = useTimeSheetCpfStore((state) => state.isLoading);
  const setProviderBackup = useTimeSheetCpfStore((state) => state.setProviderBackup);
  const [firstComponetDay, setFirstComponentDay] = useState<DateValue>()
  const [lastComponentDay, setLastComponentDay] = useState<DateValue>()

  async function getProvider() {
    let date = new Date()
    let firstDay = startOfMonth(date)
    let lastDay = endOfMonth(date)
    let formattedFirstDay = format(firstDay, "yyyy-MM-dd");
    let formattedLastDay = format(lastDay, "yyyy-MM-dd");
    setFirstComponentDay(parseDate(formattedFirstDay));
    setLastComponentDay(parseDate(formattedLastDay));
    //converter para o formato correto antes de enviar
    let firstComponetDayString = firstComponetDay?.toString() || '';
    let lastComponentDayString = lastComponentDay?.toString() || '';
    let dateInitial
    let dateEnd
    if (firstComponetDayString && lastComponentDayString) {
      dateInitial = format(firstComponetDayString, "dd/MM/yyyy")
      dateEnd = format(lastComponentDayString, "dd/MM/yyyy")
    }
    try {
      setIsLoading(true);
      const { data } = await axiosApi.post('/timeSheet/cpfDateBetween', {
        dateInitial: dateInitial,
        dateFinal: dateEnd,
        cpf: slug
      });
      timeSheetCpf(data);
      setIsLoading(false);
      console.log(data);
    } catch (error) {
      setIsLoading(false);
      console.log("Erro ao buscar timesheet.", error);
    }
  }

  async function getProviderBackup() {
    try {
      setIsLoading(true);
      const { data } = await axiosApi.get(`/providers/${slug}`, {
      });
      setProviderBackup(data);
      setIsLoading(false);
      console.log(data);
    } catch (error) {
      setIsLoading(false);
      console.log("Erro ao buscar prestador.", error);
    }
  }

  async function newDate() {
    try {
      setIsLoading(true);
      const { data } = await axiosApi.post('/timeSheet/cpfDateBetween', {
        dateInitial: firstDay,
        dateFinal: lastDay,
        cpf: slug
      });
      timeSheetCpf(data);
      setIsLoading(false);
      console.log(data);
    } catch (error) {
      setIsLoading(false);
      console.log("Erro ao buscar timesheet.", error);
    }
  }

  const columns = [
    {
      key: "date",
      label: "DATA",
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
      key: "diary",
      label: "DIÁRIA CONT.",
    },
    {
      key: "diaryDay",
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

  type Rows = typeof timeSheetStateCpf[0];

  useEffect(() => {
    const fetchData = async () => {
      await getProviderBackup();
      getProvider();
    };

    fetchData();
  }, []);


  const renderCell = React.useCallback((rows: Rows, columnKey: React.Key) => {
    const cellValue = rows[columnKey as keyof Rows];

    switch (columnKey) {
      case "diaryDay":
        return (
          <>{cellValue + ",00"}</>
        );
      case "isSigned":
        return (
          <Chip className="capitalize" color={statusColorMap[rows.isSigned]} size="sm" variant="flat">
            {cellValue == null ? "Não" : cellValue.toString()}
          </Chip>
        );
      case "actions":
        return (
          <>
            {rows.isSigned === null ?
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
      <div className=' space-y-2 w-full px-2'>
        <h1 className='text-xl font-bold'>Folha de ponto</h1>
        {isLoading ? <Spinner label="Carregando" color="primary" labelColor="primary" /> : (
          <div className='flex justify-between space-x-2'>
            <div className='flex w-full space-x-2'>
              <Avatar src={providerBackup?.urlImage} className="w-32 h-28 text-tiny" />
              <TitleTimeSheet />
            </div>
            <div className='grid space-y-1'>
              <I18nProvider locale="pt-BR">
                <DatePicker
                  className="max-w-md"
                  granularity="day"
                  label="Date Inicial"
                  value={firstComponetDay}
                  onChange={setFirstComponentDay}
                />
              </I18nProvider>
              <I18nProvider locale="pt-BR">
                <DatePicker
                  className="max-w-md"
                  granularity="day"
                  label="Date Final"
                  value={lastComponentDay}
                  onChange={setLastComponentDay}
                />
              </I18nProvider>
              <div className='flex space-x-1'>
                <ButtonLancarDiaria cpf={slug} />
                <Button color="primary" variant='shadow' onClick={newDate}>
                  Atualizar
                </Button>
              </div>
            </div>
          </div>
        )}
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