import Layout from '../../layout/index';
import Sidebar from '../../components/dashboardRh/sidebar';
import ProvidersProfile from '../../components/providersProfile';


export default function PrestadoresPage() {
    return (
        <Layout>
            <main className="flex">
                <Sidebar />
                <ProvidersProfile />
            </main>
        </Layout>
    );
}
