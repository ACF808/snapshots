function DryingStation({ onRestart }) {
    return (
        <section className="scene drying-station">
            <h1>Drying Station</h1>

            <div className="clothesline"></div>

            <div className="placeholder-strip">
                {Array.from({ length: 4}, (_, index) => (
                    <div className="placeholder-photo" key={index} />
                ))}
            </div>

            <button onClick={onRestart}>Start Again</button>
        </section>
    );
}

export default DryingStation;