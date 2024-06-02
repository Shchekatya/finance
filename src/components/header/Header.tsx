import { useState } from 'react'
import styled from 'styled-components'
import { Container, Header, HeaderRoot, HeaderBack, HeaderMinimize, HeaderLogo, HeaderTitleWrapper, HeaderSubtitle, HeaderTitle, HeaderContent, TextField } from '@salutejs/plasma-ui'
import AppLogo from '../../../public/imgs/capital-market.svg'
import { ReactComponent as SearchSVG } from '../../assets/search.svg'
import { accent, primary } from '@salutejs/plasma-tokens';

export const AppHeader = () => {
  const [search, setSearch] = useState('')
  const [isBack, setIsBack] = useState(true);

  const onBackClick = () => {
    setIsBack(false);
  };

  const onMinimizeClick = () => {
    setIsBack(true);
  };
  return (
    <>
      <Container>
        <HeaderRoot>
          {isBack ? <HeaderBack onClick={onBackClick} /> : <HeaderMinimize onClick={onMinimizeClick} />}
          <HeaderLogo src="/imgs/capital-market.svg" alt="Logo" width={300} />
          <HeaderTitleWrapper>
            <HeaderSubtitle>Label text</HeaderSubtitle>
            <HeaderTitle>Header title text</HeaderTitle>
          </HeaderTitleWrapper>
          <HeaderContent>
            <Nav>
              <a href="/">Market</a>
              <a href="/">News</a>
              <InputWrap
                onSubmit={(e) => {
                  e.preventDefault()
                  alert(`Поиск не работает. Поищите '${search}' в другом месте`)
                  setSearch('')
                }}
              >
                {/* <Input
                  placeholder="Search"
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value)
                    console.log(search)
                  }}
                />
                <SearchButton type="submit"><img src="imgs/search.svg" /></SearchButton> */}
                <TextField
                  placeholder="Search"
                  size="l"
                  // defaultValue="L56"
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value)
                    console.log(search)
                  }}
                  contentRight={<SearchSVG />}
                />

              </InputWrap>
            </Nav>
          </HeaderContent>
        </HeaderRoot>
      </Container >

      {/* <HeaderStyle>
        <Nav>
          <img src="\imgs\capital-market.svg" width={300} />
          <a href="/">Market</a>
          <a href="/">News</a>
          <InputWrap
            onSubmit={(e) => {
              e.preventDefault()
              alert(`Поиск не работает. Поищите '${search}' в другом месте`)
              setSearch('')
            }}
          >
            <Input
              placeholder="Search"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value)
                console.log(search)
              }}
            />
            <SearchButton type="submit"><img src="imgs/search.svg" /></SearchButton>
          </InputWrap>
        </Nav>
      </HeaderStyle> */}
    </>
  );
}

const HeaderStyle = styled.header`
background: #4D82E3;
padding: 10px 0;
`

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

const InputWrap = styled.form`
`

const SearchButton = styled.button`
border:none;
background: none;
position: absolute;
right: 5px;
top: 3px;
`