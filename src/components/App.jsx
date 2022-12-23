import { Navigate, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { Layout } from './pages/Layout/Layout';
import { Movies } from './pages/Movies/Movies';
import { NotFound } from './pages/NotFound/NotFound';
import { Container, Header, Link } from "./App.syled";




export const App = () => {
  return (
    <div>
          <Container>
      <Header>
      <nav>
        {/* <Link to="/" >Home</Link> */}
        <Link to="/home" >Home</Link>
        <Link to="/movies">Movies</Link>
      </nav>
      </Header>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element = {<Navigate to="home"/>}/>
      
          <Route path="/home" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      </Container>
    </div>
  );
};



      // / layaut
      // / Home
      //   -Tranding Today  Api /trending/get-trending)
      // / Movies
      //   /Search 
          //  Api search/search-movies
      //    /movie Api movies/get-movie-details 
      //      /Cast  Api /movies/get-movie-credits
      //      /rewies Api /movies/get-movie-reviews
           // button goback (home)
