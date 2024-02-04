// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; // Import Routes
import Recomm from './Recomm'; // Ensure the correct path
import BookRecomm from './BookRecomm'; // Ensure the correct path
import './HomePage.css';
import ArticleRecomm from './ArticleRecomm';

const App = () => {
  return (
    <Router>
      <div className="homepage">
        <div className="button movie">
          {/* Link to the movie recommendation page */}
          <Link to="/Recomm">Movie Recommendation</Link>
        </div>

        <div className="button Book">
          <Link to="/BookRecomm">Book recommendations</Link>
        </div>

       
        <div className="button Articles">
          <Link to="/ArticleRecomm">Article recommendations</Link>
        </div>

        
        {/* Use Routes to define routes */}
        <Routes>
          <Route path="/Recomm" element={<Recomm />} />
          <Route path="/BookRecomm" element={<BookRecomm />} />
          <Route path="/ArticleRecomm" element ={<ArticleRecomm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
