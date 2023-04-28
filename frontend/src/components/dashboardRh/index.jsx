import BlocksProviders from './blocksProviders';
import Blocks from './blocks';

export default function DashboardRH() {
    return (
        <div className='w-full grid p-5 space-y-2'>
            <Blocks />
            <BlocksProviders />
        </div>
    );
}
