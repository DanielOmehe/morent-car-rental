import Logo from "../../../components/utils/logo"
import Button from "../../../components/utils/button"

const NavBar =()=>(
    <>
        <nav className="navbar">
            <Logo />
            <div className="search">
                <img src="icons/search.svg" alt="search" className="search-icon" />
                <input type="text" className="search-field" />
                <img src="icons/filter.svg" alt="filter" className="filter-icon" />
            </div>
            <div className="register">
                <Button>Login</Button>
                <Button color={'#3563E9'}>Sign up</Button>
            </div>
        </nav>
        <style jsx>
        {`
            .navbar{
                padding: 2rem 3.75rem;
                width: 100%;
                border: 1px solid rgba(195, 212, 233, 0.40);
                background: var(--primary-0, #FFF);
                display: flex;
                align-items: center;
                justify-content: flex-start;
            }

            .search{
                display: flex;
                width: 30rem;
                height: 2.5rem;
                border-radius: 4.375rem;
                border: 1px solid rgba(195, 212, 233, 0.40);
                background: #FFF;
                padding: .5rem 1rem;
                margin-left: 4rem;
            }

            .search-icon, .filter-icon{
                cursor: pointer;
            }

            .search-field{
                border: none;
                outline: none;
                width: 90%;
                padding-left: .4rem;
            }

            .register{
                margin-left: 35rem;
                display: flex;
                align-items:  center;
                justify-content: center;
                gap: 1rem;
            }
        `}  
        </style>
    </>
)

export default NavBar