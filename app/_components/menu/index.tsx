'use client';

import { cn } from '@/lib/utils';
import styles from './style.module.scss';
import { Toolbar } from './toolbar';
import { Stroke } from './strokes';

export const MenuContainer = () => {
  return (
    <div className={styles.screenContainer}>
      <div>
        <h1 className={styles.heading}>Menu Container</h1>
      </div>
      <div className={styles.toolContainer}>
        <button className={cn(styles.button, styles.buttonPandora)}>
          <span>
            <Toolbar />
          </span>
        </button>
        <button className={cn(styles.button, styles.buttonPandora2)}>
          <span>
            <Stroke />
          </span>
        </button>
      </div>
    </div>
  );
};
