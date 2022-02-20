import styled from 'styled-components'
import {UserProfile} from "./UserProfile";

const UserInfoMain = styled.section`
  width: 100%;
  padding: 100px;
  display: flex;
  flex-direction: column;
`


export const UserInfo = () => {
    return (
        <UserInfoMain>
            <UserProfile />
        </UserInfoMain>
    )
}
