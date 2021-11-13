import React, { useState } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';

const EditLogModal = () => {
    const [message, setMessage] = useState('');
    const [attention, setAttention] = useState(false);
    const [tech, setTech] = useState('');

    const onSubmit = () => {
        if (message === '' || tech === '') {
            M.toast({ html: 'Please enter a message and tech' });
        } else {
            console.log(message, attention, tech);
        }

        // Clear Fields
        setMessage('');
        setAttention(false);
        setTech('');
    }
    return (
        <div id="edit-log-modal" className="modal  modal-fixed-footer" style={modalStyle}>

            <div className="modal-content">
                <div className="center-align" style={modalHeader}>
                    <h5 >Edit System Log</h5>
                </div>

                <div className="row">
                    <div className="input-field">
                        <input type="text" name="message" value={message} onChange={e => setMessage(e.target.value)} />
                        <label htmlFor="message" className="active">Log Message</label>
                    </div>
                    <div className="input-field">
                        <select name="tech" value={tech} className="browser-default" onChange={e => setTech(e.target.value)}>
                            <option value="" disabled>Select Technician</option>
                            <option value="John Doe">John Doe</option>
                            <option value="Jane Doe">Jane Doe</option>
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


            <div class="modal-footer center-align">
                <a href="#!" onClick={onSubmit} class="modal-close waves-effect waves-blue blue btn">Edit List</a>
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
export default EditLogModal;