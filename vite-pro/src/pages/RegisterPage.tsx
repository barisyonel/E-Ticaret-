import React from 'react'
import "../css/RegisterPage.css"
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import {IoPersonCircleSharp} from "react-icons/io5";
import {FaLock} from "react-icons/fa";
import { Button } from '@mui/material';


function RegisterPage() {
  return (
	<div className='register'>
		<div className='main'>
			<form >
				<div className='form-div'>
				<TextField sx={{width:'300px',marginBottom:'25px'}}
        id="username"
		placeholder='Kullanıcı Adı '
       InputProps={{
		startAdornment : (
			<InputAdornment position='start'>
				<IoPersonCircleSharp />
			</InputAdornment>	
		),
	   }}
	   variant='outlined' />

<TextField
        id="password"
		type='password'
		placeholder='Şifre'
       InputProps={{
		startAdornment : (
			<InputAdornment position='start'>
				<FaLock />
			</InputAdornment>	
		),
	   }}
	   variant='standard' />
	   <div>
		<Button size='small' sx={{textTransform:'none',height:'28px',}} variant='contained' color='info'>KAYDOL</Button>
		<Button size='small' sx={{textTransform:'none',height:'28px', backgroundColor:'#CDA735'}} variant='contained'>TEMİZLE</Button>
	   </div>
				</div>
			</form>
		</div>

	</div>
  )
}

export default RegisterPage