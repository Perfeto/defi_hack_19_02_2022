import styled from 'styled-components'
import {Header} from "../../blocks/Header/Header";

const Main = styled.main`
  width: 100%;
  min-height: 100vh;
  height: auto;
  background: url('https://catherineasquithgallery.com/uploads/posts/2021-03/1614640188_23-p-abstraktnii-fon-dlya-fotoshopa-30.jpg');
`

const ShadowWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, ${props => props.shadowOpacity === 0 || !!props.shadowOpacity === false ? '0' : props.shadowOpacity});
`

export const MainWrapper = ({children, shadowOpacity}) => {
    return (
        <>
            <Header/>
            <Main>
                <ShadowWrapper shadowOpacity={shadowOpacity}>
                    {children}
                </ShadowWrapper>
            </Main>
        </>
    )
}
