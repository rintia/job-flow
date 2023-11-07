

const MyBidsRow = ({bid, handleComplete}) => {
    const{_id, title, deadline, ownerEmail, status} = bid

    
    return (
        <tr>

              <td>{title}</td>
            <td>{ownerEmail}</td>
            <td>{deadline}</td>
            {
                status === 'reject' ? <td className="text-error font-semibold">Canceled</td>
                : status === 'complete' ? <td className="text-success font-semibold">Completed</td>
                : status === 'accept' ? <td className="text-accent">In Progress</td>
                : <td className="text-warning">Pending</td>
            }
            {
                status === 'complete' ? <td></td>
                :status === 'accept' ?  <td><button onClick={()=>handleComplete(_id)} className="btn btn-sm rounded-full bg-[#009E60] text-light hover:text-dark">Complete</button></td>
                : <td></td>
            }
           
        </tr>
          
        
    );
};

export default MyBidsRow;