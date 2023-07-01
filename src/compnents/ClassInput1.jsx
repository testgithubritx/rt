import React, {Component} from 'react';
class ClassInput1 extends Component{
    constructor(){
        super();
        this.state={
            name:'',
            email:'',
            password:'',

        }
    }

    changeName=(e)=>{
        this.setState({name:e.target.value})
    }
    changeEmail=(e)=>{
        this.setState({email:e.target.value})
    }
    changePassword=(e)=>{
        this.setState({password:e.target.value})
    }

    handleSubmit=(e)=>{
        e.preventDefault();
        document.getElementById('f1').innerHTML=this.state.name;
        document.getElementById('f2').innerHTML=this.state.email;
        document.getElementById('f3').innerHTML=this.state.password;
    }
    render(){
        return(
            <div>
            <h1>this is class input </h1>
            <form onSubmit={this.handleSubmit}>
                <table>
                    <tr>
                        <td>Name:-</td>
                        <td><input type="text" value={this.state.name} onChange={this.changeName}/></td>
                    </tr>
                    <tr>
                    <td>Email:-</td>
                        <td><input type="email" value={this.state.email} onChange={this.changeEmail}/></td>
                    </tr>
                    <tr>
                    <td>Password:-</td>
                        <td><input type="password" value={this.state.password} onChange={this.changePassword}/></td>
                    </tr>
                    <tr>
                        <td><button>change text</button></td>
                    </tr>
                    <tr>
                        <th><span id="f1"></span></th>
                        <th><span id="f2"></span></th>
                        <th><span id="f3"></span></th>
                    </tr>
                </table>
            </form>
            </div>
        )
    }
}
export default ClassInput1;