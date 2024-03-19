import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Header.module.css';
import { ROUTES } from '../utils/router';
import LOGO from '../assets/bookstore.svg';
import AVATAR from '../assets/avatar.jpg';

const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <Link to={ROUTES.HOME}>
          <img src={LOGO} alt="Logo" />
        </Link>
      </div>
      <div className={styles.info}>
        <div className={styles.user}>
          <div
            className={styles.avatar}
            style={{ backgroundImage: `url(${AVATAR})` }}>
          </div>
          <div className={styles.username}>Guest</div>
        </div>
        <form className={styles.form}>
          <div className={styles.icon}>
            <svg className='icon'>
              <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#search}`} />
            </svg>
          </div>
          <div className={styles.input}>
            <input type="search" name='search'
              placeholder='Search for books...'
              autoComplete='off'
              onChange={() => { }}
              value=''
            />
          </div>
        </form>
      </div>
    </div>
  );
};
export { Header };
