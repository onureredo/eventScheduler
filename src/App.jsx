import { Route, Routes } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import NoAccess from './pages/NoAccess';
import NotFound from './pages/NotFound';
import ProtectedRoute from './components/ProtectedRoute';
import Register from './components/Register';
import Login from './components/Login';
import Profile from './components/Profile';
import CreateEvent from './components/CreateEvent';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<Home />} />

          <Route path='register' element={<Register />} />
          <Route path='login' element={<Login />} />

          <Route
            path='create-event'
            element={
              <ProtectedRoute>
                <CreateEvent />{' '}
              </ProtectedRoute>
            }
          />

          <Route
            path='profile'
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />

          <Route path='401' element={<NoAccess />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
