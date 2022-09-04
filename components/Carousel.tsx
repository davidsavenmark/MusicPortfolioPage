import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export default class NextJsCarousel extends Component {
	render() {
		return (
			<div>
			<h2></h2>
			<Carousel>
				<div>
					<img src="/sinemark1.png" alt="image1"/>
					<p className="legend">Image 1</p>

				</div>
				<div>
					<img src="/sinemark2.png" alt="image2" />
					<p className="legend">Image 2</p>

				</div>
				<div>
					<img src="/sinemark3.png" alt="image3"/>
					<p className="legend">Image 3</p>

				</div>
				<div>
					<img src="/sinemark4.png" alt="image4"/>
					<p className="legend">Image 4</p>

				</div>
				<div>
					<img src="/sinemark5.png" alt="image5"/>
					<p className="legend">Image 5</p>

				</div>
			</Carousel>
			</div>
		);
	}
};
