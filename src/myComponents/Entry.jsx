import React from 'react';


export default function Entry(props) {
    function AddQuoteSpan({text}) {
        const parts = [];
        let lastIndex = 0;
        const regex = /<<(.*?)>>/g;
        let match;

        while ((match = regex.exec(text)) !== null) {
            const index = match.index;

            if (index > lastIndex) {
                parts.push(text.slice(lastIndex, index))
            }

            parts.push(
                <>
                    {'<<'}
                    <span className='quote'>{match[1]}</span>
                    {'>>'}
                </>
            );

            lastIndex = index + match[0].length;
        }

        if (lastIndex < text.length) {
            parts.push(text.slice(lastIndex));
        }

        return (
            <p className="entry-description">
                {parts.map((part, i) => (
                    <React.Fragment key={i}>{part}</React.Fragment>
                ))}
            </p>
        );
    }

    

    return (
        <section className="entry" id={props.dataId}>
            <div className="entry-container">
                
                <img 
                    src={props.cover.src} 
                    alt={props.cover.alt}
                className="cover" />

                <div className="vertical-line" />   

                <div className="entry-text">
                    
                    <div className="entry-heading">
                        <a href={props.songLink} target="_blank" rel="noopener noreferrer" className="entry-link" >
                            <h2 className="entry-title">{props.title}</h2>
                        </a>
                        
                        <div className="track-details">
                            <h3 className="entry-artist">{props.artist}</h3>
                            <p className="entry-year">{props.year}</p>
                            <p className="entry-album">Album: <span className="album-name">{props.album}</span></p>
                        </div>
                    </div>
                    
                    <p className="entry-description">{props.descriptionIntro}</p>
                    <p className="entry-description">{props.description}</p>
                    <AddQuoteSpan text={props.descriptionOutro} />
                    {/* <p className="entry-description">{props.descriptionOutro}</p> */}
                </div>
            </div>
        </section>
    );
}