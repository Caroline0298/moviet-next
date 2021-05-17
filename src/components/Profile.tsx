import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';


export function Profile() {
    const { level } = useContext(ChallengesContext);

    return (
        <div className={styles.profileContainer}>
      <img
        src="https://avatars.githubusercontent.com/u/42359565?s=400&u=b2cfbc079419c800395682ac0c358fa6ad388216&v=4"
        alt="Caroline Figueira"
      />
      <div>
      <strong>Caroline Costa</strong>
      <p>
                    <img src="icons/level.svg" alt="Level" />
                    Level {level}
                </p>
            </div>
        </div>
    );
}