import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const TopSection = () => {
	return (
		<div className="container mt-2">
			<span >
				<FontAwesomeIcon className='me-2' icon={faArrowLeft} />
				VOLTAR Página Inicial / Tênis / Homem / Running
			</span>
			<p className='mt-4 fw-light fs-4'>TÊNIS DE CORRIDA MASCULINOS</p>
			<p>
				Alcance seus objetivos com os tênis de corrida masculinos da adidas,
				equipados com tecnologias que maximizam seu desempenho. Experimente
				agora!
			</p>
		</div>
	);
};

export default TopSection;
