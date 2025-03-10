import React, { Component } from 'react';
import './Hamburget.css';
class Hamburger extends Component {
	getDefaultProps() {
		return {
			width: '100',
			height: '200',
			bookfill: '#f77b55',
			bookside: '#353f49',
			bookfront: '#474f59'
		};
	}
	render() {
		return (
			<svg
				className="office"
				xmlns="http://www.w3.org/2000/svg"
				width={this.props.width}
				height={this.props.height}
				viewBox="0 0 188.5 188.5"
				aria-labelledby={this.props.iconTitle}
			>
				<title id={this.props.iconTitle}>Office With a Lamp</title>
				<g className="cls-2">
					<circle id="background" className="cls-3" cx="94.2" cy="94.2" r="94.2" />
					<path className="cls-4" d="M50.3 69.8h10.4v72.51H50.3z" />
					<path fill={this.props.bookside} d="M50.3 77.5h10.4v57.18H50.3z" />
					<path fill={this.props.bookfront} d="M60.7 77.5h38.9v57.19H60.7z" />
					<path className="cls-7" d="M60.7 69.8h38.9v7.66H60.7z" />
					<path className="cls-5" d="M60.7 134.7h38.9v7.66H60.7z" />
					<g>
						<path className="cls-4" d="M19.7 105h75.9v12.95H19.7z" />
						<path fill={this.props.bookfill} d="M28.4 105h58.5v12.95H28.4z" />
						<path className="cls-4" d="M37.7 112.2h39.9v1.73H37.7zM37.7 109h19.9v1.73H37.7z" />
						<g>
							<path className="cls-9" d="M15.7 132.3h83.9v10.07H15.7z" />
							<path
								className="cls-4"
								d="M30.1 132.3h7.2v10.07h-7.2zM25.3 132.3h2.4v10.07h-2.4zM78 132.3h7.2v10.07H78zM87.6 132.3H90v10.07h-2.4z"
							/>
						</g>
						<g>
							<path
								className="cls-6"
								d="M92.6 118.8a3.1 3.1 0 0 0-2.2-.9H21.8v1.8h68.6a1.3 1.3 0 0 1 1.3 1.3v8.1a1.3 1.3 0 0 1-1.3 1.3H21.8v1.8h68.6a3.1 3.1 0 0 0 3.1-3.1V121a3.1 3.1 0 0 0-.9-2.2z"
							/>
							<path
								className="cls-4"
								d="M23.6 130.4v-10.7h66.8a1.3 1.3 0 0 1 1.3 1.3v8.1a1.3 1.3 0 0 1-1.3 1.3H23.6z"
							/>
							<path
								className="cls-1"
								d="M90.4 119.7H57.6v10.7h32.8a1.3 1.3 0 0 0 1.3-1.3V121a1.3 1.3 0 0 0-1.3-1.3z"
							/>
							<g className="cls-10">
								<path className="cls-4" d="M57 119.2h36.5v.52H57z" />
								<path
									className="cls-11"
									d="M57 120.3h36.5v.52H57zM57 121.5h36.5v.52H57zM57 122.6h36.5v.52H57zM57 123.7h36.5v.52H57zM57 124.8h36.5v.52H57zM57 126h36.5v.52H57zM57 127.1h36.5v.52H57zM57 128.2h36.5v.52H57zM57 129.3h36.5v.52H57z"
								/>
								<path className="cls-4" d="M57 130.4h36.5v.52H57z" />
							</g>
							<path className="cls-8" d="M83.4 127.6h-4.5v9.9l2.2-2.2 2.3 2.2v-9.9z" />
						</g>
					</g>
					<g id="lamp">
						<path className="cls-5" d="M144.156 132.726l38.352-49.98 3 2.3-38.353 49.98z" />
						<path className="cls-5" d="M142.672 38.69l2.94-2.406 39.884 48.728-2.94 2.407z" />
						<circle
							className="cls-12"
							cx="183.2"
							cy="85.2"
							r="5.2"
							transform="rotate(-87.5 183.15 85.242)"
						/>
						<path
							className="cls-12"
							d="M104.4 142.3h55.1v-3.1a6.3 6.3 0 0 0-6.3-6.3h-42.5a6.3 6.3 0 0 0-6.3 6.3v3.1z"
						/>
						<g>
							<path className="cls-12" d="M143.2 31.1a5.2 5.2 0 0 1-3.4 9.8L127 36.5l3.4-9.8z" />
							<path
								id="bulb"
								className="cls-13"
								d="M125.8 64.2a10.3 10.3 0 1 1-6.4-13.1 10.3 10.3 0 0 1 6.4 13.1z"
							/>
							<path className="cls-12" d="M90 52l52 17.8-5.9-29.1-23.6-8.1L90 52z" />
							<path className="cls-5" d="M112.416 32.603l4.016-11.732 23.624 8.09-4.016 11.73z" />
							<path className="cls-12" d="M122.26 22.927l1.132-3.312 12.167 4.166-1.135 3.312z" />
						</g>
						<path id="light" className="cls-14" d="M142 142.3V69.8L90 52l-64.7 90.3H142z" />
					</g>
					<g>
						<path className="cls-11" d="M15.7 151.9L0 147.1l15.7-4.8v9.6z" />
						<path className="cls-1" d="M0 147.1l15.7 4.8v-3L0 147.1z" />
						<path className="cls-8" d="M15.7 142.3h157.1v9.56H15.7z" />
						<path className="cls-15" d="M15.7 148.9h157.1v3H15.7z" />
						<path className="cls-6" d="M6.1 149L0 147.1l6.1-1.9v3.8z" />
						<path className="cls-12" d="M6.1 149L0 147.1l6.1.7v1.2z" />
						<path className="cls-11" d="M172.8 142.3h5.5v9.56h-5.5z" />
						<path className="cls-1" d="M172.8 148.9h5.5v3h-5.5z" />
						<path
							className="cls-5"
							d="M183.7 151.9a4.8 4.8 0 0 0 4.8-4.8 4.8 4.8 0 0 0-4.8-4.8h-5.4v9.6h5.4z"
						/>
						<path
							className="cls-12"
							d="M187.1 143.7a4.8 4.8 0 0 0-1.9-1.1 4.9 4.9 0 0 1 .3 1.5 4.8 4.8 0 0 1-4.8 4.8h-2.4v3h5.4a4.8 4.8 0 0 0 3.4-8.2z"
						/>
					</g>
				</g>
			</svg>
		);
	}
}

// which makes this reusable component for other views
export default Hamburger;
