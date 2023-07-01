import React, {Component} from 'react';

class PracticeClassInput extends Component{
    constructor(){
        super();
        this.state={
            name:"",
        }
    }
    changeName=(e)=>{
        this.setState({name:e.target.value});
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        document.getElementById('f1').innerHTML=this.state.name;
    }

    render (){
        return(
            <>
            <h1>This is Class input</h1>
            <form onSubmit={this.handleSubmit}>
                <table>
                    <tr>
                        <td>Name:-<input type="text" value={this.state.name} onChange={this.changeName} /></td>
                    </tr>
                    <tr>
                        <td><button>Submit</button></td>
                    </tr>
                    <tr>
                        <td><span id="f1"></span></td>
                    </tr>
                </table>
            </form>
            </>
        )
    }
}
export default PracticeClassInput;