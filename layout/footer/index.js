import FooterBottom from "./footer-bottom"
import FooterTop from "./footer-top"

const Footer =()=>(
    <>
        <footer className="footer">
            <FooterTop />
            <hr />
            <FooterBottom />
        </footer>
        <style jsx>{`
            .footer{
                width: 100%;
                height: auto;
                background: #fff;
                padding: 5rem 3rem 3rem 3rem;
            }
        `}</style>
    </> 
)

export default Footer