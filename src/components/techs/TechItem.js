import React from 'react';
import PropTypes from 'prop-types';
import { deleteTech, setCurrentTech } from '../../actions/techActions';
import { connect } from 'react-redux';
import M from 'materialize-css/dist/js/materialize.min.js';



const TechItem = ({ tech, deleteTech, setCurrentTech }) => {
    const { id, firstName, lastName } = tech;

    const onDelete = () => {
        deleteTech(id);
        M.toast({ html: `${firstName} ${lastName} is deleted` });
    }

    return (
        <li className="collection-item">
            <div style={collectionStyle}>
                <div >
                    <a onClick={() => setCurrentTech(tech)} href="#edit-tech-modal" className={`modal-trigger blue-text`} >
                        {firstName} {lastName}
                    </a>
                </div>
                <a onClick={onDelete} href="#!" className="secondary-content">
                    <i className="material-icons grey-text">delete</i>
                </a>
            </div>
        </li>
    );
}

const collectionStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
}
TechItem.propTypes = {
    tech: PropTypes.object.isRequired
}

export default connect(null, { deleteTech, setCurrentTech })(TechItem);