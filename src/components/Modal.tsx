import { useState, useRef, useEffect } from 'react';
import { reverseAnswer } from '../Helpers/reverseAnswer';
import { useGameStore } from '../store/GameStore';

const Modal = () => {
	const [open, setOpen] = useState(false);
	const [titleText, setTitleText] = useState('');
	const modalRef = useRef<HTMLDivElement>(null);
	const [modalType, setModalType] = useState('');

	const keys = useGameStore((state) => state.keys);
	const currentPage = useGameStore((state) => state.currentPage);
	const setValue = useGameStore((state) => state.setValue);

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
			setValue('result', tip);
		}
		if (modalType === 'answer') {
			const answer = reverseAnswer(keys[currentPage]?.answer);
			setValue('result', `Odpowiedź: ${answer}`);
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
			<div className="container">
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
					<div className="modal-title">{titleText}</div>
					<div className="modal-body">
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
