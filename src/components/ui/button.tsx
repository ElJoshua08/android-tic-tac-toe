import { ReactNode } from 'react';
import {
  Text,
  TouchableNativeFeedback,
  TouchableNativeFeedbackProps,
  View,
} from 'react-native';

export const Button = ({
  children,
  variant,
  ...props
}: {
  children: ReactNode;
  variant?: 'primary' | 'outline' | 'descructive';
} & TouchableNativeFeedbackProps) => {
  const variantClassName = {
    primary: 'bg-primary',
    outline: 'border border-border',
    descructive: 'bg-destructive',
  }[variant || 'primary'];

  return (
    <TouchableNativeFeedback {...props}>
      <View
        className={[
          'rounded-md py-2 px-4 flex items-center justify-center',
          variantClassName,
          props.className,
        ].join(' ')}
      >
        {children}
      </View>
    </TouchableNativeFeedback>
  );
};
