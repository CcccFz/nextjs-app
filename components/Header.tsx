import { useEffect } from 'react';
import styles from './Header.module.css'
import Link from 'next/link';
import Image from 'next/image';

export const Header = () => {
    useEffect(() => {
        document.addEventListener("scroll",  () => {
            const top = document.querySelector(`.${styles.top}`);
            if (window.scrollY > 0) {
                top?.classList.add(styles.headerSticky)
            } else {
                top?.classList.remove(styles.headerSticky)
            }
        });
    }, [])

    return (
        <div className={styles.top}>
            <div className={styles.header}>
                <div className={styles.menu}>

                    <Link href="/">
                        <Image src="https://resource.flomoapp.com/home/logo.png!webp" alt='' width={120} height={26}/>
                    </Link>

                    <div className={styles.flex}>
                        <Link href="/">College</Link>
                        <Link href="/">Download</Link>
                        <Link href="/">Pricing</Link>
                        <Link href="/">Contat</Link>
                        <Link href="/">|</Link>
                        <Link href="/">Log in</Link>
                        <Link className={styles.register} href="/">Get started</Link>
                    </div>

                    <div className={styles.dropdown}></div>

                </div>
            </div>
        </div>
    )
}