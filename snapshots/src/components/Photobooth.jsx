function Photobooth({ onNext, onBack}) {
    return (
        <section className="scene photobooth">
            <h1>Photobooth</h1>

            <div className="camera-preview">
                Camera Preview
            </div>

            <div className="button-group">
                <button>Take Photos</button>
                <button>Upload Photos</button>
            </div>

            <div className="button-group">
                <button onClick={onBack}>Back</button>
                <button onClick={onNext}>Develop Photos</button>
            </div>
        </section>
    );
}

export default Photobooth;