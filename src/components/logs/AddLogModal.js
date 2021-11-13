import React, { useState, useEffect } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import { connect } from 'react-redux';
import { addLog } from '../../actions/logActions';
import { getTechs } from '../../actions/techActions';
const AddLogModal = ({ log, tech: { techs }, addLog, getTechs }) => {

    const [message, setMessage] = useState('');
    const [attention, setAttention] = useState(false);
    const [tech, setTech] = useState('');

    // fetch techs
    useEffect(() => {
        getTechs();
        // eslint-disable-next-line
    }, []);


    const onSubmit = () => {
        if (message === '' || tech === '') {
            M.toast({ html: 'Please enter a message and tech' });
        } else {
            addLog({ message, attention, tech });
            M.toast({ html: `Log added by ${tech}` });
        }
        // Clear Fields
        // Clear Fields
        setMessage('');
        setAttention(false);
        setTech('');
    }
    return (
        <div id="add-log-modal" className="modal  modal-fixed-footer" style={modalStyle}>

            <div className="modal-content">
                <div className="center-align" style={modalHeader}>
                    <h5 >Enter System Log</h5>
                </div>

                <div className="row">
                    <div className="input-field">
                        <input type="text" name="message" value={message} onChange={e => setMessage(e.target.value)} />
                        <label htmlFor="message" className="active">Log Message</label>
                    </div>
                    <div className="input-field">
                        <select name="tech" value={tech} className="browser-default" onChange={e => setTech(e.target.value)}>
                            <option value="" disabled>Select Developer</option>
                            {techs && techs.map(tech => (
                                <option key={tech.id} value={tech.firstName}>{tech.firstName} {tech.lastName}</option>
                            ))}
                        </select>
                    </div>
                    <div className="input-field">
                        <p>
                            <label>
                                <input type="checkbox" className="filled-in" checked={attention} value={attention} onChange={e => setAttention(!attention)} />
                                <span>Needs Attention</span>
                            </label>
                        </p>
                    </div>

                </div>
            </div>


            <div className="modal-footer center-align">
                <a href="#!" onClick={onSubmit} className="modal-close waves-effect waves-blue blue btn">Add To List</a>
            </div>
        </div>
    );
}

const modalStyle = {
    width: '500px',
    height: '50%',
}

const modalHeader = {
    marginBottom: '20px',
}

const mapStateToProps = state => ({
    log: state.log,
    tech: state.tech
});

export default connect(mapStateToProps, {
    addLog, getTechs
})(AddLogModal);