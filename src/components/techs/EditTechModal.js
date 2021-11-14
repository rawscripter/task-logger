import React, { useState, useEffect } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import { connect } from 'react-redux';
import { clearCurrentTech, updateTech } from '../../actions/techActions';

const EditTechModal = ({ currentTech, clearCurrentTech, updateTech }) => {
    const [id, setId] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    useEffect(() => {
        if (currentTech) {
            setId(currentTech.id);
            setFirstName(currentTech.firstName);
            setLastName(currentTech.lastName);
            clearCurrentTech();
        }
    }, [currentTech, clearCurrentTech]);

    const onSubmit = () => {
        if (firstName === '' || lastName === '') {
            M.toast({ html: 'Please enter a first and last name' });
        } else {
            const tech = {
                id,
                firstName,
                lastName
            };
            updateTech(tech);
            M.toast({ html: `${firstName} ${lastName} updated` });
        }
        // Clear Fields
        // Clear Fields
        setFirstName('');
        setLastName('');

    }
    return (
        <div id="edit-tech-modal" className="modal  modal-fixed-footer">

            <div className="modal-content">
                <div className="center-align" style={modalHeader}>
                    <h5 >Edit Tech</h5>
                </div>

                <div className="row">
                    <div className="input-field">
                        <input type="text" name="firstName" placeholder="First Name" value={firstName} onChange={e => setFirstName(e.target.value)} />
                        <label htmlFor="setFirstName" className="active">First Name</label>
                    </div>
                    <div className="input-field">
                        <input type="text" name="lastName" placeholder="Last Name" value={lastName} onChange={e => setLastName(e.target.value)} />
                        <label htmlFor="lastName"  >Last Name</label>
                    </div>
                </div>
            </div>


            <div className="modal-footer center-align">
                <a href="#!" onClick={onSubmit} className="modal-close waves-effect waves-blue blue btn">Update</a>
            </div>
        </div>
    );
}



const modalHeader = {
    marginBottom: '20px',
}
const mapStateToProps = state => ({
    currentTech: state.tech.currentTech
});


export default connect(mapStateToProps, {
    clearCurrentTech,
    updateTech
})(EditTechModal);