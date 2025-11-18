import { useEffect, useState } from 'react'
//Cors
import './App.css'
import { Newserver } from './New'
import { Listing } from './Listing'
/*interface User {
  id: number
  uername: string
  bristhday?: string
  nicknames: string

}*/
interface Server {
  id: number
  Ip: string
  MAC : string
  Memory: number
  Tarhely :number
  nicknames?: string
}

function App() {
  const [user, setUser] = useState<Server[]>([])

  useEffect(() => {
    async function fetchUser() {
      const response = await fetch('http://localhost:3000/myusers')
      const data: Server[] = await response.json()
      setUser(data)
    }
    fetchUser()
  }, [])
  return (
    <>
      <div>
        <p>{user.toString()}</p>
        <p> Szerverek száma: {user.length} </p>
        <ul>
          {user.map((u) => (
            <li key={u.id}>
              {u.nicknames} {u.Ip} - {u.MAC} - {u.Tarhely} GB
            </li>
          ))}
        </ul>
      </div>
      <Listing />
      
      
    </>
  )
}

  

export default App
