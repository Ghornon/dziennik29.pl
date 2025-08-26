import { useState, useRef, useEffect, useContext } from 'react';
import GameContext from '../context/GameContext';
import { reverseAnswer } from '../Helpers/reverse';

const Modal = () => {
	const [open, setOpen] = useState(false);
	const [titleText, setTitleText] = useState('');
	const modalRef = useRef<HTMLDivElement>(null);
	const [modalType, setModalType] = useState('');

	const { setResult, keys, currentPage } = useContext(GameContext)!;

	const handleModalOpen = (type: string) => {
		if (type === 'tip') {
			setTitleText('Czy na pewno chcesz zobaczyć podpowiedź?');
			setModalType('tip');
		}
		if (type === 'answer') {
			setTitleText('Czy na pewno chcesz zobaczyć rozwiązanie?');
			setModalType('answer');
		}
		setOpen(true);
	};

	const handleModalYes = () => {
		setOpen(false);
		if (modalType === 'tip') {
			const tip = keys[currentPage]?.tip;
			setResult(tip);
		}
		if (modalType === 'answer') {
			const answer = reverseAnswer(keys[currentPage]?.answer);
			setResult(`Odpowiedź: ${answer}`);
		}
	};

	const handleModalClose = () => {
		setOpen(false);
	};

	useEffect(() => {
		const handleClick = (event: MouseEvent) => {
			if (modalRef.current && event.target === modalRef.current) {
				handleModalClose();
			}
		};
		if (open) {
			window.addEventListener('click', handleClick);
		}
		return () => {};
	}, [open]);

	return (
		<>
			<div className="container center">
				<div className="form-wrap">
					<button
						className="button"
						aria-label="Podpowiedź"
						onClick={() => handleModalOpen('tip')}
					>
						Podpowiedź
					</button>
					<button
						className="button"
						aria-label="Rozwiązanie"
						onClick={() => handleModalOpen('answer')}
					>
						Rozwiązanie
					</button>
				</div>
			</div>

			<div className="modal" style={{ display: open ? 'block' : 'none' }} ref={modalRef}>
				<div className="modal-content">
					<div id="modalTitle" className="modal-title">
						{titleText}
					</div>
					<div id="modalBody" className="modal-body">
						<div className="form-wrap">
							<button className="button" aria-label="Tak" onClick={handleModalYes}>
								Tak
							</button>
							<button className="button" aria-label="Nie" onClick={handleModalClose}>
								Nie
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Modal;
