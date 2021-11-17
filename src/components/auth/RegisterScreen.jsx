import React from 'react';
import { Link} from 'react-router-dom';

const RegisterScreen = () => {
	return (
		<div className="app__main">
		<div className='app__container'>
			<h2 className='app__title'>Register</h2>
			<form className='app_form'>
				<input type="text" placeholder='name' name='name' className='app__input'  autoComplete='off'/>
				<input type='email' placeholder='email' name='email' className='app__input'/>
				<input type='password' placeholder='password' name='password' className='app__input' />
				<input type='password' placeholder='confirm password' name='confirm' className='app__input' />
				<button type='submit' className='button button-primary'>Register</button>
				<Link to='/auth/login' className='link link__block'>Alredy register?</Link>
			</form>
		</div>
		</div>
	)
}

export default RegisterScreen;
