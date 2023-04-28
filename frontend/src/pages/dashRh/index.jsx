import Layout from '../../layout/index';
import DashboardRH from '../../components/dashboardRh/index';
import Sidebar from '../../components/dashboardRh/sidebar';

export default function RhPage() {
    return (
        <Layout>
            <main className="flex">
                <Sidebar />
                <DashboardRH />
            </main>
        </Layout>
    );
}
