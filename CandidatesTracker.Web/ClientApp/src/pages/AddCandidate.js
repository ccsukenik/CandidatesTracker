import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import axios from 'axios';
import { useCandidatesCount } from "../CandidatesContext";

const AddCandidate = () => {

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        telephoneNumber: '',
        notes: ''
    })

    const history = useHistory();
    const {updateCounts} = useCandidatesCount();

    const onTextChange = e => {
        const copy = { ...formData };
        copy[e.target.name] = e.target.value;
        setFormData(copy);
    }

    const onSubmitClick = async e => {
        e.preventDefault();
        await axios.post('/api/home/addcandidate', formData);
        updateCounts();
        history.push('/');
    }

    return(
        <div>
            <form>
            <div className="col-md-6 mx-auto card card-body bg-light">
                <h3 className="text-center">Add Candidate</h3>
                <input onChange={onTextChange} className="form-control mb-2" type='text' placeholder="First Name" name="firstName" value={formData.firstName} />
                <input onChange={onTextChange} className="form-control mb-2" type='text' placeholder="Last Name" name="lastName" value={formData.lastName} />
                <input onChange={onTextChange} className="form-control mb-2" type='text' placeholder="Email" name="email" value={formData.email} />
                <input onChange={onTextChange} className="form-control mb-2" type='text' placeholder="Phone Number" name="telephoneNumber" value={formData.telephoneNumber} />
                <textarea onChange={onTextChange} value={formData.notes} name="notes" placeholder="Notes" className="form-control mb-5 mt-3" rows="10"></textarea>
                <button className="btn btn-primary" onClick={onSubmitClick}>Submit</button>
            </div>
            </form>
        </div>
    )
}

export default AddCandidate;