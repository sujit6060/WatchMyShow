import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import "./Components/Header/Header.css";
import MainNav from './Components/MainNav';
import Container from '@mui/material/Container';
import Trending from './Pages/Trending/Trending'
import Movies from './Pages/Movies/Movies'
import Series from './Pages/Series/Series'
import Search from './Pages/Search/Search'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="App">
        <Container>
          <Switch>
            <Route path="/" exact> <Trending /> </Route>
            <Route path="/movies"> <Movies /> </Route>
            <Route path="/series"> <Series /> </Route>
            <Route path="/search" > <Search /> </Route>
          </Switch>
        </Container>
      </div>
      <MainNav />
    </BrowserRouter>
  );
}

export default App;
