from peewee import *
import urllib.parse as url_parse_lib
from settings.app_config import app_config


# def init_connection():
#     for i in range(0, 10):
#         print(app_config.database_dsn)
#
#     data_base_dsn = url_parse_lib.urlparse(app_config.database_dsn)
#     return PostgresqlDatabase(database=data_base_dsn.path[1:], user=data_base_dsn.username,
#                               password=data_base_dsn.password,
#                               host=data_base_dsn.hostname, port=data_base_dsn.port)
def init_connection():
    return PostgresqlDatabase(database='default_db', user='gen_user',
                              password='cxrqad9br',
                              host='85.193.81.177', port='5432')


conn = init_connection()


class BaseModel(Model):
    class Meta:
        database = conn


# class VideoGames(BaseModel):
#     id = AutoField(column_name='id', null=False, primary_key=True)
#     game_name = TextField(column_name='game_name', null=False, unique=True)
#     link_to_game = TextField(column_name='link_to_image', null=False, unique=True)
#
#     class Meta:
#         database = conn
#
#
# class Story(BaseModel):
#     id = AutoField(column_name='id', null=False, primary_key=True)
#     from_id = TextField(column_name='from_id', null=False, unique=True)
#     to_id = TextField(column_name='to_id', null=False, unique=True)
#
#     class Meta:
#         database = conn


class Skins(BaseModel):
    skin_id = AutoField(column_name='skin_id', null=False, primary_key=True)
    skin_name = TextField(column_name='skin_name', null=False, unique=True)
    image_link = TextField(column_name='image_link', null=False, unique=True)
    video_game = TextField(column_name='video_game', null=False)

    class Meta:
        database = conn
        table_name = 'skins'


conn.create_tables([Skins])
