

import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [users, setUser] = useState([])
  useEffect(() => {
    console.log("Data is Fetching")
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUser(data))
      .catch((error)=>console.log(error))
   
  }, [])

  return (
       <div className="p-4">
      <h1 className="text-xl font-bold mb-2">Users</h1>
      <ul className="list-disc pl-6">
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
