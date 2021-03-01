import { match } from "assert";
import { createContext, useState, ReactNode } from "react";
import challengs from "../../challenges.json";

interface Challenge {
  type: "body" | "eye";
  description: string;
  amount: number;
}

interface ChallengesContextData {
  level: number;
  experienceToNextLevel:number;
  challengesCompleted: number;
  currentExperience: number;
  activeChallenge: Challenge;
  levelUp: () => void;
  startNewChallenge: () => void;
  resetChallenge:() => void;
}

interface ChallengeProviderProps {
  children: ReactNode;
}

export const challengesContext = createContext({} as ChallengesContextData);

export function ChallengeProvider({ children }: ChallengeProviderProps) {
  const [level, setLevel] = useState(1);
  const [currentExperience, setCurrentExperience] = useState(0);
  const [challengesCompleted, setChallengesCompleted] = useState(0);

  const [activeChallenge, setActiveChallenge] = useState(null);

  const experienceToNextLevel = Math.pow(( level + 1) * 4, 2)
  
  function levelUp() {
    setLevel(level + 1);
  }
  function startNewChallenge() {
    const randomChallengeIndex = Math.floor(Math.random() * challengs.length);
    const challenge = challengs[randomChallengeIndex];

    setActiveChallenge(challenge);
  }
  function resetChallenge(){
    setActiveChallenge(null);
  }

  return (
    <challengesContext.Provider
      value={{
        level,
        challengesCompleted,
        currentExperience,
        experienceToNextLevel,
        levelUp,
        startNewChallenge,
        activeChallenge,
        resetChallenge,
      }}
    >
      {children}
    </challengesContext.Provider>
  );
}
