import cn from 'classnames';
import React from 'react';
import Typography from 'antd/lib/typography';
import { BlockProps } from 'antd/lib/typography/Base';
import { LinkProps } from 'antd/lib/typography/Link';
import { ParagraphProps } from 'antd/lib/typography/Paragraph';
import { TextProps } from 'antd/lib/typography/Text';
import { TitleProps } from 'antd/lib/typography/Title';
import { FontWeight, TextVariants } from '../../../theme/constants';
import './Typo.scss';

export interface SharedTypoProps {
  variant?: TextVariants;
  weight?: FontWeight;
}

export interface ITextProps {
  size?: 'xxs' | 'xs' | 's' | 'p';
}

const {
  Title: AntTitle,
  Text: AntText,
  Link: AntLink,
  Paragraph: AntParagraph
} = Typography;

const GenericTypo =
  (Typo: React.FC) =>
  <T extends BlockProps>({
    variant = TextVariants.SECONDARY,
    weight = FontWeight.NORMAL,
    className,
    ...props
  }: T & SharedTypoProps) =>
    (
      <Typo
        className={cn(`fc-${variant}`, `fw-${weight}`, className)}
        {...props}
      />
    );

const Text: React.FC<TextProps & ITextProps & SharedTypoProps> = props => {
  const className = cn(props.className, props.size && `fs-${props.size}`);
  return GenericTypo(AntText)({ ...props, className });
};
const Title: React.FC<TitleProps & SharedTypoProps> = GenericTypo(AntTitle);
const Link: React.FC<LinkProps & SharedTypoProps> = GenericTypo(AntLink);
const Paragraph: React.FC<ParagraphProps & SharedTypoProps> =
  GenericTypo(AntParagraph);

export { Text, Title, Link, Paragraph };
