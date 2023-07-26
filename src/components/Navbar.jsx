import logo from '../assets/logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faHeart,
	faBagShopping,
	faUser,
} from '@fortawesome/free-solid-svg-icons';

import React from 'react';

const Navbar = () => {
	return (
		<>
			<nav className="navbar navbar-expand-lg bg-light">
				<a class="navbar-brand" href="#">
					<img src={logo} alt="" width="60" height="37" className="ms-5" />
				</a>
				<div className="container-fluid justify-content-center">
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarNavDropdown"
						aria-controls="navbarNavDropdown"
						aria-expanded="false"
						aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>

					<div
						className="collapse navbar-collapse flex-grow-0"
						id="navbarNavDropdown">
						<ul className="navbar-nav text-center font-family-sans-serif">
							<li className="nav-item fw-bold fw-normal mx-2">
								<a href="#" className="nav-link">
									MULHER
								</a>
							</li>
							<li className="nav-item fw-bold fw-normal mx-2">
								<a href="#" className="nav-link">
									HOMEM
								</a>
							</li>
							<li className="nav-item  fw-bold fw-normal mx-2">
								<a href="#" className="nav-link">
									INFANTIL
								</a>
							</li>
							<li className="nav-item fw-normal mx-2">
								<a href="#" className="nav-link">
									NOVIDADES
								</a>
							</li>
							<li className="nav-item fw-normal mx-2">
								<a href="#" className="nav-link">
									ESPORTES
								</a>
							</li>
							<li className="nav-item fw-normal mx-2">
								<a href="#" className="nav-link">
									MUNDO ADIDAS
								</a>
							</li>
							<li className="nav-item dropdown"></li>
						</ul>
					</div>
				</div>
				<div className='d-flex me-5'>
					<a className="text-reset m-3" href="#">
						<span>
							<FontAwesomeIcon icon={faHeart} />
						</span>
					</a>

					<a className="text-reset m-3" href="#">
						<span>
							<FontAwesomeIcon icon={faUser} />
						</span>
					</a>
					<a className="text-reset m-3" href="#">
						<span>
							<FontAwesomeIcon icon={faBagShopping} />
						</span>
					</a>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
