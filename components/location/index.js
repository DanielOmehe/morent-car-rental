import Button from "../utils/button";

import Location from "./location";

const Locations = () => (
	<>
		<div className="locations">
			<Location title='Pick-up' />
			<Button color="#3563E9" width={"3.75rem"} height={"3.75rem"} shadow={'rgba(0, 0, 123, .45)'}>
				<img src="icons/flip.svg" alt="alternate" />
			</Button>
			<Location title='Drop-off' />
		</div>
		<style jsx>{`
			.locations {
				width: 100%;
				height: fit-content;
				display: flex;
				align-items: center;
				justify-content: space-between;
				margin-top: 2rem;
			}
		`}</style>
	</>
);

export default Locations;
