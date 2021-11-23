import Navbar from './Components/Navbar/Navbar'
import Sidebar from './Components/Sidebar/Sidebar'
import Dashboard from './Components/Dashboard/Dashboard'
import Prediction from './Components/Prediction/Prediction'
import Client1 from './Components/Clients/Client1'
import Client2 from './Components/Asset_Not_Approved/Client2'
import Asset_list from './Components/Asset_List/Asset_list'
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
          <Route path="/catalog/asset_id=1ee6388b-25b2-48b1-9f20-0d144e7275df" exact component={Client1} />
          <Route path="/catalog/asset_id=7d698965-f2f0-4338-af48-41758dbe87a0" exact component={Client2} />
          <Route path="/catalog" exact component={Asset_list} />
        </div>
      </div>
      
    </Router>
  );
}

export default App;
