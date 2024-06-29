import styled from 'styled-components'
import { Button } from '@salutejs/plasma-ui';
import { accent, primary, secondary } from '@salutejs/plasma-tokens';
import { useNavigate } from 'react-router-dom';
import { ArticleArrType } from './News';


export const NewsArticle = ({ id, title, text, link }: ArticleArrType) => {
  const navigateItem = useNavigate()
  return (
    <ArticleWrap>
      <H3>
        {title}
      </H3>
      <p>
        {text}
      </p>
      <Button view="checked" text="READ" onClick={() => navigateItem(`/news/${id}`)} />
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
