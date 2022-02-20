import styled from 'styled-components'

const UserProfileWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

const UserLogo = styled.img`
  width: 300px;
  border-radius: 50%;
  overflow: hidden;
`

const UserCredentials = styled.div`
  display: flex;
  flex-direction: column;
`

const MainTextWrapper = styled.div`
  margin-left: 50px;
`

const MainText = styled.p`
  display: inline-block;
  font-weight: 600;
`

export const UserProfile = () => {
    return (
        <UserProfileWrap>
            <UserLogo
                src='https://e7.pngegg.com/pngimages/731/1014/png-clipart-woman-female-profile-people-monochrome.png'/>
            <UserCredentials>
                <MainTextWrapper>user name: <MainText>User_name</MainText></MainTextWrapper>
            </UserCredentials>
        </UserProfileWrap>
    )
}
