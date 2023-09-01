const FooterItems =({ category })=>(
    <>
        <div className="footer-items">
            <h4>{category.name}</h4>
            <ul className="list-items">
                {
                    category.items.map((item) => (
                        <li key={item} className="item"><a href="#">{item}</a></li>
                    ))
                }
            </ul>
        </div>
        <style jsx>{`
                .footer-items{
                    width: fit-content;
                    height: fit-content;   
                }

                .footer-items h4{
                    margin-bottom: 1.5rem;
                }

                .item{
                    list-style: none;
                    margin: 1rem 0;
                }

                .item a{
                    text-decoration: none;
                    color: #000;
                    cursor: pointer;
                }
        `}</style>
    </>
)

export default FooterItems