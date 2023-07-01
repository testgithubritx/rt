import React, {Component} from 'react';
class ClassProps extends Component{
    render(){
        const {name,add,age,children}=this.props
        return(
            <div>
           <p> my name is {name} and i am from {add} and age is{age}</p>
           {children}
           </div>
        )
    }
}
export default ClassProps;