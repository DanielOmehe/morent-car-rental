import Banner from "./banner";

const Banners = () => (
	<>
		<div className="banners">
			<Banner
                color={"#3563E9"}
				title="The Best Platform for Car Rental"
				subtitle="Ease of doing a car rental safely and reliably. Of course at a low price."
                url='/images/white.png'
                design='/icons/eclipse.svg'
			/>
			<Banner
                banner='#3563E9'
				title="Easy way to rent a car at a low price"
				subtitle="Providing cheap car rental services and safe and comfortable facilities."
                color={"#5CAFFC"}
                url='/images/nissan.png'
                design='/icons/speed.svg'
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
