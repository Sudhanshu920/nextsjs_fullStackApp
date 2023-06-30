import Link from 'next/link';
import React from 'react';
import styles from './button.module.css';

const Button = ({ url, text }) => {
  return (
    <button className={styles.container}>
      <Link href={url}>{text}</Link>
    </button>
  );
};

export default Button;
