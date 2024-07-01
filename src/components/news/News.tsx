import styled from 'styled-components'
import { Title } from '../common/Title';
import { Button } from '@salutejs/plasma-ui';
import { H1, H2, H4, H5 } from '@salutejs/plasma-ui';
import { BodyL } from '@salutejs/plasma-ui';
import { bodyL } from '@salutejs/plasma-typo';
import { NewsArticle } from './NewsArticle';
import { useState } from 'react';

export type ArticleArrType = {
  id: string,
  title: string,
  text: string,
  link?: string
}

const articleArr: ArticleArrType[] = [
  {
    id: "1",
    title: 'Dow Jones Touches Record Highs, Helped By These Economic Data Surprises',
    text: 'The Dow Jones Industrial Average started to take a breather Wednesday after scaling to record highs, but the index pared its losses by midday and headed for its...'
  },
  {
    id: "2",
    title: 'Dow Jones Touches Record Highs, Helped By These Economic Data Surprises',
    text: 'The Dow Jones Industrial Average started to take a breather Wednesday after scaling to record highs, but the index pared its losses by midday and headed for its...'
  },
  {
    id: "3",
    title: 'Dow Jones Touches Record Highs, Helped By These Economic Data Surprises',
    text: 'The Dow Jones Industrial Average started to take a breather Wednesday after scaling to record highs, but the index pared its losses by midday and headed for its...'
  },
  {
    id: "4",
    title: 'Dow Jones Touches Record Highs, Helped By These Economic Data Surprises',
    text: 'The Dow Jones Industrial Average started to take a breather Wednesday after scaling to record highs, but the index pared its losses by midday and headed for its...'
  },
  {
    id: "5",
    title: 'Dow Jones Touches Record Highs, Helped By These Economic Data Surprises',
    text: 'The Dow Jones Industrial Average started to take a breather Wednesday after scaling to record highs, but the index pared its losses by midday and headed for its...'
  },
  {
    id: "6",
    title: 'Dow Jones Touches Record Highs, Helped By These Economic Data Surprises',
    text: 'The Dow Jones Industrial Average started to take a breather Wednesday after scaling to record highs, but the index pared its losses by midday and headed for its...'
  },
  {
    id: "7",
    title: 'Dow Jones Touches Record Highs, Helped By These Economic Data Surprises',
    text: 'The Dow Jones Industrial Average started to take a breather Wednesday after scaling to record highs, but the index pared its losses by midday and headed for its...'
  },
]

export const News = () => {
  const DEFAULT_NEWS_COUNT = 3
  const [show, setShow] = useState(DEFAULT_NEWS_COUNT)
  const UNSHOWED_NEWS_LEFT = (articleArr.length - show)

  const onShowMoreNewsClick = () => {
    if (UNSHOWED_NEWS_LEFT >= DEFAULT_NEWS_COUNT) {
      setShow(show + DEFAULT_NEWS_COUNT)
    } else {
      setShow(show + UNSHOWED_NEWS_LEFT)
    }
  }

  return (
    <>
      <Title>News</Title>
      <Wrap>
        {articleArr.map((article, index) => {
          if (index < show) {
            return <NewsArticle {...article} key={article.id} />
          }
        })}
      </Wrap>
      {articleArr.length > show &&
        < Button text="Show more" size="l" view="primary" onClick={() => onShowMoreNewsClick()} />
      }
    </>
  );
}

const Wrap = styled.div`
  margin: 0 50px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  `