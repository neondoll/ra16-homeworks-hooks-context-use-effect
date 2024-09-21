import Details from "./components/Details.jsx";
import List from "./components/List.jsx";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [activeUser, setActiveUser] = useState();
  const [users, setUsers] = useState([]);

  const handleItemClick = (item) => {
    setActiveUser(item);
  };

  useEffect(() => {
    fetch(import.meta.env.VITE_BACKEND_URL + "/users.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }

        return response.json();
      })
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <List items={users} onItemClick={handleItemClick} />
      <Details info={activeUser} />
    </>
  );
}

export default App;
