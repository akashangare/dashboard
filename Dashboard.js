import React, { Component } from "react";
import linechart from './linechart.png'
import './Dashboard.css';
class Dashboard extends Component {
  render() {
      return(
       <div>
          <header>
            <h1>LOGO</h1>
          </header>
        <div id ="left" className="img" class="img" > 
          <img src={linechart} alt='linechart' 
              style={{width: 652, height: 450, position: 'absolute', top: this.props.top, left: this.props.left}}/></div>
        <div className="row">
         
        <div className="login__form"> 
              <form>
                <div>
                   <h1 className="login">Login</h1>
                   <h5>User Name</h5>
                    <input className="text-box" type="text" placeholder="Enter email "class="form-control" />

                   <h5>password</h5>
                    <input className="text-box" type="password" placeholder="Enter Password" class="form-control" />
                  </div>
            
                  <div>
                   <input type="checkbox"/> <b>Keep Me Signed In    </b>  forgot your password
                 </div>
          
                <button>SignUp</button>
          
                 <p className=" text-center">Don't have a account ?  <b>SignUp</b></p>
             </form>
         </div>
         </div>
                 <footer className="foot"> 
                 <p><b>Con-5 @ Online Ordering system 2019</b></p>
                 </footer>
     </div>
          
    );
  }
}
export default Dashboard;
  