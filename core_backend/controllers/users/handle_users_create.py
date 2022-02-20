from transport.db.repository.users_repository import create_user


def handle_users_create(fields):
    data_for_create = {'user_name': fields.user_name, 'verificate': fields.verificate, 'nft_list': fields.nft_list}
    return create_user(data_for_create)
