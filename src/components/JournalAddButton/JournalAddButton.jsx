import './JournalAddButton.css';
import CardButton from '../CardButton/CardButton';


function JournalAddButton() {
	return (
		<CardButton className='journal-add'>
			<img src="./Plus.svg" alt="Plus" />
            Новое воспоминание
		</CardButton>
	);
}

export default JournalAddButton;
