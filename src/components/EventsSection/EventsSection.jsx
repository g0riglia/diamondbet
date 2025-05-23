import style from "./EventsSection.module.css"

function EventsSection({ events, handleClick, founds }) {
    return (    
        <section className={style.eventsSection}>
            <div className={style.text}>
                <h1>Eventi</h1>
                <p>Saldo: {founds}€</p>
            </div>
            <div className={style.events}>
                {events.map(event => (
                    <div className={style.event} key={event.id}>
                        <p>{event.content} {`(${event.conditions[0]} / ${event.conditions[1]})`}</p>
                        <div className={style.quotas}>
                            <button onClick={() => handleClick(event.id - 1, 0)} className={style.quota}>{event.firstQuota}x</button>
                            <button onClick={() => handleClick(event.id - 1, 1)} className={style.quota}>{event.secondQuota}x</button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default EventsSection;