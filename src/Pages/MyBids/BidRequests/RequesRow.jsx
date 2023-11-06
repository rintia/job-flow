import React from 'react';

const RequesRow = ({req}) => {
    const{_id, title, deadline, userEmail, price} = req
    return (
        <tr>
        <td>{title}</td>
      <td>{userEmail}</td>
      <td>{deadline}</td>
      <td>{price}</td>
      <td>Pending</td>
      <td>
        <button className="btn btn-outline">Accept</button>
        <button className="btn btn-outline">Reject</button>
      </td>
  </tr>
    );
};

export default RequesRow;