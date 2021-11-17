import { Route, Routes, BrowserRouter } from 'react-router-dom';
import LoginScreen from '../components/auth/LoginScreen';
import RegisterScreen from '../components/auth/RegisterScreen';
import JournalScreen from '../components/journal/JournalScreen';

const AppRouter = () => {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route index path='/' element={<JournalScreen />} />
					<Route path='auth'>
						<Route path='/auth/login' element={<LoginScreen />} />
						<Route path='/auth/register' element={<RegisterScreen />} />
					</Route>
					<Route path='*' element={<LoginScreen/>}/>
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default AppRouter;
