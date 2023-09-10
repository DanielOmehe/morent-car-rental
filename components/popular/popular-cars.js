import React from "react";
import Button from '../utils/button'

const PopularCar = ({ car }) => (
	<>
		<div className="popular-car">
			<div className="popular-car-header">
				<div className="popular-car-title">
					<p className="car-name">{car.name}</p>
					<p className="car-class">{car.class}</p>
				</div>
				<img src="icons/like-alt.svg" className="favorites" alt="like" />
			</div>
			<img className="car-image" src={car.image} alt="car" />
			<div className="shadow"></div>
			<div className="popular-car-specifications">
				{car.specifications.map((car) => (
					<div key={car.name} className="popular-car-specification">
						<img src={car.icon} alt={car.name} />
						<p>{car.value}</p>
					</div>
				))}
			</div>
            <div className="popular-car-footer">
                <p>${car.amount}/<small>day</small></p>
                <Button color='#3563E9'>Rent Now</Button>
            </div>
		</div>
		<style jsx>{`
			.popular-car {
				background: #fff;
				border-radius: 0.7rem;
				width: 20rem;
				height: 25rem;
				padding: 1.5rem;
                position: relative;
			}

            .popular-car-header{
                display: flex;
                align-items: flex-start;
                justify-content: space-between;
            }

            .favorites{
                cursor: pointer;
            }

            .popular-car-title{
                width: fit-content;
                height: fit-content;
            }

            .popular-car-title .car-name{
                font-weight: 600;
                font-size: 1.2rem;
            }

            .car-image{
                width: 100%;
                height: 5rem;
                flex-shrink: 0;
                margin-top: 4rem;
                margin-bottom: 1rem;
            }

            .popular-car:nth-child(2) .car-image{
                transform: matrix(-1, 0, 0, 1, 0, 0);
                border: 2px solid red;
                margin-top: 0;
                position: absolute;
                width: 90%;
                margin-bottom: 10rem;
            }

            .popular-car:nth-child(3) .car-image{
                transform: matrix(-1, 0, 0, 1, 0, 0);
                border: 2px solid red;
                margin-top: 7rem;
            }

            .popular-car:nth-child(3) .shadow{
                top: 50%;
            }

            .popular-car:nth-child(4) .car-image{
                transform: matrix(-1, 0, 0, 1, 0, 0);
                border: 2px solid red;
                margin-top: 0;
            }

            .shadow{
                width: 100%;
                height: 4.25rem;
                background: linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, #FFF 100%);
                position: absolute;
                left: 0;
                top: 47%;
            }

            .popular-car-specifications{
                width: 100%;
                height: fit-content;
                display: flex;
                gap: .5rem;
            }

            .popular-car-specification{
                display: flex;
                align-items: center;
                justify-content: flex-start;
                gap: .7rem;
            }

            .popular-car-footer{
                display: flex;
                align-items: center;
                justify-content: space-between;
                margin-top: 1.5rem;
            }

            .popular-car-footer p{
                font-size: 1rem;
                font-weight: 600;
            }

            .popular-car-footer small{
                color: #90A3BF;
            }
		`}</style>
	</>
);

export default PopularCar;
