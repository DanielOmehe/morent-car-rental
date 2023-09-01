import Navbar from "./navigation/navbar"

const Header =()=>(
    <>
        <header className="header">
            <Navbar />
        </header>
        <style jsx>
        {`
            .header{
                width: 100%;
                height: auto;
            }
        `}
        </style>
    </>
)

export default Header