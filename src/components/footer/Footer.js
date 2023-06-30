import Image from 'next/image'
import React from 'react'
import styles from './footer.module.css'

const Footer = () => {
  return (
    <div className={styles.container}>
        <div>@2023 lamamia. All rights reserved.</div>
        <div className={styles.social}>
        <Image src='/1.png' width={15} height={15} alt='fbIcon' className={styles.icon}/>
        <Image src='/2.png' width={15} height={15} alt='instaIcon' className={styles.icon}/>
        <Image src='/3.png' width={15} height={15} alt='twiterIcon' className={styles.icon}/>
        <Image src='/4.png' width={15} height={15} alt='ytIcon' className={styles.icon}/>
        </div>
    </div>
  )
}

export default Footer