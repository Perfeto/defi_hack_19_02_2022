from peewee import *

def init_connection():
    return PostgresqlDatabase(database='default_db', user='gen_user',
                              password='cxrqad9br',
                              host='85.193.81.177', port='5432')

conn = init_connection()


class BaseModel(Model):
    class Meta:
        database = conn


class Users(BaseModel):
    user_id = AutoField(column_name='user_id', null=False, primary_key=True)
    user_name = TextField(column_name='user_name', null=False, unique=True)
    verificate = BooleanField(column_name='verificate',default=False)
    nft_list = TextField(column_name='nft_list', null=False, unique=True)

    class Meta:
        database = conn
        table_name = 'users'


conn.create_tables([Users])