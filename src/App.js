import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Users from "./components/Users";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Search from "./components/Search";

function App() {
  const [users, setUsers] = useState([]);
  const [showClear, setshowClear] = useState(false);
  // useEffect(async () => {
  //   //axios always returns promise --> asynchronus operation
  //   const res = await axios.get("https://api.github.com/users");
  //   setUsers(res.data);
  // }, []);

  const searchName = async (name) => {
    const res = await axios.get("https://api.github.com/users?q=${name}");
    setUsers(res.data.items);
    setshowClear(!showClear);
  };

  const clearUsers = () => {
    setUsers([]);
  };

  return (
    <Router>
      <Navbar />

      <div className="container">
        <Search
          searchName={searchName}
          showClear={showClear}
          clearUsers={clearUsers}
        />
        <Users users={users} />
        <Route exact path="/about" component={About} />
      </div>
    </Router>
  );
}

export default App;
