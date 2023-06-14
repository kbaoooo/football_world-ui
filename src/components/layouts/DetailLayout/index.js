import Header from "../DefaultLayout/Header";
import Scrollbar from "./Scrollbar";
function DetailLayout({children}) {
    return(
        <div className="wrapper">
            <Header/>
            <div className="content">
                <Scrollbar/>
                {children}
            </div>
        </div>
    );
}

export default DetailLayout;