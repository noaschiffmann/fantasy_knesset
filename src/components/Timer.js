import React, { useEffect, useRef, useState } from 'react';
import "./Timer.css";
import 'tachyons';


const Timer = () => {
    const [timerDays, setTimerDays] = useState('00');
    const [timerHours, setTimerHours] = useState('00');
    const [timerMinutes, setTimerMinutes] = useState('00');
    const [timerSeconds, setTimerSeconds] = useState('00');

let interval = useRef();

const startTimer = () => {
    const CountdownDate = new Date('May 12, 2021 00:00:00').getTime();
    interval = setInterval(() => {
        const now = new Date().getTime();
        const distance = CountdownDate - now;
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        if (distance < 0) {
            // stop our timer
            clearInterval(interval.current);
        } else {
            //update our timer
            setTimerDays(days);
            setTimerHours(hours);
            setTimerMinutes(minutes);
            setTimerSeconds(seconds);
        }
    }, 1000);
};

// ComponentDidMount
useEffect(() => {
    startTimer();
    return () => {
        clearInterval(interval.current);
    };
});

return (
    <section className="timer-container">
        <section className="timer">
                <section>
                    <p>{timerDays}:</p>
                    <p><small>ימים</small></p>
                    </section>
                <section>
                    <p>{timerHours}:</p>
                    <p><small>שעות</small></p>
                </section>
                <section>
                    <p>{timerMinutes}:</p>
                    <p><small>דקות</small></p>
                </section>
                <section>
                    <p>{timerSeconds}</p>
                    <p><small>שניות</small></p>
                </section>
        </section>
    </section>
    )
};

export default Timer;