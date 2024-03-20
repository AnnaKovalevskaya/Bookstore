import React from 'react';
import styles from '../styles/Footer.module.css';


const Footer: React.FC = () => {
  return (
    <section className={styles.footer}>

      <div className={styles.rights}>
        Development by <a href="https://github.com/AnnaKovalevskaya"
          target="_blank"
          rel='noreferrer'>
          Anna Kovalevskaya</a>
      </div>
      <div className={styles.socials}>
        <a href="https://instagram.com" target="_blank" rel="noreferrer">
          <svg className='icon'>
            <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#instagram`} />
          </svg>
        </a>

        <a href="https://facebook.com" target="_blank" rel="noreferrer">
          <svg className='icon'>
            <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#facebook`} />
          </svg>
        </a>
        <a href="https://youtube.com" target="_blank" rel="noreferrer">
          <svg className='icon'>
            <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#youtube`} />
          </svg>
        </a>
      </div>
    </section>
  )
}
export { Footer }
