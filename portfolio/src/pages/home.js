import Navbar from "../components/Navbar";
import Quotes from "../components/Quotes";
import Footer from "../components/Footer";



const Home = () => {
    return (
        <body>
                { /* <Navabar /> */ }
                <h1 className="App-title-font">Welcome</h1>
                <h2 className="App-quotes-title">Random Quotes</h2>
                <Quotes />
            <footer>
            { /* <Footer /> */ }
            </footer>

        </body>
    );
}

export default Home;