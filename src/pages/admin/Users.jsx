import {URLs , useEffect , useState } from  '../../exporter'
export const Users = () => {
  const url = URLs().Users;
  const [users,setUsers] = useState([]);
  const fetchUsers = async () => {
    const response = await fetch(url, {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const datausers = await response.json();
    const users = await datausers.users;
    setUsers(users);
  };
  useEffect(() => {
    fetchUsers();
  });
  const Users = () => {
    return (
      users.map((user) =>(
        <div key={user._id}>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
      ))
    )
  }
  return (
    <Users/>
  )
}
