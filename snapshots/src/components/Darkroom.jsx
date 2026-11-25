function Darkroom({ onNext, onBack }) {
    return (
        <section className="scene darkroom">
            <h1>Darkroom</h1>

            <div className="chemical-trays">
                <div className="tray">Developer</div>
                <div className="tray">Stop Bath</div>
                <div className="tray">Fixer</div>
            </div>

            <div className="button-group">
                <button onClick={onBack}>Back</button>
                <button onClick={onNext}>Hang to Dry</button>
            </div>
        </section>
    );
}

export default Darkroom;