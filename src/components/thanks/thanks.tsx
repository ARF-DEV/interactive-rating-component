import thanksIcon from "../../assets/illustration-thank-you.svg"
import styles from "./thanks.module.css"

type thanksProps = {
    points: number
}

function Thanks({points}: thanksProps) {
    return (
        <div className={styles.container}>
          <div className={styles.logoContainer}>
            <img src={thanksIcon} alt="icon" />
          </div>
          <div className={styles.pointsHighlight}>
            <span>You Selected {points} out of 5</span>
          </div>
          <div className={styles.textContainer}>
            <h1 className={styles.titleText}>How Did We Do?</h1>
            <p className={styles.normalText}>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering</p>
          </div>
        </div>
    )
}

export default Thanks