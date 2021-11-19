import Navbar from './Components/Navbar/Navbar'
import Sidebar from './Components/Sidebar/Sidebar'
import Dashboard from './Components/Dashboard/Dashboard'
import Prediction from './Components/Prediction/Prediction'
import Client1 from './Components/Clients/Client1'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="mainScreen">
        <Sidebar />
        <div className="contents">
          <Route path="/dashboard" exact component={Dashboard} />
          <Route path="/prediction" exact component={Prediction}/>
          <Route path="/dashboard/prediction/1024" exact component={Client1} />
        </div>
      </div>
      
    </Router>
  );
}

export default App;
