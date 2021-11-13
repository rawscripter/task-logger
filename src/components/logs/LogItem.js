import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
const LogItem = ({ log }) => {
    const { id, message, date, tech, attention } = log;
    return (
        <li className="collection-item">
            <div style={collectionStyle}>
                <div >
                    <a href="#edit-log-modal" className={`modal-trigger ${attention ? 'red-text' : 'blue-text'}`} >
                        {message}
                    </a>

                    <div className="grey-text">
                        <span className="black-text">ID #{id}</span> last updated by <span className="black-text">{tech}</span> on <Moment format="MMMM Do YYYY, h:mm:ss a">{date}</Moment>
                    </div>
                </div>
                <a href="#!" className="secondary-content">
                    <i className="material-icons grey-text">delete </i>
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
LogItem.propTypes = {
    log: PropTypes.object.isRequired
}

export default LogItem;