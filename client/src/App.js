import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
// import Layout from './layout/Layout';
// import FAssets from './pages/FunAssets/FAssets';
// import Home from './pages/home/Home';
import React, { Suspense } from 'react';
import ScrollTp from './components/ScrollTp/ScrollTp';

const Home = React.lazy(() => import("./pages/home/Home"))
const Layout = React.lazy(() => import("./layout/Layout"))
const FAssets = React.lazy(() => import("./pages/FunAssets/FAssets"))

function App() {
  return (
   <>
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Suspense fallback={<h1>Loading...</h1>} >
      <Home/>
    </Suspense>} />
    <Route path='/assets' element={<Suspense fallback={<h1>Loading...</h1>} ><Layout/></Suspense>} >
    <Route path='/assets' element={<Suspense fallback={<h1>Loading...</h1>} ><FAssets/></Suspense>} />
    </Route>
   </Routes>
    <ScrollTp/>
   </BrowserRouter>
   </>
  );
}

export default App;
