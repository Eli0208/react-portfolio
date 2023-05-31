import React from 'react';
import {
  ChakraProvider,
  Box,
  theme,
} from '@chakra-ui/react';
import Header from './components/Header'
import './app.css'
import Landing from './pages/Landing';
import Footer from './components/Footer';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects';
import ContactMe from './pages/ContactMe';


function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box
        h='100vh'
        w='100%'
        color='#8ec044'
      >
        <Router>
          <Header />
            <Routes>
              <Route path='/' element={<Landing />} />
              <Route path='/aboutme' element={<AboutMe />} />
              <Route path='/projects' element={<Projects />} />
              <Route path='/contact' element={<ContactMe />} />
            </Routes>
          <Footer />
        </Router>
      </Box>
    </ChakraProvider>
  );
}

export default App;
