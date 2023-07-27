import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faCloudSunRain,
	faPersonHiking,
	faRecycle,
	faPhone
} from '@fortawesome/free-solid-svg-icons';
import { faEnvelope, faImages, faCompass } from '@fortawesome/free-regular-svg-icons';

const Footer = () => {
	return (
		<>
			<footer className="bg-light text-center text-secondary">
				<div className="container p-4">

					<section className="">
						<form action="">
							<div className="row d-flex justify-content-center">
								<div className="col-auto">
									<div className="pt-2">
										<p className='text-secondary fw-light'>Receba nossas ofertas e novidades</p>
									</div>
								</div>

								<div className="col-md-5 col-12">
									<div className="form-outline form-white mb-4">
										<input
											type="email"
											id="form5Example21"
											className="form-control"
											placeholder="Digite seu e-mail"
										/>
										<label className="form-label"></label>
									</div>
								</div>

								<div className="col-auto">
									<button type="submit" className="btn btn-outline mb-4">
										Enviar
									</button>
								</div>
							</div>
						</form>
					</section>

					<section className="">
						<div className="row">
							<div className="col-lg-3 col-md-6 mb-4 mb-md-0">
								<h5 className="text-secondary text-uppercase">PRODUTOS</h5>

								<ul className="list-unstyled mb-0">
									<li>
										<a href="#!" className="text-secondary text-decoration-none">
                    Tênis
										</a>
									</li>
									<li>
										<a href="#!" className="text-secondary text-decoration-none">
                    Roupas
										</a>
									</li>
									<li>
										<a href="#!" className="text-secondary text-decoration-none">
                    Chuteiras
										</a>
									</li>
									<li>
										<a href="#!" className="text-secondary text-decoration-none">
                    Quebra Vento
										</a>
									</li>
								</ul>
							</div>

							<div className="col-lg-3 col-md-6 mb-4 mb-md-0">
								<h5 className="text-uppercase">ESPORTES</h5>

								<ul className="list-unstyled mb-0">
									<li>
										<a href="#!" className="text-secondary text-decoration-none">
                    Futebol
										</a>
									</li>
									<li>
										<a href="#!" className="text-secondary text-decoration-none">
                    Corrida
										</a>
									</li>
									<li>
										<a href="#!" className="text-secondary text-decoration-none">
                    Basquete
										</a>
									</li>
									<li>
										<a href="#!" className="text-secondary text-decoration-none">
                    Training
										</a>
									</li>
								</ul>
							</div>

							<div className="col-lg-3 col-md-6 mb-4 mb-md-0">
								<h5 className="text-uppercase">DÚVIDAS</h5>

								<ul className="list-unstyled mb-0">
									<li>
										<a href="#!" className="text-secondary text-decoration-none">
											Fale Conosco
										</a>
									</li>
									<li>
										<a href="#!" className="text-secondary text-decoration-none">
											Trocas e Devoluções
										</a>
									</li>
									<li>
										<a href="#!" className="text-secondary text-decoration-none">
											Perguntas Frequentes
										</a>
									</li>
									<li>
										<a href="#!" className="text-secondary text-decoration-none">
											Tabela de Tamanhos
										</a>
									</li>
								</ul>
							</div>

							<div className="col-lg-3 col-md-6 mb-4 mb-md-0">
								<h5 className="text-uppercase">REDES</h5>

								<ul className="list-unstyled mb-0">
									<li>
										<a href="#!" className="text-secondary text-decoration-none">
											Instagram
										</a>
									</li>
									<li>
										<a href="#!" className="text-secondary text-decoration-none">
											Facebook
										</a>
									</li>
									<li>
										<a href="#!" className="text-secondary text-decoration-none">
											TikTok
										</a>
									</li>
									<li>
										<a href="#!" className="text-secondary text-decoration-none">
											Discord
										</a>
									</li>
								</ul>
							</div>
						</div>
					</section>
				</div>

				<div className="text-center p-3">
					<span>© 2023 Adidas do Brasil Ltda. Todos os direitos reservados.</span>
				</div>
			</footer>
		</>
	);
};

export default Footer;
