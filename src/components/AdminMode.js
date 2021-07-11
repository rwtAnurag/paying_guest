import { Link } from '@material-ui/core';
import { LocalActivity } from '@material-ui/icons';
import React, { Component, useEffect, useState } from 'react';
import './AdminMode.css';
import SubmitDetail from './SubmitDetail';
 const AdminMode =({setImg})=> {
//   state={
//     profileImg:'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
//   }
  const [profileImg,setImage] = useState('https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png')
  const [name,setName]=useState("");
  const [contact,setContact]=useState("");
  const [address,setAddress]=useState("");
  const [rent,setRent]=useState("");
  const [gob,setgob]=useState("");
  const [location,setLocation]=useState("");
  const [Subbmit,setSubbmit]=useState(false);
  const handleName=(e)=>{
        setName(e.target.value);
		console.log(name);
  }
  const handleConatct=(e)=>{
	console.log(e.target.value)
	setContact(e.target.value);
	console.log(contact);
}
const handleAddress=(e)=>{
	setAddress(e.target.value);
	console.log(address);
}
const handleRent=(e)=>{
	setRent(e.target.value);
	console.log(rent);
}
const handleGob=(e)=>{
	setgob(e.target.value);
	console.log(gob);
}
const handleLocation=(e)=>{
	setLocation(e.target.value);
	console.log(location);
}
const handleClick=()=>{
	setSubbmit(true);
}
  console.log(profileImg);
  const imageHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () =>{
      if(reader.readyState === 2){
		 setImage(reader.result);
      }
    }
    reader.readAsDataURL(e.target.files[0])
  };
  useEffect(()=>{
        setImg(profileImg);
  },[profileImg])
	// render() {
    // const { profileImg} = this.state
	console.log(profileImg);
		return (
			<>
			{!Subbmit?	(	<div className="root">
						<h1>UPLOAD YOUR PG DETAIL</h1>
					<div className="page">
						<div>
							<label>Enter Your Name</label>
							<input   onChange={handleName}></input>
						</div>
						<div>
							<label >Contact No</label>
							<input onChange={handleConatct}></input>
						</div>
						<div>
							<label>Address</label>
							<input onChange={handleAddress}></input>
						</div>
						<div>
							<label>Enter Rent Per Month</label>
							<input  onChange={handleRent}></input>
						</div>
						<div>
							<label>Available for GIRLS/BOYS</label>
							<input onChange={handleGob}></input>
						</div>
						<div>
							<label>Enter Your Current Map Url</label>
							<input onChange={handleLocation}></input>
						</div>
						<div>
							<label>Upload Your PG Image</label>
							<input type="file" accept="image/*" name="image-upload" id="input" onChange={imageHandler} />
									
						</div>
						<div className="submitbtn">
							<button onClick={handleClick}>
								Submit
							</button>
						</div>
					</div>
					{/* <div className="img-holder">
								<img style={{height:"15rem"}} src={profileImg} alt="" id="img" className="img" />
							</div> */}
					</div>)
					:
					<SubmitDetail profileImg={profileImg} name={name} contact={contact} address={address} rent={rent} gob={gob} location={location}/>}
			</>
		);
	// }
}

export default AdminMode;