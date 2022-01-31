import styled from 'styled-components/macro';

const SpacingSizes = {
  xSmall: 1,
  small: 2,
  medium: 3,
  large: 4,
  xLarge: 5,
  xxLarge: 10,
  xxxLarge: 12
};

export interface SpacerProps {
  direction?: 'vertical' | 'horizontal';
  size?: keyof typeof SpacingSizes;
}

export const Spacer = styled('span')<SpacerProps>(props => ({
  display: 'block',
  marginTop:
    props.direction === 'vertical' ? `${SpacingSizes[props.size!]}rem` : 0,
  marginLeft:
    props.direction === 'horizontal' ? `${SpacingSizes[props.size!]}rem` : 0
}));

Spacer.defaultProps = {
  direction: 'vertical',
  size: 'medium',
  'aria-hidden': 'true'
};
