// src/App.jsx
//import { useState, useEffect } from "react";
//import Login from "./components/Login.jsx";
//import NoteForm from "./components/NoteForm.jsx";

// const storedUser = localStorage.getItem("user");
//  if (storedUser) {
//   setUser(JSON.parse(storedUser));
//  }
//  }, []);

// };

// return <div>{user ? <NoteForm /> : <Login onLogin={handleLogin} />}</div>;
//}

//export default App;
//--------------------------
// App.jsx
import { useState, useEffect } from "react";
import Login from "./components/Login.jsx"; // Correctly importing the default export
import NoteForm from "./components/NoteForm.jsx"; // Assuming NoteForm is also default-exported

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogin = (userData) => {
    setUser(userData);
  };

  return <div>{user ? <NoteForm /> : <Login onLogin={handleLogin} />}</div>;
}

export default App;
