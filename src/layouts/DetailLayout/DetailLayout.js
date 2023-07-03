//src
import { Header, Scrollbar } from '../components';

//lib
import PropTypes from 'prop-types';

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

DetailLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default DetailLayout;
