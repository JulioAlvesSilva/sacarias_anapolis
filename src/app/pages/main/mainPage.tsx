'use cliente'
import Footer from "../components/footer";
import HeaderMain from "../components/header";
import Whats from "../components/whats";
import Banner from "./components/banner";
import CEOMain from "./components/ceo";
import EmpresaMain from "./components/empresa";
import Products from "./components/products";

export default function MainPage() {
    return (
        <>
            <HeaderMain />
            <Banner />
            <Products/>
            <CEOMain/>
            <EmpresaMain/>
            <Footer/>
            <Whats/>
        </>
    )
}