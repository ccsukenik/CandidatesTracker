import React from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import { CandidatesContextComponent } from './CandidatesContext';
import Home from './pages/Home';
import AddCandidate from './pages/AddCandidate';
import PendingCandidates from './pages/PendingCandidates';
import ConfirmedCandidates from './pages/ConfirmedCandidates';
import RejectedCandidates from './pages/RejectedCandidates';
import Details from './pages/Details';

const App = () => {
  
    return (
      <CandidatesContextComponent>
        <Layout>
          <Route exact path='/' component={Home} />
          <Route exact path='/add' component={AddCandidate} />
          <Route exact path='/pending/' component={PendingCandidates} />
          <Route exact path='/confirmed' component={ConfirmedCandidates} />
          <Route exact path='/rejected' component={RejectedCandidates} />
          <Route exact path='/details/:id' component={Details} />
        </Layout>
      </CandidatesContextComponent>
    );
}

export default App;