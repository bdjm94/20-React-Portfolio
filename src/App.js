import React from 'react';
import Nav from './components/nav/nav';
import NavComp from './components/navcomp/navcomp';
import { BrowserRouter, HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import About from './components/views/about/about';
import Portfolio from './components/views/portfolio/portfolio';
import Skills from './components/views/skills/skills';
import Contact from './components/views/contact/contact';
import Footer from './components/footer/footer';
import Content from './components/content/content';
import './App.css';

function App() {
  return (
<HashRouter>
  <div className='App'>
    <Nav>
      <NavComp exact destination='about' />
      <NavComp destination='portfolio' />
      <NavComp destination='skills' />
      <NavComp destination='contact' />
    </Nav>
    <Content>
      <Switch>
        <Route path='/about' exact component={About} />
        <Route path='/portfolio' exact component={Portfolio} />
        <Route path='/skills' exact component={Skills} />
        <Route path='/contact' exact component={Contact} />
        <Redirect to='/about' />
      </Switch>
    </Content>
  </div>
  <Footer />
</HashRouter>
  );
}

export default App;
