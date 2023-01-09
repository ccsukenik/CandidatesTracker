import React, {useState, useEffect} from "react";
import axios from 'axios';
import CandidatesRow from "../components/CandidatesRow";

const ConfirmedCandidates = () => {

    const [candidates, setCandidates] = useState([]);
  
    useEffect(() => {

        const getCandidates = async () => {
            const {data} = await axios.get('/api/home/getcandidates?status=confirmed');
            setCandidates(data);
        }

        getCandidates();

    }, []);

    return(<div>
        <h1 className="text-center">Confirmed Candidates</h1>

        <table className="table table-bordered table-striped table-hover">
<thead>
    <tr>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Email</th>
        <th>Phone Number</th>
        <th>Notes</th>
    </tr>
</thead>
<tbody>
       {candidates && candidates.map(c => 
       <CandidatesRow key={c.id} candidate={c} isPending={false}/>)}
</tbody>
        </table>
    </div>)
}

export default ConfirmedCandidates;