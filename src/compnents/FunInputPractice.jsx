import React, {useState} from 'react';
const FunInputPractice =()=>{
	const [name,setName]=useState('');
	const [password,setPassword]=useState('');
	const [gender,setGender]=useState('');
	const [date,setDate]=useState('');
	const [add,setAdd]=useState('');
	const [selectBox, setSelectBox]= useState([]);
	const [course,setCourse]=useState('');
	// const [fileContent,setFileContent]=useState(null);
	// const [preview,setPreview]=useState(null);
    const handleChangeName =(e)=>{
		setName (e.target.value)
	}
	const handleChangePassword =(e)=>{
		setPassword (e.target.value)
	}
	const handleChangeGender =(e)=>{
		setGender(e.target.value)
	}
	const handleChangeDate =(e)=>{
		const date= new Date(e.target.value);
		const year= date.getFullYear();
		const month= ("0"+(date.getMonth()+1)).slice(-2);
		const day= ("0"+date.getDate()).slice(-2);
		const format = `${day}-${month}-${year}`;
		setDate(format);
	}
	const handleChangeChecked =(e)=>{
        const value = e.target.value;
		const check = e.target.checked;
		check?setSelectBox([...selectBox, value]):setSelectBox(selectBox.filter((e)=>e!==value))
			// if(check){
		// 	setSelectBox([...selectBox,value])
		// }else{
		// 	setSelectBox(selectBox.filter((e)=>e!==value))
		// }
	}

	
	
	
	const handleChangeAdd =(e)=>{
		setAdd(e.target.value)
	}
	const handleChangeCourse =(e)=>{
		setCourse(e.target.value)
	}
	// const handleFileChange =(e)=>{
	// 	const selectedFile = e.target.files[0];
	// 	setFileContent(selectedFile);
	// 	if(selectedFile){
	// 		const reader =new FileReader();
	// 		reader.onload=()=>{
	// 			setPreview(reader.result);
	// 		};
	// 		reader.readAsDataURL(selectedFile);
	// 	}else{
	// 		setPreview(null);
	// 	}
	// }
	
	const handleSubmit =(e)=>{
          e.preventDefault();
		  document.getElementById('f1').value=name;
		  document.getElementById('f2').value=password;
		  document.getElementById('f3').value=gender;
		  document.getElementById('f4').value=date;
		  document.getElementById('f5').value=add;
		  document.getElementById('f6').value=course;
		//   document.getElementById('f7').innerHTML=fileContent;
		  document.getElementById('f8').innerHTML= selectBox;
		 
	}
   

    return(
        <div>
		<center>
		<h1>This is a from use in function input</h1>
        <form onSubmit={handleSubmit}>
		<table border="1">
			<tr>
				<th colspan="4"><b><i>Student Registration</i></b></th>
			</tr>
			<tr>
				<td align="center"><b><i>Name</i></b></td>
				<td colspan="3"><input type="text" placeholder="Enter Your Name" value={name} onChange={handleChangeName} /></td>
			</tr>
			<tr>
				<td align="center"><b><i>Password</i></b></td>
				<td colspan="3"><input type="Password" placeholder='Enter Password' value={password} onChange={handleChangePassword} /></td>
			</tr>
			<tr>
				<td align="center"><b><i>Gender</i></b></td>
				<td><input type="radio" name="gender" value="male" checked={gender==='male'} onChange={handleChangeGender}/>Male</td>
				<td colspan="2"><input type="radio" name="gender" value="female" checked={gender==='female'}  onChange={handleChangeGender}/>Female</td>
			</tr>
			<tr>
				<td align="center"><b><i>Date Of Birth</i></b></td>
				<td colspan="3"><input type="date" value={date} onChange={handleChangeDate} /></td>
			</tr>
			<tr>
				<td align="center"><b><i>Address</i></b></td>
				<td colspan="3"><textarea name="text" rows="3" id="text" placeholder="Enter Your Full Address" value={add} onChange={handleChangeAdd}></textarea></td>
			</tr>
			<tr>
				<td align="center"><b><i>Language</i></b></td>
				<td><input type="checkbox" value="English" onChange={handleChangeChecked} />English</td>
				<td><input type="checkbox" value="Bengali" onChange={handleChangeChecked} />Bengali</td>
				<td><input type="checkbox" value="Hindi" onChange={handleChangeChecked} />Hindi</td>
			</tr>
			<tr>
				<td align="center"><b><i>Course</i></b></td>
				<td colspan="3">
					<select  value={course} onChange={handleChangeCourse}>
						<option>Select</option>
						<option>Btech</option>
						<option>Diploma</option>
						<option>MCA</option>
						<option>BCA</option>
					</select>
				</td>
			</tr>
			{/* <tr>
				<td align="center"><b><i>Image</i></b></td>
				<td colSpan="3"><input type="file"  onChange={handleFileChange}/></td>
			</tr> */}
            <tr>
			<td colspan="1" align="right"><input type="reset" value="Reset"/></td>
            <td colspan="3"><button type="submit">Submit</button></td>	
			</tr>
			</table>
	</form>
	</center>

	<br/>
	<br/>
	<center>
    <form>
		<table border="1">
			<tr>
				<th colSpan="4" align="center"><b><i>OUTPUT IS</i></b></th>
			</tr>
			<tr>
				<td align="center"><b><i>Name</i></b></td>
				<td colspan="3"><input type="text" id="f1" readOnly /></td>
			</tr>
			<tr>
				<td align="center"><b><i>Password</i></b></td>
				<td colspan="3"><input type="text" id="f2" readOnly/></td>
			</tr>
			<tr>
				<td align="center"><b><i>Gender</i></b></td>
				<td><input type="text" id="f3"/></td>
			</tr>
			<tr>
				<td align="center"><b><i>Date Of Birth</i></b></td>
				<td colspan="3"><input type="text" id="f4" readOnly/></td>
			</tr>
			<tr>
				<td align="center"><b><i>Address</i></b></td>
				<td colspan="3"><textarea name="text" rows="3"  id="f5" readOnly></textarea></td>
			</tr>
			<tr>
				<td align="center"><b><i>Language</i></b></td>
				<td colspan="3"><em id="f8"></em></td>
			</tr>
			<tr>
				<td align="center"><b><i>Course</i></b></td>
				<td colspan="3"><input type="text" id="f6" readOnly/></td>
			</tr>
			{/* <tr>
				<td align="center"><b><i>Image</i></b></td>
				<td colspan="3">{preview &&<img src={preview} alt='preview' style={{height:100,width:100}}></img>}</td>
			</tr> */}
			
		</table>
	</form>
    </center>
    
		
        </div>
        )
	}

export default FunInputPractice;