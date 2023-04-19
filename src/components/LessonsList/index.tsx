import {Grid, Typography} from '@mui/material';

import {LessonCard} from '../LessonCard';

import styles from './styles.module.scss';
import {Lesson} from '../../../types';

interface IProps {
    lessons: Lesson[],
    onLessonCardClick: (id: string) => void;
}

export const LessonsList = ({lessons, onLessonCardClick}: IProps) => {
    return <Grid container direction="column" className={styles.lessons}>
        <Typography mb={1} textAlign="center"><strong>Course lessons: </strong> </Typography>
        {lessons
            .map(el => {
                return <div onClick={() => onLessonCardClick(el.id)} key={el.id}>
                    <LessonCard lesson={el} fontSize={'14px'}/>
                </div>;
            })}
    </Grid>;
};
