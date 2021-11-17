import React from 'react';
import NoteScreen from '../notes/NoteScreen,';
import NothingSelected from './NothingSelected';
import SideBar from './SideBar';

const JournalScreen = () => {
	return (
		<section className='journal'>
			<SideBar />
			<main>
				{/* <NothingSelected /> */}
				<NoteScreen/>
			</main>
		</section>
	);
};

export default JournalScreen;
