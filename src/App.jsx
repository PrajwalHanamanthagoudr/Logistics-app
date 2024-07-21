import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { Grid } from '@mui/material';
import Sidebar from './components/Layout/Sidebar';
import Content from './components/Layout/Content';
import MyMoves from './pages/MyMoves';
import MyProfile from './pages/MyProfile';
import GetQuote from './pages/GetQuote';
import Logout from './pages/Logout';
import Loader from './pages/Loader';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
const App = () => {
  const [movesData, setMovesData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const apiUrl = 'https://api.allorigins.win/raw?url=http://test.api.boxigo.in/sample-data/';

    axios.get(apiUrl)
      .then(response => {
        setMovesData(response.data.Customer_Estimate_Flow);
        setLoading(false);
      })
      .catch(error => {
        console.error('There has been a problem with your axios operation:', error);
        setLoading(false);
      });
  }, []);

  return (
    <Router>
      <Grid container>
        <Grid item xs={1.8}>
          <Sidebar />
        </Grid>
        <Grid item xs={10.2} mt={2} style={{ overflowY: 'auto', height: '100vh' }}>
          {loading ? (
            <>
            <Loader />
            <Content>
              <Routes>
                <Route path="/" element={<Navigate to="/my-moves" />} />
              </Routes>
            </Content>
            </>
          ) : (
            <Content>
              <Routes>
                <Route path="/" element={<Navigate to="/my-moves" />} />
                <Route path="/my-moves" element={<MyMoves movesData={movesData} />} />
                <Route path="/my-profile" element={<MyProfile />} />
                <Route path="/get-quote" element={<GetQuote />} />
                <Route path="/logout" element={<Logout />} />
              </Routes>
            </Content>
          )}
        </Grid>
      </Grid>
    </Router>
  );
};

export default App;
