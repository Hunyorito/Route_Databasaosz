export function Newserver() {
    
  return(<div>
       <form action="http://localhost:3000/myusers" method="post">
          <input type="text" name="Ip" placeholder="IP cím" />
          <input type="text" name="MAC" placeholder="MAC cím" />
          <input type='number' name='Memoria' placeholder='Memória (GB)' />
          <input type="number" name="Tarhely" placeholder="Tárhely (GB)" />

          <input type="text" name="nicknames" placeholder="Becenév" />
          <button onClick={Newserver2} type="submit">Szerver hozzáadása</button>
        </form>
      </div>
  )
}
async function Newserver2() {
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