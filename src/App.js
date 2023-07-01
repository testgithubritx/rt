//1
// import  Home from './Routing/Pages/Home.jsx';
// import About from './Routing/Pages/About.jsx';
// import Profile from './Routing/Pages/Profile.jsx';
// import Errors from './Routing/Pages/Errors.jsx';
// import  Register from  './Routing/Pages/Register.jsx'
// import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
// function App(){
//   return(
//   <>
//     <Router>
//       <div className="container">
//         <nav className="navbar navbar-dark bg-dark">
//           <Link to="/">Home</Link>
//           <Link to="/about">About</Link>
//           <Link to="/user_profile">Profile</Link>
//           <Link to="/register">Register</Link>
          
//         </nav>
//       </div>
//       <Routes>
//         <Route path="/" element={<Home/>} />
//         <Route path="/about" element={<About/>} />
//         <Route path="/user_profile" element={<Profile/>} />
//         <Route path="/register" element={<Register/>}/>
//         <Route path="*" element={<Errors/>} />
//       </Routes>
//     </Router>
//        </>
//   )
// }
// export default App;



//2
// import './App.css'
// import ReactWbsedcl from './reactCss/ReactWbsedcl.jsx';
// function App(){
//   return(
//     <>
//     <ReactWbsedcl />
//     </>
//   )
// }
// export default App;


//3
// import  Home from './Routing/Pages/Home.jsx';
//  import About from './Routing/Pages/About.jsx';
//  import Profile from './Routing/Pages/Profile.jsx';
//  import Errors from './Routing/Pages/Errors.jsx';
//  import  Register from  './Routing/Pages/Register.jsx'
//  import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
//  function App(){
//    return(
//    <>
//      <Router>

//        <div className="container">
//        <nav className="navbar navbar-expand-lg navbar-light bg-primary t">
  
//   <div className="collapse navbar-collapse" id="navbarNav">
//     <ul className="navbar-nav">
//       <li className="nav-item active">
//         <Link to="/" className="nav-link text-light" >Home <span class="sr-only">(current)</span></Link>
//       </li>
//       <li class="nav-item">
//         <Link to="/about" className="nav-link text-light" >Phone</Link>
//       </li>
//       <li className="nav-item">
//         <Link to="/user_profile" className="nav-link text-light">Laptop</Link>
//       </li>
//       <li className="nav-item">
//         <Link to="/register" className="nav-link  text-light ">Register</Link>
//       </li>
//     </ul>
//     <form className="form-inline my-2 my-lg-0 rounded mx-auto d-block ">
//       <input className="form-control mr-sm-2 rounded-pill" type="search" placeholder="Search" aria-label="Search"/>
//       <button className="btn btn-secondary my-2 my-sm-0 rounded-circle" type="submit"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
//   <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
// </svg></button>
//     </form>
//   </div>
// </nav>


//        </div>
//        <Routes>
//          <Route path="/" element={<Home/>} />
//          <Route path="/about" element={<About/>} />
//          <Route path="/user_profile" element={<Profile/>} />
//          <Route path="/register" element={<Register/>}/>
//          <Route path="*" element={<Errors/>} />
//         </Routes>

//      </Router>
    
//    </>
//    )
//  }
//  export default App;



//4
//nested routing
import Home1 from './Routing/Pages/Home1.jsx';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

import Accounting_Details from './Routing/Pages/Accounting_Details';
import Personal_Details from './Routing/Pages/Personal_Details';

function App(){
  return(
      <>
       <Router>
        <div className='container'>
          <nav className="navbar navbar-dark bg-dark">
            <Link to="/home1">Home1</Link>
          </nav>
          </div>
          <Routes>
            <Route path="/home1" element={<Home1/>}>
               <Route index element={<Accounting_Details />}/>
               <Route path="account" element={<Accounting_Details />}/>
               <Route path="personal" element={<Personal_Details />}/>
            </Route>
            
          </Routes>
       </Router>
       </>
  )

}
export default App;
