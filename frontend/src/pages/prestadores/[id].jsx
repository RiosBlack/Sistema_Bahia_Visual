import Layout from '../../layout/index';
import Sidebar from '../../components/dashboardRh/sidebar';
import ProvidersProfileDetails from '../../components/providersProfile/providersProfileDetails';

export default function PrestadoresPage() {
    return (
        <Layout>
            <main className="flex">
                <Sidebar />
                <ProvidersProfileDetails />
            </main>
        </Layout>
    );
}
