import "./Location.css"

const Location = () => {
    const mapUrl = "https://www.google.com/maps?q=The+Blue+Dolphin";
    const openingTimes = [
        { day: "Monday", time: "9:00 AM - 8:00 PM" },
        { day: "Tuesday", time: "9:00 AM - 8:00 PM" },
        { day: "Wednesday", time: "9:00 AM - 8:00 PM" },
        { day: "Thursday", time: "9:00 AM - 8:00 PM" },
        { day: "Friday", time: "9:00 AM - 8:00 PM" },
        { day: "Satursday", time: "9:00 AM - 8:00 PM" },
        { day: "Sunday", time: "Closed" },
      ];
    return (
        
        <div>
            <p>Location & Hours</p>

            <div>
                <div>Yukon</div>
                <div>845 S Mustang Rd</div>
                <div>Yukon, OK 73099</div>
                <a href={mapUrl} target="_blank" rel="noopener noreferrer">🗺️</a>
            </div>
            <br/>
            <div className="opening-hours">
                {openingTimes.map(({ day, time }) => (
                    <div key={day} className="time-entry">
                        <strong className="day">{day}:</strong> <span className="time">{time}</span>
                    </div>
                ))}
            </div>
            <div>

            </div>
        </div>
    );
}

export default Location;