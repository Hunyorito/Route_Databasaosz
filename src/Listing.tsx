import { useEffect, useState } from "react";
 
interface Server {
  id: number;
  ip: string;
  mac: string;
  memory: number;
  storage: number;
  nickname?: string;
}
 
 
export function Listing() {
  const [data, setData] = useState<Server[]>([]);
 
  function getServers(){
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/servers");
        setData(await response.json());
        console.log("Listing data:", data);
      } catch (error) {
        console.error("Error fetching listing data:", error);
      }
    };
    fetchData();
}
 
  useEffect(() => {
   
    document.title = "Listing Page";
    console.log("Listing page loaded");
    console.log("Fetching listing data...");
    getServers();
   
  }, []);
 
 
 
 
  return (
    <>
      <div className="fast-server-listing">
        {data.map((server) => (
          <div key={server.id} className="server-card">
            <h2>{server.nickname || "No Nickname"}</h2>
            <p>
              <strong>IP Address:</strong> {server.ip}
            </p>
            <p>
              <strong>MAC Address:</strong> {server.mac}
            </p>
            <p>
              <strong>Memory:</strong> {server.memory} GB
            </p>
            <p>
              <strong>Storage:</strong> {server.storage} GB
            </p>
           
            <button
              className="delete-button"
              onClick={async () => {
                const res = await fetch(`http://localhost:3000/servers/${server.id}`, {
                  method: "DELETE",
                  headers: {
                    "Content-Type": "application/json",
                  },
                 
                });
                await res.json();
                await getServers();
              }}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
