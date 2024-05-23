import { Link } from "react-router-dom";
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


export const Layout = ({ children }: TChildren) => {
  return (
    <>
      <Header>
        <Nav>
          <img src="\imgs\capital-market.svg" width={300} />
          <a href="/">Market</a>
          <a href="/">News</a>
          {/* <Ul>
            <li>
              <a href="/">Market</a>
            </li>
            <li>
              <a href="/">News</a>
            </li>
          </Ul> */}
        </Nav>
      </Header>
      <main>{children}</main>
    </>
  );
}