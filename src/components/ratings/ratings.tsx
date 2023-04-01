import { useState } from "react"
import Button from "../button/button"
import startIcon from "../../assets/icon-star.svg"
import styles from "./ratings.module.css"

type ratingsProps = {
    nextAction: () => void
    points: number
    setPoints: (points: number) => void
}

function Ratings({points, nextAction, setPoints}: ratingsProps) {
    
    const [submitted, setSubmitted] = useState(false)
    return (
        <div className={styles.container}>
          <div className={styles.logoContainer}>
            <img src={startIcon} alt="icon" />
          </div>
          <div className={styles.textContainer}>
            <h1 className={styles.titleText}>How Did We Do?</h1>
            <p className={styles.normalText}>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering</p>
          </div>
          <div className={styles.buttonsContainer}>
            {
              Array(5).fill(0).map((_, index) => {
                return (
                  <Button
                    key={index}
                    text={`${index + 1}`}
                    onMouseDown={() => { setPoints(index+1) }}
                    mouseEnterClass={styles.pointBtnHover}
                    mouseExitClass={styles.pointBtnInactive}
                    mouseDownClass={styles.pointBtnActive}
                    selected={index+1 === points}/>
                )
              })
            }
          </div>
          <Button text='Submit' defaultClass={styles.submitButton} onMouseDown={() => {setSubmitted(true); nextAction()}} mouseEnterClass={styles.submitBtnHover} mouseExitClass={styles.pointBtnActive} mouseDownClass={styles.submitBtnInactive} selected={submitted}/>
        </div>
    )
}

export default Ratings