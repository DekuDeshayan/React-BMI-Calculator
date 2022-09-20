import { ChangeEvent, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import styles from './App.module.css';
import 'react-toastify/dist/ReactToastify.css';
import logo from './assets/powered.png';
import {levels, calculateBMI, Level} from './helpers/imc';
import GridItem from './components/GridItem';
import leftArrow from './assets/leftarrow.png';

function App() {

  const [height, setHeight] = useState<number>(0);
  const [weight, setWeight] = useState<number>(0);
  const [level, setLevel] = useState<Level|null>(null);



  const HandleCalculation = () =>{
    if(height && weight){
      
      setLevel(calculateBMI(height, weight));

    }else{
      toast.warn('Please fill the form', {
        position: "top-center",
        theme: 'colored'
      });
    }
  }

  const handleBack = () => {
      setLevel(null);
      setHeight(0);
      setWeight(0)
  }

  return (
    <>
    <ToastContainer />
    <div className={styles.main}>
     <header>
        <div className={styles.headerContainer}>
          <img src={logo} alt="powered.png" width={150}/>
        </div>
     </header>
     <div className={styles.container}>
      <div className={styles.leftSide}>
        <h3>Calculate your BMI - BODY MASS INDEX</h3>
        <p>
          The Body mass Index is an International measure used to calculate if a person is at their ideal weight
        </p>
        <input
        type="number"
        placeholder="Type your height in meters . EX: 1.5m"
        value={height > 0 ? height :''}
        onChange={(e:ChangeEvent<HTMLInputElement>)=>setHeight(parseFloat(e.target.value))}
        disabled={level ? true : false}
        />
        <input
        type="number"
        placeholder="Type your weight in kg . EX: 1.5 kg"
        value={weight > 0 ? weight :''}
        onChange={(e:ChangeEvent<HTMLInputElement>)=>setWeight(parseFloat(e.target.value))}
        disabled={level ? true : false}
        />
        <button  disabled={level ? true : false} onClick={HandleCalculation}>Calculate</button>
      </div>
      <div className={styles.rightSide}>
        {!level &&
        <div className={styles.grid}>
          {levels.map((level, key) => 
            <GridItem key={key} level={level}/>
          )}
        </div>
        }
        {level &&
          <div className={styles.rightBig}>
            <div className={styles.rightArrow} onClick={handleBack}>
              <img src={leftArrow} alt="" width={25} />
            </div>
            <GridItem level={level}/>
          </div>
        }
      </div>
     </div>
    </div>

    </>
  )
}

export default App
