import BlocksProviders from './blocksProviders';
import Blocks from './blocks';

export default function DashboardRH() {
    return (
        <div className='grid mt-5 p-5 space-y-4'>
            <Blocks />
            <BlocksProviders />
        </div>
    );
}
