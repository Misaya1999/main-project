import Header from './component/layouts/header';
import Footer from './component/layouts/footer';
import { Outlet } from "react-router-dom";

function App2(props) {
    return (
        <>
            <Header/>

            <section>
                <div className="container">
                    <div className="row">
                        <Outlet />
                    </div>
                </div>
            </section>
            
            <Footer/>
        </>
    );
}

export default App2;
