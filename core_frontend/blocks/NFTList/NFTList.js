import styled from 'styled-components'
import Link from 'next/link'

const NFTWrapper = styled.section`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding: 0 100px;
`

const NFTItem = styled.div`
  width: calc(25% - 60px);
  margin: 0 30px 60px;
  display: flex;
  box-shadow: 0 0 20px 10px #1500ff;
  flex-direction: column;
  background-color: #fff;
  padding: 0 0 10px;
  border-radius: 12px;
  overflow: hidden;
`

const NFTIconWrapper = styled.div`
  width: 100%;
  min-height: 320px;
  display: flex;
  align-items: center;
`

const NFTIcon = styled.img`
  max-width: 100%;
`

const MainTextWrapper = styled.div`
  padding-left: 10px;
  line-height: 22px;

`

const MainText = styled.p`
  display: inline;
  font-weight: 600;
  line-height: 18px;
`

const games = ['csgo', 'Pubg', 'Fortnite']

const NFTList = () => {
    return (
        <NFTWrapper>
            <NFTItem>
                <NFTIconWrapper>
                    <Link href='/nft'>
                        <a>
                            <NFTIcon
                                src='https://sun9-3.userapi.com/impg/1IN11yda-ovMIob8ne9eSY-kJw06lxrYKwEZIw/5pL1GM-YiLY.jpg?size=1000x1000&quality=96&sign=062aa0332e7b8a4f30f16967f17ba3b6&type=album'/>
                        </a>
                    </Link>
                </NFTIconWrapper>
                <MainTextWrapper>
                    Владелец: <MainText>user_name</MainText>
                </MainTextWrapper>
                <MainTextWrapper>
                    Название: <MainText>AWP Серьезная моська</MainText>
                </MainTextWrapper>
                <MainTextWrapper>
                    Цена: <MainText>12 Ever</MainText>
                </MainTextWrapper>
                <MainTextWrapper>
                    Games: <MainText>{games.join(', ')}</MainText>
                </MainTextWrapper>
            </NFTItem>
            <NFTItem>
                <NFTIconWrapper>
                    <Link href='/nft'>
                        <a>
                            <NFTIcon
                                src='https://sun9-42.userapi.com/impg/FUsiXIoJ2iS9mkft7iq--ycjWGYeM6JB76gMpQ/dg2FsnemIYw.jpg?size=1000x1000&quality=96&sign=b7af4f67ab8765e4ebb11cf6f09b71bc&type=album'/>
                        </a>
                    </Link>
                </NFTIconWrapper>
                <MainTextWrapper>
                    Владелец: <MainText>user_name</MainText>
                </MainTextWrapper>
                <MainTextWrapper>
                    Название: <MainText>Калаш вареная картошка</MainText>
                </MainTextWrapper>
                <MainTextWrapper>
                    Цена: <MainText>22 Ever</MainText>
                </MainTextWrapper>
                <MainTextWrapper>
                    Games: <MainText>{games.join(', ')}</MainText>
                </MainTextWrapper>
            </NFTItem>
            <NFTItem>
                <NFTIconWrapper>
                    <Link href='/nft'>
                        <a>
                            <NFTIcon
                                src='https://sun9-3.userapi.com/impg/1IN11yda-ovMIob8ne9eSY-kJw06lxrYKwEZIw/5pL1GM-YiLY.jpg?size=1000x1000&quality=96&sign=062aa0332e7b8a4f30f16967f17ba3b6&type=album'/>
                        </a>
                    </Link>
                </NFTIconWrapper>
                <MainTextWrapper>
                    Владелец: <MainText>user_name</MainText>
                </MainTextWrapper>
                <MainTextWrapper>
                    Название: <MainText>AWP Серьезная моська</MainText>
                </MainTextWrapper>
                <MainTextWrapper>
                    Цена: <MainText>12 Ever</MainText>
                </MainTextWrapper>
                <MainTextWrapper>
                    Games: <MainText>{games.join(', ')}</MainText>
                </MainTextWrapper>
            </NFTItem>
            <NFTItem>
                <NFTIconWrapper>
                    <Link href='/nft'>
                        <a>
                            <NFTIcon
                                src='https://sun9-17.userapi.com/impg/AVjNb0x7NgGUXZPfFzk9avmj37uDWyJurW5KSQ/TpEeSFdfCP8.jpg?size=1920x410&quality=95&sign=e2274a4db20924beafe3cf882fa36fe8&type=album'/>
                        </a>
                    </Link>
                </NFTIconWrapper>
                <MainTextWrapper>
                    Владелец: <MainText>Пока что не я</MainText>
                </MainTextWrapper>
                <MainTextWrapper>
                    Название: <MainText>AWP Прекрасная Елизавета</MainText>
                </MainTextWrapper>
                <MainTextWrapper>
                    Цена: <MainText>1000 Ever</MainText>
                </MainTextWrapper>
                <MainTextWrapper>
                    Games: <MainText>{games.join(', ')}</MainText>
                </MainTextWrapper>
            </NFTItem>
            <NFTItem>
                <NFTIconWrapper>
                    <Link href='/nft'>
                        <a>
                            <NFTIcon
                                src='https://sun9-42.userapi.com/impg/FUsiXIoJ2iS9mkft7iq--ycjWGYeM6JB76gMpQ/dg2FsnemIYw.jpg?size=1000x1000&quality=96&sign=b7af4f67ab8765e4ebb11cf6f09b71bc&type=album'/>
                        </a>
                    </Link>
                </NFTIconWrapper>
                <MainTextWrapper>
                    Владелец: <MainText>user_name</MainText>
                </MainTextWrapper>
                <MainTextWrapper>
                    Название: <MainText>Калаш вареная картошка</MainText>
                </MainTextWrapper>
                <MainTextWrapper>
                    Цена: <MainText>22 Ever</MainText>
                </MainTextWrapper>
                <MainTextWrapper>
                    Games: <MainText>{games.join(', ')}</MainText>
                </MainTextWrapper>
            </NFTItem>
            <NFTItem>
                <NFTIconWrapper>
                    <Link href='/nft'>
                        <a>
                            <NFTIcon
                                src='https://sun9-3.userapi.com/impg/1IN11yda-ovMIob8ne9eSY-kJw06lxrYKwEZIw/5pL1GM-YiLY.jpg?size=1000x1000&quality=96&sign=062aa0332e7b8a4f30f16967f17ba3b6&type=album'/>
                        </a>
                    </Link>
                </NFTIconWrapper>
                <MainTextWrapper>
                    Владелец: <MainText>user_name</MainText>
                </MainTextWrapper>
                <MainTextWrapper>
                    Название: <MainText>AWP Серьезная моська</MainText>
                </MainTextWrapper>
                <MainTextWrapper>
                    Цена: <MainText>12 Ever</MainText>
                </MainTextWrapper>
                <MainTextWrapper>
                    Games: <MainText>{games.join(', ')}</MainText>
                </MainTextWrapper>
            </NFTItem>
            <NFTItem>
                <NFTIconWrapper>
                    <Link href='/nft'>
                        <a>
                            <NFTIcon
                                src='https://sun9-42.userapi.com/impg/FUsiXIoJ2iS9mkft7iq--ycjWGYeM6JB76gMpQ/dg2FsnemIYw.jpg?size=1000x1000&quality=96&sign=b7af4f67ab8765e4ebb11cf6f09b71bc&type=album'/>
                        </a>
                    </Link>
                </NFTIconWrapper>
                <MainTextWrapper>
                    Владелец: <MainText>user_name</MainText>
                </MainTextWrapper>
                <MainTextWrapper>
                    Название: <MainText>Калаш вареная картошка</MainText>
                </MainTextWrapper>
                <MainTextWrapper>
                    Цена: <MainText>22 Ever</MainText>
                </MainTextWrapper>
                <MainTextWrapper>
                    Games: <MainText>{games.join(', ')}</MainText>
                </MainTextWrapper>
            </NFTItem>
        </NFTWrapper>
    )
}

export default NFTList
