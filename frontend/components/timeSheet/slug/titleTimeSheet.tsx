import useTimeSheetCpfStore from "@/context/timeSheetCpfStore";
import { Input } from "@nextui-org/input";
import { Skeleton } from "@nextui-org/react";
import { useEffect } from "react";

export default function TitleTimeSheet() {
  const timeSheetStateCpf = useTimeSheetCpfStore((state) => state.timeSheetCpf);
  const isLoading = useTimeSheetCpfStore((state) => state.isLoading);
  const providerBackup = useTimeSheetCpfStore((state) => state.providerBackup);

  useEffect(() => {
    console.log(timeSheetStateCpf);
    console.log(providerBackup);

  }, [])

  return (
    <div className='grid content-start space-y-1 w-full'>
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
        <Input
          type='text'
          isDisabled
          defaultValue={`Nome: ${providerBackup?.name} ${providerBackup?.surname}`}
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
        <Input
          type='text'
          isDisabled
          defaultValue={`Cpf: ${providerBackup?.cpf}`}
        />
      }
    </div>
  );
}