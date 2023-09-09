import { useState } from 'react';
import { Animated, Platform, StyleProp, TextStyle, ViewStyle } from 'react-native';
import { FAB, Portal, useTheme } from 'react-native-paper';
import { IconSource } from 'react-native-paper/lib/typescript/src/components/Icon';

interface ILayoutProps {
  iconMaster: IconSource;
  actionList: Array<IActionItemFAB>;
}

export interface IActionItemFAB {
  icon: IconSource;
  label?: string;
  color?: string;
  labelTextColor?: string;
  accessibilityLabel?: string;
  accessibilityHint?: string;
  style?: Animated.WithAnimatedValue<StyleProp<ViewStyle>>;
  containerStyle?: Animated.WithAnimatedValue<StyleProp<ViewStyle>>;
  labelStyle?: StyleProp<TextStyle>;
  onPress: (e?: any) => void;
  size?: 'small' | 'medium';
  testID?: string;
}

const isIos = Platform.OS === 'ios';

export const FabGroup = ({ iconMaster, actionList }: ILayoutProps) => {
  const [state, setState] = useState({ open: false });
  const [isVisibleState, setIsVisibleState] = useState(true);

  const onStateChange = ({ open }: { open: boolean }) => {
    setState({ open });
  };

  actionList.map((item) => {
    const { onPress } = item;
    item.onPress = () => {
      onPress();
      setIsVisibleState(false);
    };
  });

  const { open } = state;

  const theme = useTheme();

  return (
    <Portal>
      <FAB.Group
        open={open}
        visible={isVisibleState}
        icon={open ? 'close' : iconMaster}
        fabStyle={{ borderRadius: 100, backgroundColor: theme.colors.primary, marginBottom: isIos ? 48 : 72 }}
        color={theme.colors.secondary}
        backdropColor={theme.colors.backdrop}
        actions={actionList}
        onStateChange={onStateChange}
      />
    </Portal>
  );
};
