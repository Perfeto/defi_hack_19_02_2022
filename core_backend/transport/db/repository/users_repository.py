from transport.db.models.users import Users


def create_user(fields) -> Users:
    return Users.create(
        user_name=fields['user_name'],
        verificate=fields['verificate'],
        nft_list=fields['nft_list']
    )


def get_all_users(limit, offset):
    query = Users.select().limit(limit).offset(offset).order_by(
        Users.user_id.desc())
    users_list = query.dicts().execute()
    return users_list


def get_one_user_by_id(user_id):
    query = Users.select().where(Users.user_id == user_id)
    user_id = query.dicts().execute()
    return user_id


def remove_user_by_id(current_id):
    user = Users.get(Users.user_id == current_id)
    user.delete_instance()
