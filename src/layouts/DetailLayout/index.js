import { Header, Scrollbar } from '../layoutComponents';

function DetailLayout({ children }) {
    return (
        <div className="wrapper">
            <Header />
            <div className="content">
                <Scrollbar />
                {children}
            </div>
        </div>
    );
}

export default DetailLayout;
