import React, { useState, useEffect } from 'react';
import LogItem from './LogItem';
const Logs = (props) => {
    const [logs, setLogs] = useState([

    ]);

    const [loading, setLoading] = useState(false);

    const getLogs = async () => {
        setLoading(true);
        const res = await fetch('/logs');
        const data = await res.json();
        setLogs(data);
        setLoading(false);
    }

    useEffect(() => {
        getLogs();
        // eslint-disable-next-line
    }, []);
    return (
        <div className="logs">
            {!loading && logs.length > 0 ? (
                <ul className="collection with-header">
                    <li className="collection-header">
                        <h5 className="text-h3 m-0 p-2">System Logs</h5>
                    </li>
                    {logs.map(log => (
                        <LogItem log={log} key={log.id} />
                    ))}
                </ul>
            ) : null}
        </div>
    );
}

export default Logs;

