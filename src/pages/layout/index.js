import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Header from '../../common/header';

const Layout = (props) => {
    return (
        <Fragment>
            <Header />
            {props.children}
        </Fragment>
    );
};

Layout.propTypes = {
    children: PropTypes.node
};

export default Layout;