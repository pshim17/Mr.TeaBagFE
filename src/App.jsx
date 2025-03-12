import './App.css';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar/Navbar.jsx'
import TeaSubscriptionsContainer from './components/TeaSubscriptionsContainer/TeaSubscriptionsContainer.jsx'
import TeaSubscriptionCardDetails from './components/TeaSubscriptionCardDetails/TeaSubscriptionCardDetails.jsx';

function App() {
  const [teaSubscriptions, setTeaSubscriptions] = useState([]);

  function getTeaSubscriptions() {
    fetch("http://localhost:3000/api/v1/subscriptions")
    .then(response => response.json())
    .then(data => {
      setTeaSubscriptions([...data.data])
    })
    .catch(error => console.log('error message: ', error.message))
  }

  useEffect(() => {
    getTeaSubscriptions();
  }, [])

  return (
    <main className="App">
      <Navbar teaSubscriptions={teaSubscriptions} setTeaSubscriptions={setTeaSubscriptions} />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<TeaSubscriptionsContainer teaSubscriptions={teaSubscriptions} />}/>
          <Route path="/:teaSubscriptionId" element={<TeaSubscriptionCardDetails  />} />
        </Routes>
      </div>
    </main>
  );
}

export default App;
