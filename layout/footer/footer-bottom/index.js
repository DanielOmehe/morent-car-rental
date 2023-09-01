const FooterBottom =()=>(
    <>
        <div className="footer-bottom">
            <h3>©2022 MORENT. All rights reserved</h3>
            <div className="privacy">
            <h3>Privacy & Policy</h3>
            <h3>Terms & Condition</h3>
            </div>
        </div>
        <style jsx>{`
            .footer-bottom{
                width: 100%;
                height: 5rem;
                margin-top: 2rem;
                display: flex;
                align-items: center;
                justify-content: space-between;
            }

            .privacy{
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 1rem;
            }
        `}</style>
    </>
)

export default FooterBottom