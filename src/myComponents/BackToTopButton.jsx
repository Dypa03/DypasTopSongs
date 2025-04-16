export default function BackToTopButton() {
    return (
        <button 
            type="button" 
            className="btn btn-outline-primary" 
            id="back-to-top" 
            onClick={() => window.scrollTo(0, 0)}>
            &#x25B2;
        </button>
    );
}