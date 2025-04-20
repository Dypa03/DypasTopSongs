import githubLogo from '/github.svg'
import reactLogo from '/react.svg'
import viteLogo from '/vite.svg'

export default function Header() {
    const evilLink = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
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
                    <li><a href="#villain-dies">1st Song</a></li>
                    <li><a href="#perm">2nd Song</a></li>
                    <li><a href="#queencard">3rd Song</a></li>
                    <li><a href={evilLink} target="_blank">Outro</a></li>
                </ul>
            </nav>

            <div className="links">
                <a href="https://www.youtube.com/watch?v=UsDKzj40M6w" target="_blank">
                    <img className="icon"
                        src={viteLogo} 
                        alt="vite logo" 
                    />
                </a>
                <a href="https://www.youtube.com/watch?v=SDPITj1wlkg" target="_blank">
                    <img className="icon"
                        src={reactLogo} 
                        alt="react logo" 
                    />
                </a>
            </div>
        </header>
    );
    }