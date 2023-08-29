import React from 'react'

import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import { Container , ProgressContainer} from './LayoutStyles'
import Scrollbar from '../components/Scrollbar/Scrollbar'

export const Layout = ({children}) => {
  return (
    <div>
      <ProgressContainer>
        <Scrollbar />
      </ProgressContainer>

      <Container>
        <Header />
        <main>{children}</main>
        <Footer />
      </Container>
    </div>
  );
}
