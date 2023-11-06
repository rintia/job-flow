import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const BidForm = ({job}) => {
    const{_id, title, email, category} =job;
    const {user} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleAddBid = e =>{
        e.preventDefault();

        const form = e.target;

        const userEmail = form.userEmail.value;
        const ownerEmail = form.ownerEmail.value;
        const price = form.price.value;
        const deadline = form.deadline.value;

        const newBid = {userEmail, ownerEmail, title, category, deadline, price};
        console.log(newBid);

        fetch('http://localhost:5000/bids', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newBid)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)

                if(data.insertedId){
                    Swal.fire({
                        title: 'Success!',
                        text: 'Job Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'OK',
                        
                      })
                   
                      
                    // form.reset()
                    
                }
             
            })
    }
        return (
            <div className=" p-24">
            <h2 className="text-3xl text-dark mb-12 font-extrabold text-center">Place Your Bid</h2>
            <form onSubmit={handleAddBid}>

                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text ">Your Email</span>
                        </label>
                        <label className="input-group">
                            <input readOnly type="email" name="userEmail" defaultValue={user.email} placeholder="Product Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 md:ml-4">
                        <label className="label">
                            <span className="label-text ">Job Owner's Email</span>
                        </label>
                        <label className="input-group">
                            <input readOnly type="email" name="ownerEmail" defaultValue={email} placeholder="Product Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    
                </div>

                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text ">Deadline</span>
                        </label>
                        <label className="input-group">
                            <input type="date" name="deadline" placeholder="Deadline" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 md:ml-4">
                        <label className="label">
                            <span className="label-text ">Price</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="price" placeholder="Price" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>

              {
                email === user.email ? 
                <input disabled type="submit" value="Place Your Bid" className=" btn btn-block bg-dark text-light hover:bg-brown" />
                :  <input type="submit" value="Place Your Bid" className=" btn btn-block bg-dark text-light hover:bg-brown" />
              }
              
             

               

            </form>
        </div>
    );
};

export default BidForm;