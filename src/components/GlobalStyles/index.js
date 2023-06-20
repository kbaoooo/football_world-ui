//src
import PropTypes from 'prop-types';

//lib
import './GlobalStyles.scss';

function GlobalStyles({ children }) {
    return children;
}

GlobalStyles.propTypes = {
    children: PropTypes.node.isRequired, 
};

export default GlobalStyles;
