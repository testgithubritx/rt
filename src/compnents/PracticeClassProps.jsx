import React, {Component} from 'react';

class PracticeClassProps extends Component{
    render(){
        const{name,add,age}=this.props;
        return(
            <>
            <p>My name is {name} and address is {add} and age is {age}</p>
            </>
        )
    }

}
export default PracticeClassProps;