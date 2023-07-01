import React from 'react';
import { NavLink, Link, Outlet} from 'react-router-dom'

const Home1 =()=>{
    return(
    <div className="container">
        <div className="d-flex align-items-start" style={{marginTop:20}}>
            <div className="nav flex-column nav-pills"id="v-pills-tab" role="tablist" aria-orientation="vertical" style={{backgroundColor:'lightgrey',height:'300px',width:'120px'}}>
             <Link to={'account'}>Account Info</Link>
             <Link to={'personal'}>Personal Info</Link>
            </div>
            <div className="tab-content" id='v-pills-tabContent'>
                <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab" tabIndex="0" style={{width:550}}>
                    <Outlet/>
                </div>
            </div>
        </div>

    </div>
    )
}
export default Home1;