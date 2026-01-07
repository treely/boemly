'use client';

import React from 'react';
import { chakra, useToken } from '@chakra-ui/react';
import { motion, MotionConfig, useAnimation } from 'framer-motion';
import { FC, useContext, useEffect, ReactNode } from 'react';
import { ImageRadioGroupContext } from '../ImageRadioGroup';
import { generateVariants } from './variants';
import { QUICK_TRANSITION_DURATION } from '../../constants/animations';

export interface ImageRadioItemProps {
  thumbnail: ReactNode;
  title: string;
  value: string | number;
  onClick?: (value: string | number) => void;
  isSelected?: boolean;
  isDisabled?: boolean;
}

const MotionFlex = chakra(motion.button);

const MotionBox = chakra(motion.div);

const MotionText = chakra(motion.span);

export const ImageRadioItem: FC<ImageRadioItemProps> = ({
  title,
  thumbnail,
  value,
  onClick,
  isSelected = false,
  isDisabled = false,
}) => {
  const { onChange, value: currentValue } = useContext(ImageRadioGroupContext);
  const controls = useAnimation();
  const [black, primary500, primary800] = useToken('colors', [
    'black',
    'primary.500',
    'primary.800',
  ]);

  const { containerVariants, outlineVariants, textVariants, thumbnailVariants } = generateVariants({
    black,
    primary500,
    primary800,
  });

  const isActivated = isSelected || value === currentValue;

  useEffect(() => {
    controls.start(isDisabled ? 'disabled' : isActivated ? 'selected' : 'default');
  }, [isDisabled, controls]);

  useEffect(() => {
    if (isDisabled) return;
    controls.start(isActivated ? 'selected' : 'default');
  }, [isActivated, controls]);

  const onMouseEnterHandler = () => {
    if (isDisabled) return;
    if (isActivated) {
      controls.start('hoverSelected');
      return;
    }
    controls.start('hover');
  };

  const onMouseLeaveHandler = () => {
    if (isDisabled) return;
    if (isActivated) {
      controls.start('selected');
      return;
    }
    controls.start('default');
  };

  const onClickHandler = () => (onChange ? onChange(value) : onClick ? onClick(value) : null);

  return (
    <MotionConfig transition={{ bounce: 0, duration: QUICK_TRANSITION_DURATION }}>
      <MotionFlex
        as={motion.button}
        direction="column"
        alignItems="center"
        justifyContent="center"
        disabled={isDisabled}
        cursor={isDisabled ? 'not-allowed' : 'pointer'}
        variants={containerVariants}
        initial="default"
        animate={controls}
        onClick={onClickHandler}
        onMouseEnter={onMouseEnterHandler}
        onMouseLeave={onMouseLeaveHandler}
      >
        <MotionBox
          as={motion.div}
          width="10"
          height="10"
          rounded="xl"
          variants={outlineVariants}
          initial="default"
          overflow="hidden"
          animate={controls}
        >
          <MotionBox
            as={motion.div}
            width="full"
            height="full"
            rounded="inherit"
            position="relative"
            overflow="hidden"
            initial="default"
            variants={thumbnailVariants}
            animate={controls}
          >
            {thumbnail}
          </MotionBox>
        </MotionBox>
        <MotionText
          as={motion.span}
          mt="2"
          fontSize="sm"
          initial="default"
          variants={textVariants}
          animate={controls}
        >
          {title}
        </MotionText>
      </MotionFlex>
    </MotionConfig>
  );
};
