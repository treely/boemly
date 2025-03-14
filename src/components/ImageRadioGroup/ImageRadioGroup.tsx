import React, { FC, createContext } from 'react';

export interface ImageRadioGroupProps {
  onChange?: (nextValue: string | number) => void;
  value?: string | number;
  children?: React.JSX.Element | React.JSX.Element[];
}

export const ImageRadioGroupContext = createContext<ImageRadioGroupProps>({});

export const ImageRadioGroup: FC<ImageRadioGroupProps> = ({ onChange, value, children }) => (
  <ImageRadioGroupContext.Provider value={{ value, onChange }}>
    {children}
  </ImageRadioGroupContext.Provider>
);
