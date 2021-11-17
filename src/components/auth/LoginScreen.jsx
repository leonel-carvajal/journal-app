import React from 'react';
import { Link} from 'react-router-dom';

const LoginScreen = () => {
	return (
		<div className="app__main">
		<div className='app__container'>
			<h2 className='app__title'>Login</h2>
			<form className='app_form'>
				<input type='email' placeholder='email' name='email' className='app__input'/>
				<input type='password' placeholder='****' name='password' className='app__input' />
				<button type='submit' className='button button-primary'>Login</button>
					<p className='app__text'>Login with social media</p>
				<div className='app_social'>
							<div className='google__box'>
								<img
									className='google__icon'
									src='https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg'
									alt='google button'
								/>
							</div>
							<p className='google__text'>
								Sign in width google
							</p>
				</div>
				<Link to='/auth/register' className='link'>Create new account</Link>
			</form>
		</div>
		</div>
	);
};

export default LoginScreen;
