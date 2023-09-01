import Banner from "./banner";

const Banners = () => (
	<>
		<div className="banners">
			<Banner
				title="The Best Platform for Car Rental"
				subtitle="Ease of doing a car rental safely and reliably. Of course at a low price."
			/>
			<Banner
                banner='#3563E9;'
				title="Easy way to rent a car at a low price"
				subtitle="Providing cheap car rental services and safe and comfortable facilities."
			/>
		</div>
		<style jsx>{`
			.banners {
				width: 100%;
				height: auto;
				display: flex;
				align-items: center;
				justify-content: space-between;
			}
		`}</style>
	</>
);

export default Banners;
