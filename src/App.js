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
          <Route path="/catalog/asset_id=1ae30201adsz1" exact component={Client1} />
          <Route path="/catalog/asset_id=5ea910zeo2010" exact component={Client2} />
          <Route path="/catalog" exact component={Asset_list} />
        </div>
      </div>
      
    </Router>
  );
}

export default App;
