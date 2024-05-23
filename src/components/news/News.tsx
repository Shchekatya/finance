import styled from 'styled-components'
import { Title } from '../common/Title';

const H3 = styled.h3`
color: #4D82E3;
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

export const News = () => {
  return (
    <>
      <Title>News</Title>
      <Wrap>
        <ArticleWrap>
          <H3>
            Dow Jones Touches Record Highs, Helped By These Economic Data Surprises
          </H3>
          <p>
            The Dow Jones Industrial Average started to take a breather Wednesday after scaling to record highs, but the index pared its losses by midday and headed for its...
          </p>
          <ReadButton>
            read
          </ReadButton>
        </ArticleWrap>
        <ArticleWrap>
          <H3>
            Dow Jones Touches Record Highs, Helped By These Economic Data Surprises
          </H3>
          <p>
            The Dow Jones Industrial Average started to take a breather Wednesday after scaling to record highs, but the index pared its losses by midday and headed for its...
          </p>
          <ReadButton>
            read
          </ReadButton>
        </ArticleWrap>
        <ArticleWrap>
          <H3>
            Dow Jones Touches Record Highs, Helped By These Economic Data Surprises
          </H3>
          <p>
            The Dow Jones Industrial Average started to take a breather Wednesday after scaling to record highs, but the index pared its losses by midday and headed for its...
          </p>
          <ReadButton>
            read
          </ReadButton>
        </ArticleWrap>
      </Wrap>
      <ShowButton>
        Show more
      </ShowButton>

    </>
  );
}