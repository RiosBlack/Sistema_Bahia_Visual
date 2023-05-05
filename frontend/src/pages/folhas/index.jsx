import Layout from '../../layout/index';
import { TbClockPause } from 'react-icons/tb';
import { Button } from '@chakra-ui/react';
import TitleProviders from '../../components/folhas/titleProviders';
import DateFolhas from '../../components/folhas/date';
import Turno1 from '../../components/folhas/turno1';
import Turno2 from '../../components/folhas/turno2';
import ButtonAssinar from '../../components/folhas/buttonAssinar';
import { useState } from 'react';
import ModalAssinar from '../../components/folhas/modalAssina';

export default function FolhasPagamentoPage() {
    const [screenshot, setScreenshot] = useState(null);

    return (
        <Layout>
            <div className="py-5 px-2 font-sans space-y-3 grid justify-items-center">
                <TitleProviders />
                <div className="flex w-full justify-around space-x-3">
                    <DateFolhas />
                    <Turno1 />
                    <Turno2 />
                </div>
                <div className="space-x-3 flex items-center justify-around w-1/2">
                    {screenshot == null ? (
                        <ButtonAssinar setScreenshot={setScreenshot} />
                    ) : null}

                    <ModalAssinar screenshot={screenshot} />
                    <Button size={'sm'} colorScheme={'orange'}>
                        <TbClockPause className="mr-2 font-bold" /> Alterar
                        Lançamento
                    </Button>

                    <Button size={'sm'} colorScheme={'red'}>
                        <TbClockPause className="mr-2 font-bold" /> Enviar
                        Lançamento
                    </Button>
                </div>
            </div>
        </Layout>
    );
}
