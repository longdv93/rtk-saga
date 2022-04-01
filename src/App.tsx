
import './App.css';
import { Route, Switch } from 'react-router-dom';
import LoginPage from 'features/auth/pages/Loginpage';
import { AdminLayout } from 'components/Layout';
import { NotFound, PrivateRouter } from 'components/common';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/login'>
          <LoginPage />
        </Route>
        <PrivateRouter path='/admin'>
          <AdminLayout />
        </PrivateRouter>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
