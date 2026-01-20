import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Navbar from "../components/header/Navbar";

const HomeLayout = () => {
    return (
        <div className="mx-auto">
            <header>
                <Header/>
                <nav>
                    <Navbar/>
                </nav>
            </header>
            <main className="md:w-11/12 h-screen mx-auto">
                    <Outlet/>
            </main>
            <footer className="bg-footer-500">
                <Footer/>
            </footer>
        </div>
    );
};

export default HomeLayout;