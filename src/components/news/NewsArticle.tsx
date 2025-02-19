import styled from 'styled-components'
import { Button } from '@salutejs/plasma-ui';
import { accent, primary, secondary } from '@salutejs/plasma-tokens';
import { useNavigate } from 'react-router-dom';
import { ArticleArrType } from './News';
import { NavigateButton } from '../common/NavigateButton';

type NewsArticleProps = ArticleArrType

export const NewsArticle = ({ ...article }: NewsArticleProps) => {
  const { id, title, text, link } = article
  const navigateItem = useNavigate()
  return (
    <ArticleWrap>
      <H3>
        {title}
      </H3>
      <p>
        {text}
      </p>
      <NavigateButton text="READ" id={id} url="news" view="checked" size="m" />
    </ArticleWrap>
  );
}

const H3 = styled.h3`
  font-size: 18px;
  font-weight: medium;
  text-transform: uppercase;
`

const ArticleWrap = styled.div`
  width: 25%;
  margin: 10px;
  padding: 30px 27px;
  border: 1px solid #B9C1D9;
  border-radius: 30px;
& p {
  color: ${secondary};
}
`
