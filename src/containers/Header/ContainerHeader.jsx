import React, { useState, useEffect, useRef } from "react";
import Header from "../../components/Header/Header";

export default function ContainerHeader() {
  const [timeLeft, setTimeLeft] = useState();

  const weddingDate = new Date("2024-10-05T15:00:00");
  const calculateTimeLeft = (weddingDate) => {
    const difference = weddingDate - new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft(weddingDate));
    }, 1000);

    return () => clearTimeout(timer);
  })

  const [clickCounter, setClickCounter] = useState(0);
  const timerRef = useRef(null);
  const handleClick = () => {
    if (clickCounter === 0) {
      timerRef.current = setTimeout(() => {
        setClickCounter(0);
      }, 120000);
    };
    setClickCounter(prevCounter => {
      const newCounter = prevCounter + 1;
      return newCounter;
    })
  }

  return (
    <Header timeLeft={timeLeft} onClick={handleClick} clickCounter={clickCounter}>
    </Header>
  );
}
