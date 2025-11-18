import { useEffect, useState } from 'react'
//Cors
import './App.css'
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
      <div>
       <form action="http://localhost:3000/myusers" method="post">
          <input type="text" name="Ip" placeholder="IP cím" />
          <input type="text" name="MAC" placeholder="MAC cím" />
          <input type='number' name='Memoria' placeholder='Memória (GB)' />
          <input type="number" name="Tarhely" placeholder="Tárhely (GB)" />

          <input type="text" name="nicknames" placeholder="Becenév" />
          <button onClick={Newserver} type="submit">Szerver hozzáadása</button>
        </form>
      </div>
    </>
  )
}
async function Newserver() {
  const rest =await fetch('http://localhost:3000/myusers',{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      Ip: (document.querySelector('input[name="Ip"]') as HTMLInputElement).value,
      MAC: (document.querySelector('input[name="MAC"]') as HTMLInputElement).value,
      Memory: parseInt((document.querySelector('input[name="Memoria"]') as HTMLInputElement).value),
      Tarhely: parseInt((document.querySelector('input[name="Tarhely"]') as HTMLInputElement).value),
      nicknames: (document.querySelector('input[name="nicknames"]') as HTMLInputElement).value,
    }),
  });
  const data = await rest.json();
  console.log(data); 
  alert("Szerver hozzáadva!")
}
export default App
