import PopularCar from "./popular-cars";
import { popularCars } from "../utils/data";

const PopularCars = () => (
	<>
		<div className="popular-cars-section">
			<div className="popular-cars-header">
				<p>Popular Cars</p>
				<a href="/popular" className="view">View all</a>
			</div>
			<div className="popular-cars">
                {
                    popularCars.map((car, indx) => <PopularCar car={car} key={indx} />)
                }
            </div>
		</div>
		<style jsx>{`
            .popular-cars-section{
                width: 100%;
                height: auto;
                margin-top: 2rem;
            }

            .popular-cars-header{
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 0.5rem 1.25rem;
            }

            .view{
                font-weight: 600;
                text-decoration: none;
            }

            .popular-cars{
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

export default PopularCars;
