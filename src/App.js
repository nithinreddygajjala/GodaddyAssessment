import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import RepositoryDetail from './RepositoryDetail';
import RepositoryList from './RepositoryList';
import github_url from './constants.js';
import './App.css';

function App() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    // fetch data fetches data from external Url
    const fetchData = async () => {
      const response = await fetch(github_url);
      const data = await response.json();
      setRepos(data);
    };

    fetchData();
  }, []);

  return (
    <Router>
      <div className="AppContainer">
        <h1>GitHub Repositories</h1>
        {/* Routes handles the routing based on repo Id */}
        <Routes>
          <Route path="/" element={<RepositoryList repos={repos} />} />
          <Route path="/:id" element={<RepositoryDetail repos={repos} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
