import React from 'react';
import PropTypes from 'prop-types';
const TechItem = ({ tech }) => {
    const { id, firstName, LastName } = tech;
    return (
        <li className="collection-item">
            <div style={collectionStyle}>
                <div >
                    <a href="#edit-tech-modal" className={`modal-trigger blue-text`} >
                        {firstName} {LastName}
                    </a>
                </div>
                <a href="#!" className="secondary-content">
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

export default TechItem;