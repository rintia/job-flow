import React from 'react';

const RequesRow = ({ req, handleAccept, handleReject }) => {
    const { _id, title, deadline, userEmail, price, status, progress } = req;
    return (
        <tr>
            <td>{title}</td>
            <td>{userEmail}</td>
            <td>{deadline}</td>
            <td>${price}</td>
            {   
                progress === 'complete' ? <td className='text-success font-semibold'>Completed</td>
                :status === 'accept' ? <td>In Progress</td>
                    : status === 'reject' ? <td className='text-[#FF0000] font-semibold'>Rejected</td>
                        : <td className='text-[#8B8000]'>Pending</td>
            }
            {   
                progress === 'complete' ? <td><progress className="progress progress-accent w-56" value="100" max="100"></progress></td>
                :status === 'accept' ? <td><progress className="progress progress-accent w-56" value="40" max="100"></progress></td>
                : status === 'reject' ? <td></td>
                    : <td className='flex gap-4'>

                        <button onClick={() => handleAccept(_id)} className="btn btn-success rounded-full text-light">Accept</button>
                        <button onClick={() => handleReject(_id)} className="btn btn-error rounded-full text-light">Reject</button>
                    </td>
            }

        </tr>
    );
};

export default RequesRow;