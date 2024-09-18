import "./CardsDisplay.scss";

const CardsDisplay = () => {
    return (
        <div class="cards-display">
            <div class="cards-display__panel-top">
                <label class="cards-display__title">
                    <span class="cards-display__title-blink">&#10022;</span> LCARS Database
                </label>
            </div>
            <div class="cards-display__panel-side cards-display__panel-side--small"></div>
            <div class="cards-display__panel-side cards-display__panel-side--bridge">Bridge</div>
            <div class="cards-display__panel-side cards-display__panel-side--engineering">Engineering</div>
            <div class="cards-display__panel-side cards-display__panel-side--transporter-room">Transporter Room</div>
            <div class="cards-display__panel-side cards-display__panel-side--holodeck">Holodeck</div>
            <div class="cards-display__panel-side cards-display__panel-side--time">Time</div>
            <div class="cards-display__panel-side cards-display__panel-side--ship">
                <label class="cards-display__ship-title">U.s.s blackstar NCC-1978</label>
            </div>
            <div class="cards-display__panel-main">
                <p class="cards-display__current-time">Current time: </p>
            </div>
        </div>
    )
}

export default CardsDisplay;
