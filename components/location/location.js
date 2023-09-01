const Location = ({ title }) => (
	<>
		<div className="location">
			<div className="location-title">
				<img src="icons/radio.svg" alt="radio" />
				<h3>{title}</h3>
			</div>
			<div className="location-select-sections">
				<div className="location-select">
					<h3>Location</h3>
					<div className="location-select-dropdown">
						<p>Select Location</p>
						<img src="icons/down.svg" alt="dropdown" className="dropdown" />
					</div>
				</div>
				<img src="icons/line.svg" />
				<div className="location-select">
					<h3>Date</h3>
					<div className="location-select-dropdown">
						<p>Select Date</p>
						<img src="icons/down.svg" alt="dropdown" className="dropdown" />
					</div>
				</div>
				<img src="icons/line.svg" />
				<div className="location-select">
					<h3>Time</h3>
					<div className="location-select-dropdown">
						<p>Select Time</p>
						<img src="icons/down.svg" alt="dropdown" className="dropdown" />
					</div>
				</div>
			</div>
		</div>
		<style jsx>{`
			.location {
				width: 36.375rem;
				height: 8.5rem;
				background: #fff;
				border-radius: 1rem;
				padding: 1.25rem 1.5rem;
			}

			.location-title {
				width: 100%;
				display: flex;
				align-items: center;
				justify-content: flex-start;
				gap: 0.6rem;
			}

			.location-title h3 {
				font-size: 1rem;
			}

			.location-select-sections {
				margin-top: 1rem;
				display: flex;
				align-items: center;
				justify-content: flex-start;
				gap: 2rem;
			}

            .location-select h3{
                margin-bottom: .5rem;
            }

			.location-select-dropdown {
				display: flex;
				align-items: center;
				justify-content: flex-start;
                gap: 1rem;
			}

            .location-select-dropdown p{
                font-size: .9rem;
            }

            .dropdown{
                cursor: pointer;
                width: 1.3rem;
            }
		`}</style>
	</>
);

export default Location;
