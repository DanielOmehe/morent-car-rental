import Footer from "./footer";
import Header from "./header";

const PagesLayout = ({ children }) => (
	<>
		<Header />
		<main className="content">{children}</main>
        <Footer />
        <style jsx>{`
            .content{
                padding: 2rem 6rem;
            }
        `}</style>
	</>
);

export default PagesLayout