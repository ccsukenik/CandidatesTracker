import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { useCandidatesCount } from "../CandidatesContext";
import axios from "axios";

const Details = () => {

    const {id} = useParams();

    const [candidate, setCandidate] = useState('');

    const {updateCounts} = useCandidatesCount();
    const history = useHistory();

    useEffect(() => {

        const getCandidate = async () => {
            const {data} = await axios.get(`/api/home/getcandidate?id=${id}`);
            setCandidate(data);
        }

        getCandidate();
    }, []);

    const onConfirmClick = async () => {
        await axios.post('api/home/confirmcandidate', candidate);
        updateCounts();
        history.push('/confirmed');
    }

    const onRejectClick = async () => {
        await axios.post('api/home/rejectcandidate', candidate);
        updateCounts();
        history.push('/rejected');
    }

    return(
        <div className='container'>
            <h1 className="text-center">Details for {candidate.firstName} {candidate.lastName}</h1>
        <div className='row'>
            <div className='col-md-6 offset-md-3'>
                <div className='card card-body bg-light'>
                    <h4>First Name: {candidate.firstName}</h4>
                    <h4>Last Name: {candidate.lastName}</h4>
                    <h4>Email: {candidate.email}</h4>
                    <h4>Phone Number: {candidate.telephoneNumber}</h4>
                    <h4>Notes: {candidate.notes}</h4>
                </div>

               
                    <div><button className='btn btn-danger ' onClick={onRejectClick}>Reject</button>
                        <button className='btn btn-primary ' onClick={onConfirmClick}>Confirm</button></div>


            </div>
        </div>
    </div>
    )
}

export default Details;