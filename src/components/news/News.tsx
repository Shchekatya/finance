import styled from 'styled-components'
import { Title } from '../common/Title';
import { Button } from '@salutejs/plasma-ui';
import { H1, H2, H4, H5 } from '@salutejs/plasma-ui';
import { BodyL } from '@salutejs/plasma-ui';
import { bodyL } from '@salutejs/plasma-typo';
import { accent, primary, secondary } from '@salutejs/plasma-tokens';

export const News = () => {
  return (
    <>
      <Title>News</Title>
      <BodyL>Hello, World!</BodyL>
      <div style={bodyL}>This is Plasma.</div>
      <div style={{ display: 'block' }}>
        <H1>H1 Bold</H1>
        <H2>H2 Bold</H2>
        <H4 bold={false}>
          H4
        </H4>
      </div>

      <Wrap>
        <ArticleWrap>
          <H3>
            Dow Jones Touches Record Highs, Helped By These Economic Data Surprises
          </H3>
          <p>
            The Dow Jones Industrial Average started to take a breather Wednesday after scaling to record highs, but the index pared its losses by midday and headed for its...
          </p>
          <Button view="checked" text="READ" />
        </ArticleWrap>
        <ArticleWrap>
          <H3>
            Dow Jones Touches Record Highs, Helped By These Economic Data Surprises
          </H3>
          <p>
            The Dow Jones Industrial Average started to take a breather Wednesday after scaling to record highs, but the index pared its losses by midday and headed for its...
          </p>
          <Button view="checked" text="READ" />
        </ArticleWrap>
        <ArticleWrap>
          <H3>
            Dow Jones Touches Record Highs, Helped By These Economic Data Surprises
          </H3>
          <p>
            The Dow Jones Industrial Average started to take a breather Wednesday after scaling to record highs, but the index pared its losses by midday and headed for its...
          </p>
          <Button view="checked" text="READ" />
        </ArticleWrap>
      </Wrap>
      <Button text="Show more" size="l" view="primary" />
    </>
  );
}

const H3 = styled.h3`
font-size: 18px;
font-weight: medium;
text-transform: uppercase;
`

const Wrap = styled.div`
margin: 0 50px;
display: flex;
justify-content: space-between;
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

const ReadButton = styled.button`
padding: 13px 40px;
text-transform: uppercase;
border-radius: 14px;
border: 1px solid #4D82E3;
color: #4D82E3;
font-size: 18px;
font-weight: bold;
background: white;
`

const ShowButton = styled.button`
padding: 13px 40px;
text-transform: uppercase;
border-radius: 14px;
border: 1px solid #4D82E3;
color: white;
font-size: 18px;
font-weight: bold;
background: #4D82E3;
margin: 20px 0;
`