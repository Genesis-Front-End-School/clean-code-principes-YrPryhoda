import {Grid} from '@mui/material';
import styles from './styles.module.scss';

export const Spinner = () => {
    return <Grid container justifyContent="center" m={4}>
        <div className={styles.ldsRing}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
    </Grid>;
};
