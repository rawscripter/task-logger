import React, { useState, useEffect } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import { connect } from 'react-redux';
import { clearCurrent, updateLog } from '../../actions/logActions';
import { getTechs } from '../../actions/techActions';

const EditLogModal = ({ current, techs, getTechs, clearCurrent, updateLog }) => {

    const [id, setId] = useState('');
    const [message, setMessage] = useState('');
    const [attention, setAttention] = useState(false);
    const [tech, setTech] = useState('');

    // get techs 
    useEffect(() => {
        getTechs();
        // eslint-disable-next-line
    }, []);
    useEffect(() => {
        if (current) {
            setId(current.id);
            setMessage(current.message);
            setMessage(current.message);
            setAttention(current.attention);
            setTech(current.tech);
            clearCurrent();
        }
        // eslint-disable-next-line
    }, [current]);

    const onSubmit = () => {
        if (message === '' || tech === '') {
            M.toast({ html: 'Please enter a message and tech' });
        } else {
            // update log
            const updatedLog = {
                id: id,
                message,
                attention,
                tech,
                date: new Date()
            };
            updateLog(updatedLog);
            M.toast({ html: `Log updated` });
        }

        // Clear Fields
        setMessage('');
        setAttention(false);
        setTech('');
    }
    return (
        <div id="edit-log-modal" className="modal  modal-fixed-footer">

            <div className="modal-content">
                <div className="center-align" style={modalHeader}>
                    <h5 >Edit System Log</h5>
                </div>

                <div className="row">
                    <div className="input-field">
                        <input type="text" name="message" placeholder="Log Message" className="focus-visible" value={message} onChange={e => setMessage(e.target.value)} />
                        <label htmlFor="message" className="active">Log Message</label>
                    </div>
                    <div className="input-field">
                        <select name="tech" value={tech} className="browser-default" onChange={e => setTech(e.target.value)}>
                            <option value="" disabled>Select Developer</option>
                            {/* rednder all techs */}
                            {techs && techs.map(tech => (
                                <option key={tech.id} value={tech.firstName + ' ' + tech.lastName}>{tech.firstName + ' ' + tech.lastName}</option>
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
                <a href="#!" onClick={onSubmit} className="modal-close waves-effect waves-blue blue btn">Edit List</a>
            </div>
        </div>
    );
}



const modalHeader = {
    marginBottom: '20px',
}
const mapStateToProps = state => ({
    current: state.log.current,
    techs: state.tech.techs
});
export default connect(mapStateToProps, {
    clearCurrent, updateLog, getTechs
})(EditLogModal);