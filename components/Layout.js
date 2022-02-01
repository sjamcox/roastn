import Header from './Header'
import Main from './Main'

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <Main>{children}</Main>
    </div>
  )
}

export default Layout
