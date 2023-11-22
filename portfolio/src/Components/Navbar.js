const Navbar = () => {
    return ( 
	<nav className="App-nav">
			<ul className="App-nav-pos">
			<li className="App-nav-pos"><div className="App-button"><a href="/home" className="App-link">Home</a></div></li>
			<li className="App-nav-pos"><div className="App-button"><a href="/about_me" className="App-link">About Me</a></div></li>
			<li className="App-nav-pos"><div className="App-button"><a href="/know_how" className="App-link">Know How</a></div></li>
			<li className="App-nav-pos"><div className="App-button"><a href="/projects"className="App-link">Projects</a></div></li>
			</ul>
    </nav> );
}

export default Navbar;