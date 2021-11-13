import React, { useEffect } from 'react';
import LogItem from './LogItem';
import { connect } from 'react-redux';
import { getLogs } from '../../actions/logActions';
import Preloader from '../layout/Preloader';
const Logs = ({ log: { logs, loading }, getLogs }) => {

    useEffect(() => {
        getLogs();
        // eslint-disable-next-line
    }, []);

    if (loading) {
        return <Preloader />;
    }

    return (
        <div className="logs">
            {!loading && logs.length > 0 ? (
                <ul className="collection with-header">
                    <li className="collection-header">
                        <h5 className="text-h3 m-0 p-2 center-align">System Logs</h5>
                    </li>
                    {logs.map(log => (
                        <LogItem log={log} key={log.id} />
                    ))}
                </ul>
            ) : null}
        </div>
    );
}
const mapStateToProps = state => ({
    log: state.log,
});
export default connect(mapStateToProps, {
    getLogs
})(Logs);

