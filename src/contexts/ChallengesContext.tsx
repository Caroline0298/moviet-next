import {createContext, useState, ReactNode} from 'react';
import challengs from '../../challenges.json';

interface Challenges{
type: 'body' | 'eye';
}

interface ChallengesContextData{
  level: number;
  challengesCompleted: number;
  currentExperience: number;
  activeChallenge:object;
  levelUp:() => void;
  startNewChallenge:() => void;
}

interface ChallengeProviderProps{
  children: ReactNode;
}

export const challengesContext = createContext({} as ChallengesContextData);

export function ChallengeProvider({ children}: ChallengeProviderProps) {

    const [level, setLevel] = useState(1);
    const [currentExperience, setCurrentExperience] = useState (0);
    const [challengesCompleted, setChallengesCompleted] = useState (0);
 
 const[activeChallenge, setActiveChallenge] = useState(null)
 
    function levelUp(){
     
    setLevel(level + 1);

  }
  function startNewChallenge(){
    const randomChallengeIndex = Math.floor(Math.random() * challengs.length)
    const challenge = challengs[randomChallengeIndex];
    
    setActiveChallenge(challenge)
  }


    return(
        <challengesContext.Provider value={{ 
          level,
         challengesCompleted,
          currentExperience,
          levelUp,
          startNewChallenge,
          activeChallenge, 
          }}>
        {children}
        
        </challengesContext.Provider>
    );
}