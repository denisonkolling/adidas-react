import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { useState, useEffect } from 'react';
import img1 from '../../assets/gallery_1.jpg';
import img2 from '../../assets/gallery_2.jpg';
import img3 from '../../assets/gallery_3.jpg';
import img4 from '../../assets/gallery_4.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import BottomSlide from '../../components/BottomSlide';

const Product = () => {
	const [galleryList, setGalleryList] = useState([]);
	const [syzeList, setSyzeList] = useState([]);

	useEffect(() => {
		init();
	}, []);

	const init = () => {
		const gallery = [
			{ id: 1, angle: 'side', imageUrl: `${img1}` },
			{ id: 2, angle: 'top', imageUrl: `${img2}` },
			{ id: 3, angle: 'sole', imageUrl: `${img3}` },
			{ id: 4, angle: 'top-side', imageUrl: `${img4}` },
		];

		setGalleryList(gallery);

		const syze = [
			{ size: 34, available: false },
			{ size: 35, available: true },
			{ size: 36, available: false },
			{ size: 37, available: false },
			{ size: 38, available: true },
			{ size: 39, available: false },
			{ size: 40, available: true },
			{ size: 41, available: true },
			{ size: 42, available: true },
			{ size: 43, available: false },
			{ size: 44, available: true },
			{ size: 45, available: false },
		];

		setSyzeList(syze);
	};

	return (
		<>
			<Navbar />
			<section id="grid-area" className="container my-5">
				<div className="container m-4 col-md-12 d-flex">
					<div className="row">
						{galleryList.map((g) => (
							<div
								key={g.id}
								className="col-md-6 my-2 d-flex align-items-center justify-content-center">
								<div className="card">
									<img className="card-img-top" src={g.imageUrl} alt="..." />
									{/* <div className="card-body"> */}
									{/* <h6 className="text-capitalize">{g.angle.toLowerCase()}</h6> */}
									{/* </div> */}
								</div>
							</div>
						))}
					</div>
					<div className="container col-md-4 align-content-center text-left px-5 py-2">
						<h1>TÊNIS ULTRABOOST LIGHT</h1>
						<h3> R$1.199,99</h3>
						<p> Até 10 x R$120,00 sem juros</p>
						<p>
							Para pés mais finos, recomendamos que compre um tamanho menor do
							que o de costume.
						</p>

						<p> 18 cores disponíveis</p>

						<div className="d-flex justify-content-center">
							<div className="col-md-6">
								<strong>Tamanhos</strong>
								<div>
									{syzeList.map((s) => (
										<button className="btn btn-outline-dark m-1">
											{s.size}
										</button>
									))}
								</div>
							</div>
						</div>
						<div className="d-flex justify-content-center">
							<button className="btn btn-secondary m-4">
								{' '}
								Adicionar ao carrinho{' '}
								<FontAwesomeIcon className="ms-2" icon={faArrowRight} />
							</button>
						</div>
					</div>
				</div>
			</section>

			<section className="container">
				<div className="container col-11">
					<div class="accordion" id="accordionPanelsStayOpenExample">
						<div class="accordion-item">
							<h2 class="accordion-header" id="panelsStayOpen-headingOne">
								<button
									class="accordion-button"
									type="button"
									data-bs-toggle="collapse"
									data-bs-target="#panelsStayOpen-collapseOne"
									aria-expanded="true"
									aria-controls="panelsStayOpen-collapseOne">
									Destaques
								</button>
							</h2>
							<div
								id="panelsStayOpen-collapseOne"
								class="accordion-collapse collapse show"
								aria-labelledby="panelsStayOpen-headingOne">
								<div class="accordion-body">
									<p>
										<strong>ENTRESSOLA</strong> O Ultraboost Light é nosso tênis
										mais leve de todos, feito com BOOST 30% mais leve. Todas as
										pequenas cápsulas na entressola trabalham juntas para
										entregar energia épica a cada passo.
									</p>
									<p>
										<strong>CABEDAL</strong>
										Feito parcialmente com materiais reciclados, o Ultraboost
										Light usa a tecnologia Primeknit + FORGED para se ajustar
										como uma meia e não escorregar.
									</p>
									<p>
										<strong>SOLADO</strong>
										Reforçado com Borracha Continental™, o solado leve oferece
										aderência para todos os tipos de superfície e flexibilidade
										suficiente para garantir uma passada macia e segura.
									</p>
								</div>
							</div>
						</div>
						<div class="accordion-item">
							<h2 class="accordion-header" id="panelsStayOpen-headingTwo">
								<button
									class="accordion-button collapsed"
									type="button"
									data-bs-toggle="collapse"
									data-bs-target="#panelsStayOpen-collapseTwo"
									aria-expanded="false"
									aria-controls="panelsStayOpen-collapseTwo">
									Descrição
								</button>
							</h2>
							<div
								id="panelsStayOpen-collapseTwo"
								class="accordion-collapse collapse"
								aria-labelledby="panelsStayOpen-headingTwo">
								<div class="accordion-body">
									<p>
										ENERGIA ÉPICA. MAIS LEVE DO QUE NUNCA. Experimente a energia
										épica do novo Ultraboost Light, nosso Ultraboost mais leve
										de todos. A mágica está na entressola Light BOOST, uma nova
										geração do adidas BOOST. Seu design exclusivo de moléculas
										alcança a espuma BOOST mais leve até hoje e apresenta uma
										pegada de carbono 10% menor do que os modelos anteriores
										(para mais informações, veja o FAQ abaixo). Centenas de
										cápsulas BOOST com energia, amortecimento e conforto de
										sobra, para que alguns pés possam ter o máximo disso tudo.
									</p>
								</div>
							</div>
						</div>
						<div class="accordion-item">
							<h2 class="accordion-header" id="panelsStayOpen-headingThree">
								<button
									class="accordion-button collapsed"
									type="button"
									data-bs-toggle="collapse"
									data-bs-target="#panelsStayOpen-collapseThree"
									aria-expanded="false"
									aria-controls="panelsStayOpen-collapseThree">
									Detalhes
								</button>
							</h2>
							<div
								id="panelsStayOpen-collapseThree"
								class="accordion-collapse collapse"
								aria-labelledby="panelsStayOpen-headingThree">
								<div class="accordion-body">
									<ul>
										<li>Forma padrão</li>
										<li>Fecho de cadarço</li>
										<li>Cabedal têxtil adidas</li>
										<li>Forro têxtil Sistema Linear Energy Push Light BOOST</li>
										<li>Peso: 293 g</li>
										<li>
											Drop na entressola: 10 mm (calcanhar: 22 mm, ponta do pé:
											12 mm)
										</li>
										<li>Solado de borracha Continental™</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
<BottomSlide />
			<Footer />
		</>
	);
};

export default Product;
