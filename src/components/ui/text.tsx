import { ReactNode } from 'react';
import { Text as TextComponent, TextProps } from 'react-native';

export const Text = ({
  children,
  ...props
}: {
  children: ReactNode;
} & TextProps) => {
  return (
    <TextComponent
      {...props}
      className={['text-2xl text-foregound', props.className].join(' ')}
    >
      {children}
    </TextComponent>
  );
};
