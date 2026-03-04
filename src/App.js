import Header from './component/layouts/header';
import Footer from './component/layouts/footer';
import LeftSidebar from './component/layouts/left-sidebar';

function App(props) {
    return (
        <>
            <Header/>

            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-3">
                            <LeftSidebar />
                        </div>
                        <div className="col-sm-9">
                            {props.children}
                        </div>
                    </div>
                </div>
            </section>
            
            <Footer/>
        </>
    );
}

export default App;
