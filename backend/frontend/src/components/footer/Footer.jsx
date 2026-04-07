import { useEffect, useState } from "react";
import styled from "styled-components";

const FooterContainer = ({className}) => {
    const [city, setCity] = useState("");
    const [temperature, setTemperature] = useState("");
    const [weather, setWeather] = useState("");

    useEffect(() => {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=Moscow&units=metric&lang=ru&appid=01c8ea0b64c5d6383580482e8d539235",
        )
            .then((res) => res.json())
            .then(({ name, main, weather }) => {
                setCity(name);
                setTemperature(Math.round(main.temp));
                setWeather(weather[0].description);
            });
    }, []);

    return (
        <div className={className}>
            <div>
                <div>Блог веб-разработки</div>
                <div>web-developer.ru</div>
            </div>
            <div>
                <div>{city}, {new Date().toLocaleString("ru", {day: "numeric", month: "long"})}</div>
                <div>{temperature} градусов, {weather} </div>
            </div>
        </div>
    );
};

export const Footer = styled(FooterContainer)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 1000px;
    height: 120px;
    padding: 20px 40px;
    background-color: rgb(255, 255, 255);
    box-shadow: rgb(0, 0, 0) 0px 2px 17px;
    font-weight: bold;
`;
