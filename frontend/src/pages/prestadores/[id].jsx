import Layout from '../../layout/index';
import ProvidersProfileDetails from '../../components/providersProfile/providersProfileDetails';

export default function PrestadoresPage() {
    return (
        <Layout>
            <main className="flex p-5">
                <ProvidersProfileDetails />
            </main>
        </Layout>
    );
}
