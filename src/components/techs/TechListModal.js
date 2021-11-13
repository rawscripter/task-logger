import React, { useState, useEffect } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import TechItem from './TechItem';
import { getTechs } from '../../actions/techActions';
import { connect } from 'react-redux';

const TechListModal = ({ techs, loading, getTechs }) => {

    useEffect(() => {
        getTechs();
        // eslint-disable-next-line
    }, []);


    return (
        <div id="tech-list-modal" className="modal  modal-fixed-footer" style={modalStyle}>
            <div className="modal-content">

                <div className="logs">

                    <ul className="collection with-header">
                        <li className="collection-header">
                            <h5 className="text-h3 m-0 p-2 center-align">Developers</h5>
                        </li>
                        {!loading && techs.length > 0 ? (
                            techs.map(tech => (
                                <TechItem key={tech.id} tech={tech} />
                            ))
                        ) : (
                            <p className="center">No Developers Found </p>
                        )}
                    </ul>

                </div>

            </div>
        </div>
    );
}

const modalStyle = {
    width: '700px',
}
const mapStateToProps = state => ({
    techs: state.tech.techs,
    loading: state.tech.loading
});
export default connect(mapStateToProps,
    {
        getTechs
    }
)(TechListModal);