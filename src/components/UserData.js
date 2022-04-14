import React from 'react';

function userData({ firstName, email, gender, address, bio }) {
	return (
		<table className="table">
			<thead>
				<tr>
					<th scope="col">first name</th>
					<th scope="col">email</th>
					<th scope="col">email </th>
					<th scope="col">address</th>
					<th scope="col">bio</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<th scope="row">1</th>
					<td>{firstName} </td>
					<td>{email} </td>
					<td>{gender} </td>
					<td>{address} </td>
					<td>{bio} </td>
				</tr>
			</tbody>
		</table>
	);
}

export default userData;