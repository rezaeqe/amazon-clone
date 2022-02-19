import React, { useEffect } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Checkout from './components/Checkout';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from './components/Login';
import { auth } from './components/firebase';
import { useStateValue } from './components/StateProvider';
import Payment from './components/Payment';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from './components/Orders';

const promise = loadStripe(
  "pk_test_51KQAYOL82cOpVnt33MlAacu18sP36gJv1Hkpiao1ir3YURAESdmIveT56yIk3CSzbvrjMAaIk3mLb4LuGgC7IS9700AZdJeOYe"
);

const App = () => {

  const [{ basket, user }, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser
        });
      }
      else {
        dispatch({
          type: "SET_USER",
          user: null
        });
      }
    })
  }, []);

  return (
    <div>
      <Router>

        <Routes>

          <Route path="/"
            element={
              <>
                <Header/>
                <Home/>
              </>}
          />

          <Route path="/orders"
            element={
              <>
                <Header/>
                <Orders/>
              </>}  
          />
          
          <Route path="/checkout"
            element={
              <>
                <Header/>
                <Checkout/>
              </>}  
          />

          <Route path="/payment"
            element={
              <>
                <Header/>
                <Elements stripe={promise}>
                  <Payment/>
                </Elements>
              </>}  
          />

          <Route path="/login"
            element={
              <>
                <Login/>
              </>
            } 
          />       

        </Routes>

      </Router>
    </div>

  )
}

export default App
