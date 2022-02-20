from typing import List
from transport.db.models.users import Users as db_model_users
from pydantic import BaseModel


# class VideoGames(BaseModel):
#     id: str
#     game_name: str
#     link_to_game: str
#
#
# class Story(BaseModel):
#     id: str
#     from_id: str
#     to_id: str


class Users(BaseModel):
    user_id: str
    user_name: str
    verificate: str
    nft_list: str


# def map_video_games_db_to_http(model: db_model_video_games) -> VideoGames:
#     return VideoGames(
#         id=model.id,
#         game_name=model.game_name,
#         link_to_game=model.link_to_game
#     )
#
#
# def map_story_db_to_http(model: db_model_story) -> Story:
#     return Story(
#         id=model.id,
#         from_id=model.from_id,
#         to_id=model.to_id,
#     )


def map_users_db_to_http_post(model: db_model_users) -> Users:
    return Users(
        user_id=model.user_id,
        user_name=model.user_name,
        verificate=model.verificate,
        nft_list=model.nft_list
    )


def map_users_db_to_http_get(model: db_model_users) -> Users:
    return Users(
        user_id=model['user_id'],
        user_name=model['user_name'],
        verificate=model['verificate'],
        nft_list=model['nft_list']
    )


class UsersListing(BaseModel):
    users: List[Users]
