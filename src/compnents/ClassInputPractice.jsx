import React, {Component} from 'react';
class ClassInputPractice extends Component{
    constructor(){
        super();
        this.state={
            name:'',
            pass:'',
            gender:'',
            date:'',
            add:'',
            course:'',
        }
    }
    changeName=(e)=>{
        this.setState({name:e.target.value})
    }
    changePass=(e)=>{
        this.setState({pass:e.target.value})
    }
    changeGender=(e)=>{
        this.setState({gender:e.target.value})
    }
    changeDate=(e)=>{
        this.setState({date:e.target.value})
    }
    changeAdd=(e)=>{
        this.setState({add:e.target.value})
    }
    changeCourse=(e)=>{
        this.setState({course:e.target.value})
    }
    changeImage=(e)=>{
        this.setState({image:e.target.value})
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        document.getElementById('f1').value=this.state.name;
        document.getElementById('f2').value=this.state.pass;
        document.getElementById('f3').value=this.state.gender;
        document.getElementById('f4').value=this.state.date;
        document.getElementById('f5').value=this.state.add;
        document.getElementById('f6').value=this.state.course;
        document.getElementById('f7').innerHTML=this.state.image;
    }
    render(){
        return(
            <>
            <div className='kar'>           
                <center>
                <h1>This is class input </h1>
                <form  onSubmit={this.handleSubmit}>
                    <table border="1">
                        <tr>
				            <th colspan="4" align="center"><b><i>Student Registration</i></b></th>
			           </tr>
                        <tr>
                            <td align="center"><b><i>Name</i></b></td>
                            <td colSpan="3"><input type="text" placeholder='Enter Your Name' value={this.state.name} onChange={this.changeName} /></td>
                        </tr>
                        <tr>
                            <td align="center"><b><i>Password</i></b></td>
                            <td colSpan="3"><input type="password" placeholder="Enter Password"  value={this.state.pass} onChange={this.changePass} /></td>
                        </tr>
                        <tr>
				            <td align="center"><b><i>Gender</i></b></td>
				            <td><input type="radio" name="gender" value="male" checked={this.state.gender==='male'} onChange={this.changeGender}/>Male</td>
				            <td colspan="2"><input type="radio" name="gender" value="female" checked={this.state.gender==='female'} onChange={this.changeGender}/>Female</td>
			            </tr>
			            <tr>
				            <td align="center"><b><i>Date Of Birth</i></b></td>
				            <td colspan="3"><input type="date" value={this.state.date} onChange={this.changeDate} /></td>
			            </tr>
                        <tr>
				            <td align="center"><b><i>Address</i></b></td>
				            <td colspan="3"><textarea name="text" rows="3" placeholder='Enter Your Full Address' value={this.add} onChange={this.changeAdd}></textarea></td>
			            </tr>
                        
                        <tr>
				            <td align="center"><b><i>Course</i></b></td>
				            <td colspan="3">
					        <select  value={this.course} onChange={this.changeCourse}>
						        <option>Select</option>
						        <option>Btech</option>
						        <option>Diploma</option>
						        <option>MCA</option>
						        <option>BCA</option>
					        </select>
				            </td>
			            </tr>
                        <tr>
				            <td align="center"><b><i>Image</i></b></td>
				            <td colSpan="3"><input type="file" value={this.image} onChange={this.changeImage}/></td>
			            </tr>
                        <tr>
                            <td align='right'><button>Submit</button></td>
                        </tr>
                    </table>
                </form>
                </center>
                </div>
                <div className='debnath'>
                <br/>
	            <br/>
                <center>
                <form>
                    <table border="1">
                        <tr>
                            <th colSpan="4"><b><i>Output Is</i></b></th>
                        </tr>
                        <tr>
                            <td align="center"><b><i>Name</i></b></td>
                            <td colSpan="3"><input type="text" id="f1" readOnly/></td>
                        </tr>
                        <tr>
                            <td align="center"><b><i>Password</i></b></td>
                            <td colSpan="3"><input type="text" id="f2" readOnly/></td>
                        </tr>
                        <tr>
                            <td align="center"><b><i>Gender</i></b></td>
                            <td colSpan="3"><input type="text" id="f3" readOnly/></td>
                        </tr>
                        
                        <tr>
                            <td align="center"><b><i>Date</i></b></td>
                            <td colSpan="3"><input type="text" id="f4" readOnly/></td>
                        </tr>
                        <tr>
                            <td align="center"><b><i>Address</i></b></td>
                            <td colSpan="3" ><textarea rows="3" id="f5" readOnly></textarea></td>
                        </tr>
                        <tr>
                            <td align="center"><b><i>Course</i></b></td>
                            <td colSpan="3"><input type="text" id="f6" readOnly/></td>
                        </tr>
                        <tr>
                            <td align="center"><b><i>Image</i></b></td>
                            <td colSpan="3"><span id="f7" readOnly></span></td>
                        </tr>
                    </table>
                </form>
	            </center>
		        </div>
                </>

        )
    }
}
export default ClassInputPractice;
