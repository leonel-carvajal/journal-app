import React from 'react';
import JournalEntries from './JournalEntries';

const SideBar = () => {
	return (
		<aside className='journal__sidebar'>
			<div className='journal__user'>
				<i className='fas fa-moon'></i>
				<span className='journal__userName'>Leonel</span>
			</div>
			<div className='journal__entry'>
				<i className="far fa-calendar-plus"></i>
				<p className='new__entry'>New Entry</p>
			</div>
			<p className='logout'>Logout</p>
			<JournalEntries/>
		</aside>
	);
};

export default SideBar;
