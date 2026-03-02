// Layout không có Left side bar

import Header from "./header";
import Footer from "./footer";
import { Outlet } from "react-router-dom";

function SubLayout(){
    return(
        <>
        <Header />

        <div className="container">
            <Outlet />
        </div>

        <Footer />
        </>
    )
}

export default SubLayout;