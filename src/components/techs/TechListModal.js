import React, { useState, useEffect } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import TechItem from './TechItem';
const TechListModal = () => {
    const [techs, setTechs] = useState([]);
    const [loading, setLoading] = useState(false);

    const getTechs = async () => {
        setLoading(true);
        const res = await fetch('/techs');
        const data = await res.json();
        setTechs(data);
        setLoading(false);
    }

    useEffect(() => {
        getTechs();
        // eslint-disable-next-line
    }, []);


    return (
        <div id="tech-list-modal" className="modal  modal-fixed-footer" style={modalStyle}>
            <div className="modal-content">

                <div className="logs">
                    {!loading && techs.length > 0 ? (
                        <ul className="collection with-header">
                            <li className="collection-header">
                                <h5 className="text-h3 m-0 p-2 center-align">System Logs</h5>
                            </li>
                            {techs.map(tech => (
                                <TechItem key={tech.id} tech={tech} />
                            ))}
                        </ul>
                    ) : null}
                </div>

            </div>
        </div>
    );
}

const modalStyle = {
    width: '700px',
}

export default TechListModal;