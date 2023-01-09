import React from 'react';
import { Link } from 'react-router-dom';
import { useCandidatesCount } from '../CandidatesContext';

const Layout = (props) => {

    const {counts} = useCandidatesCount();

    return (
        <div>
            <nav className="navbar navbar-expand-sm navbar-dark fixed-top bg-dark border-bottom box-shadow">
                <div className="container">
                    <Link className="navbar-brand" to="/">Candidates Tracker</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbar-collapse"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="navbar-collapse collapse d-sm-inline-flex justify-content-between">
                        <ul className="navbar-nav flex-grow-1">   
                                <li className="nav-item">
                                    <Link className="nav-link text-light" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-light" to="/add">Add Candidate</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-light" to="/pending">Pending ({counts.pendingCount})</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-light" to="/confirmed">Confirmed ({counts.confirmedCount})</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-light" to="/rejected">Rejected ({counts.rejectedCount})</Link>
                                </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div className="container" style={{ marginTop: 60 }}>
                {props.children}
            </div>

        </div >
    )
}

export default Layout;
