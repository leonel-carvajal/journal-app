import React from 'react'

const JournalEntry = () => {
	return (
		<div className='journal__entry--content'>
			<div className="journal__picture" style={{backgroundImage:'url(https://www.smashbros.com/wiiu-3ds/images/character/link/main.png)'}}></div>
			<div className="journal__body">
				<p className='journal__title'>Un nuevo dia</p>
				<p className='journal__text'>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat nesciunt sed animi enim sequi placeat totam 
				</p>
			</div>
			<div className="journal__date">
				<span>Monday</span>
				<p>28</p>
				</div>
		</div>
	)
}

export default JournalEntry
