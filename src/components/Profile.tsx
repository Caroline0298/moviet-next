import styles from "../styles/components/Profile.module.css";
export function Profile() {
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
          Level 1
        </p>
      </div>
    </div>
  );
}
