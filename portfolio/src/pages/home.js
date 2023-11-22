import Navabar from "../components/Navbar";
import Quotes from "../components/Quotes";




const Home = () => {
    return (
        <body>
            <header className="App-header">
                <Navabar />
            </header>
                <h1 className="App-title-font">Welcome</h1>
                <h2 className="App-quotes-title">Random Quotes</h2>
                <Quotes />
            <footer>

            </footer>

        </body>
    );
}

export default Home;