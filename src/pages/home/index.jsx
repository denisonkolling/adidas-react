import React from 'react';
import Carousel from '../../components/Carousel';
import img1 from '../../assets/bunny.png';

const Home = () => {
	return (
		<div className="position-relative">
			<Carousel />
			<div className='my-3' style={{position: 'absolute', top: '45%', left:'10%',}}>
      <img src={img1} className="" alt="..." />
				<p className='fw-light text-white fs-4 my-3'>
					Bad Bunny Response CL Wonder White
				</p>
				<button className="btn btn-light p-3 px-5 fw-bold my-3" style={{letterSpacing: '2px',}}>
					SIGN UP NOW <span className='h4'>&rarr;</span>
				</button>
			</div>
		</div>
	);
};

export default Home;
