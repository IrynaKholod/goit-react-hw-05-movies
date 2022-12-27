import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Header, LinkMenu } from './Layout.syled';
export const Layout = () => {
  return (
    <>
      <Container>
        <Header>
          <nav>
            {/* <Link to="/" >Home</Link> */}
            <LinkMenu to="/home">Home</LinkMenu>
            <LinkMenu to="/movies">Movies</LinkMenu>
          </nav>
        </Header>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
};
