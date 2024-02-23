/* eslint-disable jsx-a11y/alt-text */
'use client';

import { ToolbarContainer } from '@/components/toolbar-components';
import styles from './style.module.scss';
import {
  ArrowRight,
  ArrowUpLeft,
  Circle,
  Diamond,
  Eraser,
  Hand,
  Minus,
  Pilcrow,
  RectangleHorizontal,
} from 'lucide-react';

export const Toolbar = () => {
  return (
    <div className={styles.boxContainer}>
      <ToolbarContainer>
        <Hand className='h-6 w-6 bg-transparent' />
      </ToolbarContainer>
      <ToolbarContainer>
        <ArrowUpLeft className='h-7 w-7 bg-transparent' />
      </ToolbarContainer>
      <ToolbarContainer>
        <Diamond className='h-6 w-6 bg-transparent' />
      </ToolbarContainer>
      <ToolbarContainer>
        <RectangleHorizontal className='h-6 w-6 bg-transparent' />
      </ToolbarContainer>
      <ToolbarContainer>
        <Circle className='h-6 w-6 bg-transparent' />
      </ToolbarContainer>
      <ToolbarContainer>
        <ArrowRight className='h-7 w-7 bg-transparent' />
      </ToolbarContainer>
      <ToolbarContainer>
        <Minus className='h-6 w-6 bg-transparent' />
      </ToolbarContainer>
      <ToolbarContainer>
        <Pilcrow className='h-6 w-6 bg-transparent' />
      </ToolbarContainer>
      <ToolbarContainer>
        <Eraser className='h-6 w-6 bg-transparent' />
      </ToolbarContainer>
    </div>
  );
};
