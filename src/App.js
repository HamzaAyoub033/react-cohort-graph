import './App.css';
import Cohort from './components/cohert';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Route and Routes
import CohortGraph from './CohortGraph';

function App() {
  return (
    <Router>
   
    <Routes> {/* Use Routes component to define your routes */}
      <Route path='/' element={<Cohort />} /> {/* Use "element" prop */}
      <Route path='/cohortgraph' element={<CohortGraph />} /> {/* Use "element" prop */}

    </Routes>
  </Router>
  );
}

export default App;
