import { useState } from 'react'
import { AppHeader } from './header/Header'

export type LayoutProps = {
  children?: string | JSX.Element | JSX.Element[]
}


export const Layout = ({ children }: LayoutProps) => {
  const [search, setSearch] = useState('')
  return (
    <>
      <AppHeader />
      <main>{children}</main>
    </>
  );
}