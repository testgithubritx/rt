import React, {Component} from 'react';
class ClassState1 extends Component{
    constructor(){
        super();
        this.state={
            name:'react',
            msg:'welcome',
        }
    }
    change(){
        this.setState({
            msg:'kartick'
        });
    }
    render (){
        return(
            <div>
            <center>
            <h1>this is class state</h1>
            <h1>{this.state.name}</h1><br/>
            <i>{this.state.msg}</i><br/>
            <button onClick={()=>this.change()}>Change</button>
            </center>
            </div>
        )
    }
}
export default ClassState1;