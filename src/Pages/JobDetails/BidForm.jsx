import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { useNavigate } from "react-router-dom";


const BidForm = ({job}) => {
    const{_id, title, email, category, deadline, maxPrice, minPrice, descrpition} =job;
    const {user} = useContext(AuthContext);
    const navigate = useNavigate();
        return (
            <div className=" p-24">
            <h2 className="text-3xl text-dark mb-12 font-extrabold text-center">Place Your Bid</h2>
            <form>

                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text ">Your Email</span>
                        </label>
                        <label className="input-group">
                            <input readOnly type="email" name="email" defaultValue={user.email} placeholder="Product Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 md:ml-4">
                        <label className="label">
                            <span className="label-text ">Job Owner's Email</span>
                        </label>
                        <label className="input-group">
                            <input readOnly type="email" name="email" defaultValue={email} placeholder="Product Name" className="input input-bordered w-full" />
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
                            <input type="text" name="minPrice" placeholder="Price" className="input input-bordered w-full" />
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