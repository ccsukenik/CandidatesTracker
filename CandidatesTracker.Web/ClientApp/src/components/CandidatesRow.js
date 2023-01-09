import React from "react";
import { Link } from "react-router-dom";

const CandidatesRow = ({candidate, isPending}) => {

    const {id, firstName, lastName, email, telephoneNumber, notes} = candidate;
    
    return(
    <tr>
        { isPending &&<td><Link to={`/details/${id}`}>Details</Link></td> }
        <td>{firstName}</td>
        <td>{lastName}</td>
        <td>{email}</td>
        <td>{telephoneNumber}</td>
        <td>{notes}</td>
    </tr>)
}

export default CandidatesRow;