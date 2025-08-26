import { Link } from 'react-router-dom';
import notesImage from '../assets/notes.png';
import notesPDF from '../assets/notes.pdf';

const Notes = () => {
	return (
		<div className="container center">
			<a href={notesPDF} target="_blank" rel="noreferrer">
				<img src={notesImage} alt="Notatnik" />
			</a>
		</div>
	);
};

export default Notes;
