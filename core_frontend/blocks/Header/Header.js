import styled from 'styled-components'
import Link from 'next/link'
import logo from '../../public/logo_kda.png'
import Image from 'next/image'

const HeaderMain = styled.header`
  width: 100%;
  padding: 0 20px;
  background: radial-gradient(at top, #FEFFFF, #000000);
`

const LogoWrapper = styled.p`
  width: 100px;
  margin: 0;
`

export const Header = () => {
    return (
        <HeaderMain>
            <Link href='/'>
                <a>
                    <LogoWrapper>
                        <Image src={logo} />
                    </LogoWrapper>
                </a>
            </Link>
        </HeaderMain>
    )
}
