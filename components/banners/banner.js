import Button from "../utils/button"

const Banner =({ banner, title, subtitle })=>(
    <>
        <div className='banner'>
            <h2>{title}</h2>
            <p>{subtitle}</p>
            <Button color={banner ? banner : "#5CAFFC"}>Rent Car</Button>
        </div>

        <style jsx>{`
            .banner{
                background: ${banner ? banner : '#5CAFFC'};
                width: 44rem;
                height: 22.5rem;
                padding: 1.5rem;
                border-radius: .62rem;
            }
        
            .banner h2{
                color: #fff;
                font-weight: 500;
            }

            .banner p{
                color: #fff;
                font-weight: 500;
            }
        `}</style>
    </>
)

export default Banner