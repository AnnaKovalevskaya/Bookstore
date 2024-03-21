import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import styles from '../styles/Sidebar.module.css'

const Sidebar: React.FC = () => {
  const {list} = useSelector(({categories}: any) => categories)
  console.log("list", list)
  return (
    <section className={styles.sidebar}>
      <div className={styles.title}>CATEGORIES</div>
      <nav>
        <ul className={styles.menu}>
          <li>
            <NavLink to={'/new/${1}'} className={({isActive}) => `${styles.link} ${isActive ? styles.active : ''}`}>
              Link
            </NavLink>
          </li>
        </ul>
      </nav>

      <div className={styles.footer}>
        <a href="/help" target="_blank" className = {styles.link}>
          Help
        </a>
        <a href="/terms"
        target="_blank"
        className = {styles.link}
        style={{textDecoration: 'underline'}}>
          Terms and Conditions
        </a>
      </div>
    </section>
  )
}
export { Sidebar }
