/*
 ** Author: Santosh Kumar Dash
 ** Author URL: http://santoshdash.epizy.com/
 ** Github URL: https://github.com/quintuslabs/fashion-cube
 */

import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import DEALOFWEEK from "../../assets/images/deal_ofthe_week.png";

const Advertisement = ({ date }) => {
  const [countDown, setCountDown] = useState({
    days: 0,
    hours: 0,
    min: 0,
    sec: 0,
  });

  useEffect(() => {
    const calculateCountdown = (endDate) => {
      const diff = (Date.parse(new Date(endDate)) - Date.parse(new Date())) / 1000;

      if (diff <= 0) return false;

      const timeLeft = {
        days: Math.floor(diff / 86400), // 24 * 60 * 60
        hours: Math.floor((diff % 86400) / 3600), // 60 * 60
        min: Math.floor((diff % 3600) / 60),
        sec: Math.floor(diff % 60),
      };

      return timeLeft;
    };

    const interval = setInterval(() => {
      const timeLeft = calculateCountdown(date);
      if (timeLeft) {
        setCountDown(timeLeft);
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, [date]);

  const addLeadingZeros = (value) => value.toString().padStart(2, "0");

  return (
      <div className="deal_ofthe_week" data-aos="fade-up">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="deal_ofthe_week_img">
                <img src={DEALOFWEEK} alt="Deal of the Week" />
              </div>
            </div>
            <div className="col-lg-6 text-right deal_ofthe_week_col">
              <div className="deal_ofthe_week_content d-flex flex-column align-items-center float-right">
                <div className="section_title">
                  <h2>Deal Of The Week</h2>
                </div>
                <ul className="timer">
                  <li className="d-inline-flex flex-column justify-content-center align-items-center">
                    <div id="day" className="timer_num">
                      {addLeadingZeros(countDown.days)}
                    </div>
                    <div className="timer_unit">
                      {countDown.days === 1 ? "Day" : "Days"}
                    </div>
                  </li>
                  <li className="d-inline-flex flex-column justify-content-center align-items-center">
                    <div id="hour" className="timer_num">
                      {addLeadingZeros(countDown.hours)}
                    </div>
                    <div className="timer_unit">Hours</div>
                  </li>
                  <li className="d-inline-flex flex-column justify-content-center align-items-center">
                    <div id="minute" className="timer_num">
                      {addLeadingZeros(countDown.min)}
                    </div>
                    <div className="timer_unit">Mins</div>
                  </li>
                  <li className="d-inline-flex flex-column justify-content-center align-items-center">
                    <div id="second" className="timer_num">
                      {addLeadingZeros(countDown.sec)}
                    </div>
                    <div className="timer_unit">Sec</div>
                  </li>
                </ul>
                <div className="red_button deal_ofthe_week_button">
                  <a href="#">Shop Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

Advertisement.propTypes = {
  date: PropTypes.string.isRequired,
};

Advertisement.defaultProps = {
  date: new Date(new Date().getTime() + 5 * 24 * 60 * 60 * 1000).toString(), // 5 days from now
};

export default Advertisement;
