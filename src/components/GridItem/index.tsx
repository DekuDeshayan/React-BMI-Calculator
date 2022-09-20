import { Level } from "../../helpers/imc";
import styles from './GridItem.module.css';
import upImage from '../../assets/up.png';
import downImage from '../../assets/down.png';


type Props = {
    level: Level;
}

function GridItem ({ level } : Props){

    return(
        <div  className={styles.main} style={{backgroundColor:level.color}}>
            <div className={styles.gridIcon}>
                <img src={level.icon === 'up' ? upImage : downImage} alt="" width={30} />
            </div>
            <div className=  {styles.gridTitle}>{level.title}</div>
            {level.yourbmi &&
                <div className={styles.yourBmi}>Your BMI is {level.yourbmi.toFixed(2)} KG/m2 </div>
            }
            <div className={styles.gridInfo}>
                <>
                BMI is between <strong>{level.bmi[0]}</strong> and <strong>{level.bmi[1]}</strong>
                </>
            </div>
        </div>
    );
}



export default GridItem;