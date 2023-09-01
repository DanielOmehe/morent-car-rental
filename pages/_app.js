import PagesLayout from "../layout";
import '../public/stylesheets/app.css'

const App = ({ Component, pageProps }) => (
	<PagesLayout>
		<Component {...pageProps} />
	</PagesLayout>
);

export default App;
