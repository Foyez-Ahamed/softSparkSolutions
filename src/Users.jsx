import { useEffect, useState } from "react"

export default function Users() {

    // state declare for hold all users //
    const [users, setUsers] = useState([]);

    useEffect( () => {

        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUsers(data));

    } , []);


    return(
        <>

        <div style={ {maxWidth: '70%', margin: '50px auto', padding: '20px'}}  className="text-center  border border-red-700 rounded-md">

         <div>
            <h1 className="font-bold">All Users : {users.length}</h1>
         </div>

         <div className="mt-5">

          {
             users.map( user =>  <div className="space-y-3 p-4 border rounded-md shadow-md" key={user?.id}>
                <h1>Name : {user?.name}</h1>
                <p>Email : {user?.email}</p>
                <p>StreetName : {user?.address?.street}</p>
                </div>)
          }

         </div>

        </div>
         

        </>
    )
}