import React from 'react';
import NotesAppBar from './NotesAppBar';

const NoteScreen = () => {
	return (
		<div className='Notes__screen'>
			<NotesAppBar />
			<div className='Notes__content'>
				<form className='notes__form'>
					<input
						type='text'
						placeholder='Some awsome title'
						className='note__input'
						autoComplete=''
					/>
					<textarea
						placeholder='What happened today?'
						className='notes__area'
					></textarea>
				</form>
				<img
					src='https://www.smashbros.com/wiiu-3ds/images/character/link/main.png'
					alt='Link'
					className='image'
				/>
			</div>
		</div>
	);
};

export default NoteScreen;
