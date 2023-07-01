import React,{Component} from 'react';

class PracticeClassState extends Component{
    constructor(){
        super();
        this.state={
            name:'react',
            add:'nabadwip',
            msg:'welcome to react tutorial',
            count:0,
        }
        
        }
        Change(){
            this.setState(
                {
                    msg:"thank you for choose reactjs"
                }
            );
    }
    increase(){
        this.setState(
            {
                count:this.state.count+5
            }
        )
    }
    decrease(){
        this.setState(
            {
                count:this.state.count-1
            }
        )
    }
    render (){
        return(
            <>
            <h1>This is Class State</h1>
            {this.state.name}<br/>
            {this.state.add}<br/>
            <i>{this.state.msg}</i>
            <button onClick={()=>this.Change()}>Submit</button><br/>
            <h1>{this.state.count}</h1><br/>
            <button onClick={()=>this.increase()}>Increase</button>
            <button onClick={()=>this.decrease()}>Decrease</button>
            </>
        )
    }
}
export default PracticeClassState;