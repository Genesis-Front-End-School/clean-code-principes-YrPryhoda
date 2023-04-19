import {Grid} from '@mui/material';
import styles from './styles.module.scss';
import { useMemo } from 'react';

export const Footer = () => {
    const currentYear = useMemo(() => new Date().getFullYear(), []);

    return <Grid container className={styles.footer}>
        <p className={styles.footer__title}>Created for Genesis Academy in {currentYear}</p>
    </Grid>;
};
