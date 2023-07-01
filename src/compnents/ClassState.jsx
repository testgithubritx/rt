import React, {Component} from 'react';
class ClassState extends Component{
    constructor(){
        super();
        this.state={
            name:'React',
            add:'bardhaman',
            msg:'this is good district',
            count:0,
        }
    }
    change(){
        this.setState(
            {
                msg:"now bardhaman is change two district"
            }
        );
    }
    update(){
        this.setState(
            {
                count:this.state.count+5,
            }
        );
    }
    delete(){
        this.setState(
            {
                count:this.state.count-1,
            }
        );
    }
    render(){
        return(
            <div>
            <h1>{this.state.name}</h1>
            <p>{this.state.add}</p>
            <p>Text:-{this.state.msg}</p><br/>
            
            <button onClick={()=>this.change()}>change</button><br/>
            <p>value:-{this.state.count}</p>
            <button onClick={()=>this.update()}>update</button>
            <button onClick={()=>this.delete()}>decrease</button>
            </div>

        )
    }
}
export default ClassState;