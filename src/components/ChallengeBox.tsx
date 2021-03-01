import { useContext } from 'react';
import { challengesContext } from '../contexts/ChallengesContext';


import styles from '../styles/components/ChallengeBox.module.css';

export function ChallengeBox(){
    const contextData = useContext(challengesContext);

    console.log(contextData)
    
    const hasActiveChallenge = true;
   
    return (
        <div className={styles.challengeBoxContainer}>
            { hasActiveChallenge ? (
                <div className={styles.challengeActive}>
                    <header>Ganhe 400 xp </header>

                    <main>
                        <img src="icons/body.svg"/>
                        <strong>Novo Desafio</strong>
                        <p>Levante e de uma reboladinha.</p>
                    </main>
                    <footer>
                        <button 
                        type="button"
                        className={styles.challengeFailedButton}
                        >FAIL
                        </button>
                        <button 
                        type="button"
                        className={styles.challengeSucceededButton}
                        >WIN
                        </button>
                    </footer>
                </div >
            ) : (
                <div className={styles.challengeNotActive}>
                <strong>De start no clico para receber um desafio</strong>
                <p>
                    <img src="icons/level-up.svg" alt="Level Up"/>
                    Avance de level completando desafios.
                </p>
            </div>
            )}
        </div>
    )
}