import styled from 'styled-components'

const MainWrapper = styled.div`
  width: 100%;
  padding: 100px;
`

const Header = styled.div`
  display: flex;
`

const NftImageWrapper = styled.div`
  width: fit-content;
  box-shadow: 0 0 20px 10px rgba(21, 0, 255, 0.63);
  display: flex;
  background-color: #fff;
  border-radius: 12px;
  overflow: hidden;
`

const NftImage = styled.img`
  width: 400px;
`

const NftInfoWrapper = styled.div`
  margin: 0 50px;
`

const Title = styled.h1`
  color: #fff;
  font-weight: 600;
`

const NFTWrapper = styled.section`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`

const NFTItem = styled.div`
  position: relative;
  left: -30px;
  width: calc(25% - 60px);
  margin: 20px 30px 20px;
  display: flex;
  box-shadow: 0 0 20px 10px rgba(21, 0, 255, 0.63);
  flex-direction: column;
  background-color: #fff;
  padding: 0 0 10px;
  border-radius: 20px;
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

const GameName = styled.p`
  width: fit-content;
  margin: 0 auto;
  font-size: 20px;
`

const HistoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 400px;
  position: relative;
  top: -40px;
`

const History = styled.div`
  max-width: 600px;
  padding: 10px;
  width: fit-content;
  background-color: rgba(255, 255, 255, 0.3);
  color: #fff;
  font-size: 20px;
  font-weight: 500;
  border-radius: 10px;
`

const owners = ['Recrent', 'papih', 'Eminem', 'Лунтик', 'Грабли']


const NftBlockInfo = () => {
    return (
        <MainWrapper>
            <Header>
                <NftImageWrapper>
                    <NftImage
                        src='https://sun9-42.userapi.com/impg/FUsiXIoJ2iS9mkft7iq--ycjWGYeM6JB76gMpQ/dg2FsnemIYw.jpg?size=1000x1000&quality=96&sign=b7af4f67ab8765e4ebb11cf6f09b71bc&type=album'/>
                    <NftInfoWrapper>
                        <p>Nft name: Калаш ксго вареная картошка</p>
                        <p>Владелец: User_name</p>
                        <p>Цена: 1.2 Ever</p>
                    </NftInfoWrapper>
                </NftImageWrapper>
                <HistoryWrapper>
                    <Title>История Владения</Title>
                    <History>
                        {owners.map((item, index) => {
                            return (
                                <>
                                    <p>{item} {index === owners.length - 1 ? '' : `-> ${owners[index + 1]}`}</p>
                                </>
                            )
                        })}
                    </History>
                </HistoryWrapper>
            </Header>
            <Title>В каких играх можно применить:</Title>
            <NFTWrapper>
                <NFTItem>
                    <NFTIconWrapper>
                        <NFTIcon
                            src='https://sun9-53.userapi.com/impg/nahSdfwLaF1wtr3t2BZClD5tzlV5QdQM2md2LQ/V90wV97dZ8g.jpg?size=1000x1000&quality=96&sign=6307804f4ad9cab1f63fbaf991a44f64&type=album'/>
                    </NFTIconWrapper>
                    <GameName>Pubg</GameName>
                </NFTItem>
                <NFTItem>
                    <NFTIconWrapper>
                        <NFTIcon
                            src='https://sun9-2.userapi.com/impg/qoyA-ZRDr3qQ-Gm_FA82XKJvCd8BXBRQnnC-Jg/n6ucknLoeZ0.jpg?size=1000x1000&quality=96&sign=f542227dd0a878e59fbdabad472f1519&type=album'/>
                    </NFTIconWrapper>
                    <GameName>FortNite</GameName>
                </NFTItem>
                <NFTItem>
                    <NFTIconWrapper>
                        <NFTIcon
                            src='https://sun9-42.userapi.com/impg/FUsiXIoJ2iS9mkft7iq--ycjWGYeM6JB76gMpQ/dg2FsnemIYw.jpg?size=1000x1000&quality=96&sign=b7af4f67ab8765e4ebb11cf6f09b71bc&type=album'/>
                    </NFTIconWrapper>
                    <GameName>CSGO</GameName>
                </NFTItem>
            </NFTWrapper>
        </MainWrapper>
    )
}

export default NftBlockInfo
