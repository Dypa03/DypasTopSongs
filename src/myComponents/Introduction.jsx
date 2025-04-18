import concertImg from '/public/concert.png';

export default function Introduction() {
    return (
        <section className="intro">
            <div className="intro-container">
                <h1>Dypa's Favorite Songs</h1>
                <h4>Dive into my Music World!</h4>
                <p>
                Before starting I need to make 2 important premises! <br />
                First, the order is irrelevant, this is not a tier list. <br />
                Second, these top kinda changes everyday, it's impossible to decide 3 best songs, and tastes always change with time. <br />
                And that's all, enjoy!
            </p>
            </div>
            
            <img
                className="intro-image" 
                src={concertImg} 
                alt="intro-image" 
            />
        </section>
    );
}