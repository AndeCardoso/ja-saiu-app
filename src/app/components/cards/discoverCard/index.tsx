import React, { memo } from 'react';
import { Container, Details, StyledImage, Wrapper } from './styles';
import { Text } from '@components/base/text';
import { ImageSourcePropType, TouchableOpacity } from 'react-native';
import { useTheme } from 'react-native-paper';
import { Row } from '@components/base/row';

interface ICardProps {
  image: ImageSourcePropType;
  title: string;
  description: string;
  episode: string;
  season: string;
  favorited: boolean;
}

const Card = ({ image, title, description, episode, season, favorited }: ICardProps) => {
  const { colors } = useTheme();
  return (
    <TouchableOpacity>
      <Container bgColor={colors.secondary} favorited={favorited} favoritedColor={colors.primary}>
        <StyledImage source={image} resizeMode="cover" size={90} />
        <Wrapper>
          <Text fontSize={20} bold={700}>
            {title}
          </Text>
          <Text fontSize={12} textLimit={60}>
            {description}
          </Text>
          <Details>
            <Row>
              <Text fontSize={14}>Temp:</Text>
              <Text fontSize={14} bold={700}>
                {episode}
              </Text>
            </Row>
            <Row>
              <Text fontSize={14}>Ep:</Text>
              <Text fontSize={14} bold={700}>
                {season}
              </Text>
            </Row>
          </Details>
        </Wrapper>
      </Container>
    </TouchableOpacity>
  );
};

export default memo(Card);
