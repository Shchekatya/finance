import { useState } from 'react'
import styled from 'styled-components'
import { Container, Header, HeaderRoot, HeaderBack, HeaderMinimize, HeaderLogo, HeaderTitleWrapper, HeaderSubtitle, HeaderTitle, HeaderContent, TextField } from '@salutejs/plasma-ui'
import AppLogo from '../../../public/imgs/capital-market.svg'
import { ReactComponent as SearchSVG } from '../../assets/search1.svg'
import { accent, primary } from '@salutejs/plasma-tokens';
import { Link } from 'react-router-dom'


export const AppHeader = () => {
  const [search, setSearch] = useState('')
  const [isBack, setIsBack] = useState(true);

  const onBackClick = () => {
    setIsBack(false);
  };

  const onMinimizeClick = () => {
    setIsBack(true);
  };

  const onSearchSubmit = (e: any) => {
    if (search != '') {
      e.preventDefault()
      alert(`Поиск не работает. Поищите '${search}' в другом месте`)
      setSearch('')
    } else {
      alert(`Заполните это поле`)
    }

  };
  return (
    <>
      <Container>
        <HeaderRoot>
          {isBack ? <HeaderBack onClick={onBackClick} /> : <HeaderMinimize onClick={onMinimizeClick} />}
          <HeaderLogo src="/imgs/capital-market.svg" alt="Logo" />
          <HeaderTitleWrapper>
            <HeaderSubtitle>Label text</HeaderSubtitle>
            <HeaderTitle>Header title text</HeaderTitle>
          </HeaderTitleWrapper>
          <HeaderContent>
            <Nav>
              <Link to="/">Market</Link>
              <Link to="/news">News</Link>
              <InputWrap
                onSubmit={onSearchSubmit}
              >
                <TextField
                  placeholder="Search"
                  size="l"
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value)
                  }}
                  contentRight={<SVG onClick={onSearchSubmit} />}
                />
              </InputWrap>
            </Nav>
          </HeaderContent>
        </HeaderRoot>
      </Container >
    </>
  );
}

const Nav = styled.nav`
display:flex;
justify-content: space-between;
align-items: center;
& a {
  color: ${primary};
  text-decoration:none;
  font-weight: bold;
  font-size: 25px;
  margin-right: 10px;

}
`

const Ul = styled.ul`
display: flex;
& li {
  list-style-type: none;
  margin: 5px;
}
`

const SVG = styled(SearchSVG)`
width: 1.5rem;
padding: 10px;
`

const InputWrap = styled.form`
`
