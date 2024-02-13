import './App.css';
import { SignUp } from './components/SignUp';
import { SignIn } from './components/SignIn';
import { Dashboard } from './components/Dashboard';
import { PrivateRoute } from './components/PrivateRoute';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Supplier from './User/Supplier';
import Investor from './User/Investor';
import Buyer from './User/Buyer';
import Admin from './User/Admin';
import ProductAdd from './Products/ProductAdd';
import ProductList from './Products/ProductList';
import ProductEdit from './Products/ProductEdit';
import Aboutus from './About/Aboutus';
import FeedbackAdd from './Feedback/FeedbackAdd';
import FeedbackEdit from './Feedback/FeedbackEdit';
import FeedbackList from './Feedback/FeedbackList';

function App() {
  return (
    
<BrowserRouter>
      <Routes>

      <Route path="/" element={<Dashboard/>}></Route>

      <Route path="/admin" element={<Admin/>}></Route>
      <Route path="/supplier" element={<Supplier/>}></Route>
      <Route path="/investor" element={<Investor/>}></Route>
      <Route path="/buyer" element={<Buyer/>}></Route>

     
        <Route path="/addproduct" element={<ProductAdd/>}></Route>
        <Route path="/viewproduct" element={<ProductList/>}></Route>
        <Route path="/editproduct" element={<ProductEdit/>}></Route>

        <Route path="/addfeedback" element={<FeedbackAdd/>}></Route>
        <Route path="/editfeedback" element={<FeedbackEdit/>}></Route>
        <Route path="/viewfeedback" element={<FeedbackList/>}></Route>

        <Route path="/aboutus" element={<Aboutus/>}></Route>

        <Route path="/signup" element={<SignUp/>}></Route>
        <Route path="/signin" element={<SignIn/>}></Route>

         {/* <Route path="/" element={<RedirectIfLoggedIn><Login/></RedirectIfLoggedIn>}></Route> */}
        {/* <Route path="/dashboard" element={<PrivateRoute><Dashboard/></PrivateRoute>}></Route> */}
       {/* // <Route path="/students-list" element={<PrivateRoute><StudentsList/></PrivateRoute>}></Route> */}
        {/* <Route path="/student-registration" element={<PrivateRoute><StudentRegistrationForm/></PrivateRoute>}></Route> */}
         {/* <Route path="/login" element={<RedirectIfLoggedIn><Login/></RedirectIfLoggedIn>}></Route> */}
        {/* <Route path="/edit/:roll" element={<PrivateRoute><StudentEditForm/></PrivateRoute>}></Route> */}
      </Routes>
    </BrowserRouter>    
   
  );
}

export default App;
