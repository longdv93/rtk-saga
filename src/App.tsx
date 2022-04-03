
import './App.css';
import { Route, Switch } from 'react-router-dom';
import LoginPage from 'features/auth/pages/Loginpage';
import { AdminLayout } from 'components/Layout';
import { NotFound, PrivateRouter } from 'components/common';
import { Button } from '@material-ui/core';
import { useAppDispatch } from 'app/hooks';
import { authActions } from 'features/auth/authSlice';

function App() {
  const dispath = useAppDispatch();
  return (
    <div className="App">
      <Button variant='contained' color='primary' onClick={()=>dispath(authActions.logout())}>logout</Button>
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
