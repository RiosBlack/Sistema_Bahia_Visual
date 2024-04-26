import useTimeSheetCpfStore from "@/context/timeSheetCpfStore";
import { Input } from "@nextui-org/input";
import { Skeleton } from "@nextui-org/react";
import { useEffect } from "react";

export default function TitleTimeSheet() {
  const timeSheetStateCpf = useTimeSheetCpfStore((state) => state.timeSheetCpf);
  const isLoading = useTimeSheetCpfStore((state) => state.isLoading);

  return (
    <div className='grid content-start space-y-1 w-full'>
      {isLoading || timeSheetStateCpf[0]?.providers.name === undefined && (
        <Input
          type='text'
          isDisabled
          defaultValue={'Nome: Carregando...'}
        />
      )}
      {!isLoading && (
        <Input
          type='text'
          isDisabled
          defaultValue={`Nome: ${timeSheetStateCpf[0]?.providers.name}`}
        />
      )}
      {isLoading || timeSheetStateCpf[0]?.providers.cpf === undefined && (
        <Input
          type='text'
          isDisabled
          defaultValue={'Nome: Carregando...'}
        />
      )}
      {!isLoading && (
        <Input
          type='text'
          isDisabled
          defaultValue={`CPF: ${timeSheetStateCpf[0]?.providers.cpf}`}
        />
      )}
    </div>
  );
}