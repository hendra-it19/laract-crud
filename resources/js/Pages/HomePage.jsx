
import { Link, Head } from '@inertiajs/inertia-react';
import NoData from '@/Components/Homepage/NoData';
import Navbar from '@/Components/Navbar';
import ProdukList from '@/Components/Homepage/ProdukList';



const HomePage = ({ title, description, produks }) => {

    return (
        <div className="min-h-screen">

            <Head title={title} />

            <Navbar />

            <h1 className='text-2xl font-bold text-center mt-4'>{description}</h1>
            <div>
                <ProdukList produks={produks.data} />
            </div>
        </div>
    );
}

export default HomePage;

