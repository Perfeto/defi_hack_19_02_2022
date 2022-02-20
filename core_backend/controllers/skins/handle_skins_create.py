from transport.db.repository.skins_repository import create_skin


def handle_skins_create(fields):
    data_for_create = {'skin_name': fields.skin_name, 'image_link': fields.image_link, 'video_game': fields.video_game}
    return create_skin(data_for_create)
