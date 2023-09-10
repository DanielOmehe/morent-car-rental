import Button from "../utils/button"

const Banner =({ banner, title, subtitle, color, url, design })=>(
    <>
        <div className='banner'>
            <img src={design} alt="background" className="icon" />
            <h2>{title}</h2>
            <p>{subtitle}</p>
            <Button color={color}>Rent Car</Button>
            <img src={url} alt="car" className="car" />
        </div>

        <style jsx>{`
            .banner{
                background: ${banner ? banner : '#5CAFFC'};
                width: 42rem;
                height: 22.5rem;
                padding: 1.5rem;
                border-radius: .62rem;
                position: relative;
            }
        
            .banner h2{
                color: #fff;
                font-weight: 600;
                font-size: 2rem;
                padding-right: 22rem;
                margin-bottom: 1rem;
                position: relative;
                z-index: 1;
            }

            .banner p{
                color: #fff;
                font-weight: 500;
                padding-right: 22rem;
                margin-bottom: 1rem;
                position: relative;
                z-index: 1;
            }

            .icon{
                width: 100%;
                position: absolute;
                top: -1rem;
                left: 0;
                z-index: 0;
            }

            .banner:nth-child(1) .car{
                width: 400px;
                position: absolute;
                z-index: 1;
                top: 50%;
                left: 30%;
            }

            .banner:nth-child(2) .car{
                width: 400px;
                position: absolute;
                z-index: 1;
                top: 30%;
                left: 30%;
                transform: matrix(-1, 0, 0, 1, 0, 0);
            }
        `}</style>
    </>
)

export default Banner

