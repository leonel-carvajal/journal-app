import React from 'react'
import JournalEntry from './JournalEntry';

const JournalEntries = () => {
	const entries =[0,1,2];
	 
	return (
		<div className='journal__entries'>
			{
				entries.map(item=>(
					<JournalEntry key={item}/>
				))
			}
		</div>
	)
}

export default JournalEntries
