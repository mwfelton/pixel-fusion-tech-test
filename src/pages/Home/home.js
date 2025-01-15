import Sidebar from '../../components/Sidebar/Sidebar';
import NavSearch from '../../components/NavSearch/NavSearch';

function Home() {
    return (
        <div className="home">
            <div >
                <NavSearch />
                <Sidebar />
            </div>
        </div>
    );
}

export default Home;