from typing import List
from transport.db.models.skins import Skins as db_model_skins
from pydantic import BaseModel
from gql import Client, gql
from gql.transport.aiohttp import AIOHTTPTransport


class Skins(BaseModel):
    skin_id: str
    skin_name: str
    image_link: str
    video_games: str
    nft_id: str


def map_skins_db_to_http_post(model: db_model_skins) -> Skins:
    return Skins(
        skin_id=model.skin_id,
        skin_name=model.skin_name,
        image_link=model.image_link,
        video_games=model.video_game
    )


async def map_skins_db_to_http_get(model: db_model_skins) -> Skins:
    transport = AIOHTTPTransport(url="https://net.ton.dev/graphql")
    client = Client(transport=transport, fetch_schema_from_transport=True)

    query = gql(
        """
        query { accounts (filter : {
            code_hash :{eq : "44b747a049166b48f981bee36e92a63f05a8845d8bd9be682d70392d67604e23"}
        })
        {
            id
        }}
        """
    )

    result = await client.execute_async(query)
    print(result)

    return Skins(
        skin_id=model['skin_id'],
        skin_name=model['skin_name'],
        image_link=model['image_link'],
        video_games=model['video_game'],
        nft_id=result['accounts'][0]['id']
    )


class SkinsListing(BaseModel):
    skins: List[Skins]
