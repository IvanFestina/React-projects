import {useState} from 'react'

const Users = () => {

    const [users, setUsers] = useState([
        {id: 1, name: 'petya'},
        {id: 2, name: 'vasya'}
    ])

    return (
        <div>
            <h1>User list</h1>
            <ul>
                {users.map(user =>
                    <li>
                        {user.name}
                    </li>
                )}
            </ul>
        </div>
    );
};

export default Users;