import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { deleteLog, setCurrent } from '../../actions/logActions';
import M from 'materialize-css/dist/js/materialize.min.js';
const { connect } = require('react-redux');
const LogItem = ({ log, deleteLog, setCurrent }) => {
    const { id, message, date, tech, attention } = log;
    const onDelete = () => {
        deleteLog(id);
        M.toast({ html: 'Log Deleted' });
    };

    return (
        <li className="collection-item">
            <div style={collectionStyle}>
                <div >
                    <a onClick={() => setCurrent(log)} href="#edit-log-modal" className={`modal-trigger ${attention ? 'red-text' : 'blue-text'}`} >
                        <p className="task_name">{message}</p>
                    </a>

                    <div className="grey-text">
                        <span className="black-text">ID #{id}</span> assigned to <span className="black-text">{tech}</span> on <Moment format="MMMM Do YYYY, h:mm:ss a">{date}</Moment>
                    </div>
                </div>
                <a onClick={onDelete} href="#!" className="secondary-content">
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

export default connect(null, {
    deleteLog,
    setCurrent
})(LogItem);