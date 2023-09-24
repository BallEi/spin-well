"use client"; 

import React, { useState } from 'react'
import { Wheel } from 'react-custom-roulette'
import styles from "./styles.module.scss"

import bg from "../../public/bg-2.png"

import WheelComponent from 'react-wheel-of-prizes'
import 'react-wheel-of-prizes/dist/index.css'

const data = [
  {
    option: "Iphone 12",
    style: {
      textColor: "white"
    },

  },
  {
    option: "Iphone 13",
  },
  {
    option: "Iphone 14",
  },
  {
    option: "Iphone 15",
  },
  {
    option: "Iphone 16",

  },
  {
    option: "Iphone 17",
  }
]


const segments = [
  'better luck next time',
  'won 70',
  'won 10',
  'better luck next time',
  'won 2',
  'won uber pass',
  'better luck next time',
  'won a voucher'
]
const segColors = [
  '#EE4040',
  '#F0CF50',
  '#815CD1',
  '#3DA5E0',
  '#34A24F',
  '#F9AA1F',
  '#EC3F3F',
  '#FF9000'
]
const onFinished = (winner) => {
  console.log(winner)
}


export default function Spin () {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  
  const handleSpinClick = () => {
    if (!mustSpin) {
      const newPrizeNumber = Math.floor(Math.random() * data.length);
      setPrizeNumber(newPrizeNumber);
      setMustSpin(true);
    }
  }

  return (
    <div className={styles.home}>
      <div className={styles.mainWeel}>
        <Wheel
          mustStartSpinning={mustSpin}
          prizeNumber={prizeNumber}
          data={data}

          onStopSpinning={() => {
            setMustSpin(false);
          }}
        />
      </div>
      <div className={styles.btnSpin} onClick={handleSpinClick}>
        Quay thuowrng
      </div>
{/* 
          <WheelComponent
      segments={segments}
      segColors={segColors}
      winningSegment='won 10'
      onFinished={(winner) => onFinished(winner)}
      primaryColor='black'
      contrastColor='white'
      buttonText='Spin'
      isOnlyOnce={false}
      size={290}
      upDuration={100}
      downDuration={1000}
      fontFamily='Arial'
    /> */}
    </div>
  )
}