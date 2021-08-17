import './App.css';
import {useRef, useState, useEffect} from "react";
import React from 'react';

const Roulette = ({values}) => {
    let moveSize = 10;
    let [copy, setCopy] = useState([...values]);
    let roulette = useRef(null);
    let elements = copy.map((el, index) => {
        let classes = index === 1 ? "element win" : "element";
        return <img src={el} style={{transform: `translateY(${sessionStorage.getItem('rollPos')}px)`}}
                    className={`${classes}`} alt='roulette-img'/>
    })
    if (!sessionStorage.getItem('rollPos') ) {
        sessionStorage.setItem('rollPos', -20);
    }

    useEffect(() => {
        if (sessionStorage.getItem('isRolling') === 'true') {
            setTimeout(roll, 5);
        }
    })

    function roll() {
        let rollCount = +sessionStorage.getItem('rollCount');
        if (rollCount > 0) {
            let temp = copy[0];
            let tempCopy = [...copy];
            sessionStorage.setItem('rollCount', rollCount - 1);
            let rollPos = sessionStorage.getItem('rollPos') - moveSize;
            sessionStorage.setItem('rollPos', rollPos);
            roulette.current.childNodes.forEach(el => el.style.transform = `translateY(${rollPos}px)`);
            if (rollPos === -200) {
                roulette.current.childNodes.forEach(el => el.style.transform = `translateY(0px)`);
                sessionStorage.setItem('rollPos', -moveSize);
                tempCopy.shift();
                tempCopy.push(temp);
            }
            setCopy(tempCopy);
        } else {
            sessionStorage.setItem('isRolling', 'false');
        }
    }

    function startRoulette() {
        sessionStorage.setItem('isRolling', 'true');
        sessionStorage.setItem('rollCount', getRandomRollsCount(600, 1200));
        roll();
    }

    function getRandomRollsCount(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается    }
    }


    return (
        <div className="roulette">
            <div className="roulette-wrap" ref={roulette}>
                {elements}
            </div>
            <button className={'btn'} onClick={startRoulette}>Roll</button>
        </div>
    );
}

export default Roulette;