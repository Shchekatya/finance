import styled from 'styled-components'
import { Button } from '@salutejs/plasma-ui';
import { accent, primary, secondary } from '@salutejs/plasma-tokens';

export type ArticleProps = {
  title: string,
  text: string,
  link?: string
}

export const Article = ({ title, text, link }: ArticleProps) => {
  return (
    <>
      <ArticleWrap>
        <H3>
          {title}
        </H3>
        <p>
          {text}
        </p>
        <Button view="checked" text="READ" />
      </ArticleWrap>
    </>
  );
}

const H3 = styled.h3`
  font-size: 18px;
  font-weight: medium;
  text-transform: uppercase;
`

const ArticleWrap = styled.div`
  max-width: 30%;
  margin: 10px;
  padding: 30px 27px;
  border: 1px solid #B9C1D9;
  border-radius: 30px;
& p {
  color: ${secondary};
}
`
