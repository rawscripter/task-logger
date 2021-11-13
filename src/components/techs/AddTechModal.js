import React, { useState } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import { addTech } from '../../actions/techActions';
import { connect } from 'react-redux';
const AddTechModal = ({ addTech }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const onSubmit = () => {
        if (firstName === '' || lastName === '') {
            M.toast({ html: 'Please enter a first and last name' });
        } else {
            addTech({ firstName, lastName });
            M.toast({ html: `${firstName} ${lastName} was added as a tech` });

        }
        // Clear Fields
        setFirstName('');
        setLastName('');

    }
    return (
        <div id="add-tech-modal" className="modal  modal-fixed-footer">
            <div className="modal-content">
                <div className="center-align" style={modalHeader}>
                    <h5 >Add New Tech</h5>
                </div>
                <div className="row">
                    <div className="input-field">
                        <input type="text" name="firstName" value={firstName} onChange={e => setFirstName(e.target.value)} />
                        <label htmlFor="setFirstName">First Name</label>
                    </div>
                    <div className="input-field">
                        <input type="text" name="lastName" value={lastName} onChange={e => setLastName(e.target.value)} />
                        <label htmlFor="lastName"  >Last Name</label>
                    </div>
                </div>
            </div>
            <div className="modal-footer center-align">
                <a href="#!" onClick={onSubmit} className="modal-close waves-effect waves-blue blue btn">Add Tech</a>
            </div>
        </div>
    );
}

const modalHeader = {
    marginBottom: '20px',
}
export default connect(null, { addTech })(AddTechModal);