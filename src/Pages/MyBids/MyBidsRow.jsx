

const MyBidsRow = ({bid}) => {
    const{_id, title, deadline, ownerEmail} = bid
    return (
        <tr>
              <td>{title}</td>
            <td>{ownerEmail}</td>
            <td>{deadline}</td>
            <td>Pending</td>
            <td><button className="btn btn-outline">Complete</button></td>
        </tr>
          
        
    );
};

export default MyBidsRow;