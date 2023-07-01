import React, {Component} from 'react';


export class ClassInput extends Component{

        constructor(){
            super();
            this.state={
                name:'',

            }
        }
        changeName=(e)=>{
                  this.setState({name:e.target.value})
        }
        handleSubmit=(e)=>{
            e.preventDefault();
            document.getElementById('f1').innerHTML=this.state.name;

        }

        render(){
    return(
     <div>
        <h1>example of input in  react </h1>
        <form onSubmit={this.handleSubmit}>
            <table>
                <tr>
                    <td>Name:-</td>
                    <td><input type="text" value={this.state.name} onChange={this.changeName}/></td>
                </tr>
                <tr>
                    <td><button>submit</button></td>
                </tr>
                <tr>
                    <th>
                    <span id="f1"></span>
                    </th>
                </tr>
                </table>
        </form>
     </div>
    )
}
}
export default ClassInput;