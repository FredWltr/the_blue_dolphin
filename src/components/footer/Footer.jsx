import React from "react";
import '../../styles/Main.css';

const yukonUrl = "https://www.google.com/maps/dir/?api=1&destination=The+Blue+Dolphin,+845+S+Mustang+Rd,+Yukon,+OK+73099";
const okcUrl = "https://www.google.com/maps/dir/?api=1&destination=The+Blue+Dolphin,+726+West+Sheridan+Avenue,+Oklahoma+City,+OK";

const openingTimes = [
    { day: "Monday", time: "9:00 AM - 8:00 PM" },
    { day: "Tuesday", time: "9:00 AM - 8:00 PM" },
    { day: "Wednesday", time: "9:00 AM - 8:00 PM" },
    { day: "Thursday", time: "9:00 AM - 8:00 PM" },
    { day: "Friday", time: "9:00 AM - 8:00 PM" },
    { day: "Satursday", time: "9:00 AM - 8:00 PM" },
    { day: "Sunday", time: "Closed" },
  ];
const Footer = () => {
    return (
        <div className="footer">
            <div className="sb_footer section_padding">
                <div className="sb_footer-links">
                    <div id="location" className="sb_footer-links-div">
                        <h4>Location</h4>
                        <div className="locations">
                            <div>
                                <p>Yukon</p>
                                <p>845 S Mustang Rd</p>
                                <p>Yukon, OK 73099</p>
                                <a href={yukonUrl} target="_blank" rel="noopener noreferrer" className="map-link">Open In Map</a>
                            </div>
                            <div>
                                <p>Oklahoma City</p>
                                <p>726 W Sheridan Ave</p>
                                <p>Oklahoma City, OK 73102</p>
                                <a href={okcUrl} target="_blank" rel="noopener noreferrer" className="map-link">Open In Map</a>
                            </div>
                        </div>
                    </div>
                    <div id="hour" className="sb_footer-links-div">
                        <h4>Hours</h4>
                        {openingTimes.map(({ day, time }) => (
                            <div className="time-entry">
                                <span className="day">{day}:</span><span className="time">{time}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <hr/>
                <div className="sb_footer-below">
                    <div className="sb_footer-copyright">
                        <p>2025 Fred Walter. All right reserved.</p>
                    </div>
                    <div className="sb_footer-below-links">
                        <p>Terms & Conditions</p>
                        <p>Privacy</p>
                        <p>Security</p>
                        <p>Cookie Declaration</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;