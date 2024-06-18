import styled from 'styled-components'
import { Title } from '../common/Title';
import { Button } from '@salutejs/plasma-ui';
import { H1, H2, H4, H5 } from '@salutejs/plasma-ui';
import { BodyL } from '@salutejs/plasma-ui';
import { bodyL } from '@salutejs/plasma-typo';
import { Article } from './Article';

const ArticleArr = [
  {
    title: 'Dow Jones Touches Record Highs, Helped By These Economic Data Surprises',
    text: 'The Dow Jones Industrial Average started to take a breather Wednesday after scaling to record highs, but the index pared its losses by midday and headed for its...'
  },
  {
    title: 'Dow Jones Touches Record Highs, Helped By These Economic Data Surprises',
    text: 'The Dow Jones Industrial Average started to take a breather Wednesday after scaling to record highs, but the index pared its losses by midday and headed for its...'
  },
  {
    title: 'Dow Jones Touches Record Highs, Helped By These Economic Data Surprises',
    text: 'The Dow Jones Industrial Average started to take a breather Wednesday after scaling to record highs, but the index pared its losses by midday and headed for its...'
  },
]

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
        {ArticleArr.map(article => {
          return <Article title={article.title} text={article.text} />
        })}
      </Wrap>
      <Button text="Show more" size="l" view="primary" />
    </>
  );
}

const Wrap = styled.div`
  margin: 0 50px;
  display: flex;
  justify-content: space-between;
`