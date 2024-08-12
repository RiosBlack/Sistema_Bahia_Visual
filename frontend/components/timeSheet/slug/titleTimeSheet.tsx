import useTimeSheetCpfStore from "@/context/timeSheetCpfStore";
import { Input } from "@nextui-org/input";
import { Skeleton } from "@nextui-org/react";
import { useEffect } from "react";

export default function TitleTimeSheet() {
  const timeSheetStateCpf = useTimeSheetCpfStore((state) => state.timeSheetCpf);
  const isLoading = useTimeSheetCpfStore((state) => state.isLoading);
  const providerBackup = useTimeSheetCpfStore((state) => state.providerBackup);
  //timeSheetStateCpf[0]?.providers.name === undefined - ver qual a melhor maneira de fazer para quando não tiver dados aparecer as informações
  //dos prestadores
  // tem de colocar botão para lançar diária.
//não está funcionando o nome do provider backup
  useEffect(() => {
    console.log(providerBackup);
    
  }, [])
  
  return (
    <div className='grid content-start space-y-1 w-full'>
      {timeSheetStateCpf[0]?.providers.name === undefined ? <></> : <></>}
      {isLoading && (
        <Skeleton className="rounded-lg">
          <Input
            type='text'
            isDisabled
            defaultValue={'Nome: Carregando...'}
          />
        </Skeleton>
      )}
      {
        !isLoading && timeSheetStateCpf[0]?.providers.name !== undefined ? (
          <Input
            type='text'
            isDisabled
            defaultValue={`Nome: ${timeSheetStateCpf[0]?.providers.name} ${timeSheetStateCpf[0]?.providers.surname}`}
          />
        ) : <Input
          type='text'
          isDisabled
          defaultValue={`Nome: ${providerBackup[0]?.name} ${providerBackup[0]?.surname}`}
        />
      }
      {isLoading && (
        <Skeleton className="rounded-lg">
          <Input
            type='text'
            isDisabled
            defaultValue={'Nome: Carregando...'}
          />
        </Skeleton>
      )}
      {
        !isLoading && timeSheetStateCpf[0]?.providers.name !== undefined ? (
          <Input
            type='text'
            isDisabled
            defaultValue={`Cpf: ${timeSheetStateCpf[0]?.providers.cpf}`}
          />
        ) : <Input
          type='text'
          isDisabled
          defaultValue={`Cpf: ${providerBackup.cpf}`}
        />
      }
    </div>
  );
}