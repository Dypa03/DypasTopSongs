import githubLogo from '/github.svg'
import reactLogo from '/react.svg'
import viteLogo from '/vite.svg'


export default function Header() {
    return (
        <header>
            <div className="logo-link">
                <a href="https://github.com/Dypa03" target="_blank">
                    <img 
                        className="logo icon"
                        src={githubLogo} 
                        alt="github logo" 
                    />
                </a>
            </div>
            
            
            <nav className="navbar">
                <ul className="nav-list">
                    <li><a href="#intro">Intro</a></li>
                    <li><a href="#first-song">1st Song</a></li>
                    <li><a href="#second-song">2nd Song</a></li>
                    <li><a href="#third-song">3rd Song</a></li>
                    <li><a href="#conclusion">Outro</a></li>
                </ul>
            </nav>

            <div className="links">
                <img className="icon"
                    src={viteLogo} 
                    alt="vite logo" 
                />
                <img className="icon"
                    src={reactLogo} 
                    alt="react logo" 
                />
            </div>
        </header>
    );
    }