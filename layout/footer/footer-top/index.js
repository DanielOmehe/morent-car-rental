import Logo from "../../../components/utils/logo";
import { footerCategories } from "../../../components/utils/data";
import FooterItems from "./footer-items";

const FooterTop = () => (
	<>
		<div className="footer-top">
			<div className="footer-top-right">
				<Logo logo={"footer-logo"} />
				<p>
					Our vision is to provide convenience and help increase your sale
					business
				</p>
			</div>
			<div className="footer-top-left">
                {
                    footerCategories.map(category => <FooterItems key={category.name} category={category} />)
                }
            </div>
		</div>
		<style jsx>{`
            .footer-top{
                display: flex;
                justify-content: space-between;
                margin-bottom: 3.7rem;
            }

            .footer-top-right{
                width: 18rem;
            }

            .footer-top-right p{
                margin-top: 1rem;
                line-height: 1.5rem;
            }

            .footer-top-left{
                width: fit-content;
                padding: 0 4rem;
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 3.85rem;
            }
        `}</style>
	</>
);

export default FooterTop;
