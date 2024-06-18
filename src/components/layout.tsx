import { AppHeader } from './header/Header'
import styled from 'styled-components'

export type LayoutProps = {
  children?: string | JSX.Element | JSX.Element[]
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <AppHeader />
      <AppMain>{children}</AppMain>
    </>
  );
}

const AppMain = styled.main`
height: 100vh;
`