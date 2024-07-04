import { useState } from 'react'
import styled from 'styled-components'
import { Container, HeaderRoot, HeaderLogo, HeaderTitleWrapper, HeaderTitle, HeaderContent, TextField } from '@salutejs/plasma-ui'
import { ReactComponent as SearchSVG } from '../../assets/search1.svg'
import LogoSVG from '../../assets/capital-market.svg'
import { primary } from '@salutejs/plasma-tokens';
import { Link } from 'react-router-dom'
import { SyntheticEvent } from 'react'


export const AppHeader = () => {
  const [search, setSearch] = useState('')

  const onSearchSubmit = (e: SyntheticEvent) => {
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
          <HeaderLogoBig src={LogoSVG} alt="Logo" />
          <HeaderTitleWrapper>
            <HeaderTitle>Capital Market</HeaderTitle>
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
                  contentRight={<SearchIcon onClick={onSearchSubmit} />}
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
  font-size: 20px;
  margin-right: 30px;

}
`

const Ul = styled.ul`
display: flex;
& li {
  list-style-type: none;
  margin: 5px;
}
`

const SearchIcon = styled(SearchSVG)`
width: 25px;
padding: 10px;
`

const HeaderLogoBig = styled(HeaderLogo)`
flex: 0 0 65px;
& img {
  height: 100%;
}
`

const InputWrap = styled.form`
`
