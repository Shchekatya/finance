import { useState } from 'react'
import styled from 'styled-components'

export type TChildren = {
  children?: string | JSX.Element | JSX.Element[]
}

const Header = styled.header`
background: #4D82E3;
padding: 10px 0;
`

const Nav = styled.nav`
margin: 0 50px;
max-width: 1000px;
display:flex;
justify-content: space-between;
align-items: center;
& a {
  text-decoration:none;
  color: #212529;
  font-weight: bold;
  font-size: 25px;
}
`

const Ul = styled.ul`
display: flex;
& li {
  list-style-type: none;
}
`

const InputWrap = styled.form`
position: relative;
`

const Input = styled.input`
border-radius: 13px;
padding: 10px 20px;
border: none;
outline: none;
`
const SearchButton = styled.button`
border:none;
background: none;
position: absolute;
right: 5px;
top: 3px;
`



export const Layout = ({ children }: TChildren) => {
  const [search, setSearch] = useState('')
  return (
    <>
      <Header>
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
      </Header>
      <main>{children}</main>
    </>
  );
}