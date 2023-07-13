import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const App = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const response = await axios.get('http://localhost:5000/menu');
      setMenu(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/menu">Menu</Link>
            </li>
            <li>
              <Link to="/order">Place Order</Link>
            </li>
          </ul>
        </nav>

        <Route
          exact
          path="/"
          render={() => (
            <div>
              <h1>Welcome to the Food Ordering System</h1>
            </div>
          )}
        />

        <Route
          path="/menu"
          render={() => (
            <div>
              <h2>Menu</h2>
              {menu.map((dish) => (
                <div key={dish.id}>
                  <h3>{dish.name}</h3>
                  <p>{dish.description}</p>
                  <p>Price: ${dish.price}</p>
                  <img src={dish.image} alt={dish.name} />
                </div>
              ))}
            </div>
          )}
        />

        <Route
          path="/order"
          render={() => (
            <div>
              <h2>Place Order</h2>
              {/* Order placement form goes here */}
            </div>
          )}
        />
      </div>
    </Router>
  );
};

export default App;
