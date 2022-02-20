from transport.db.models.skins import Skins


def create_skin(fields) -> Skins:
    return Skins.create(
        skin_name=fields['skin_name'],
        image_link=fields['image_link'],
        video_game=fields['video_game']
    )


def get_all_skins(limit, offset):
    query = Skins.select().limit(limit).offset(offset).order_by(
        Skins.skin_id.desc())
    skins_list = query.dicts().execute()
    return skins_list


def get_one_skin_by_id(skin_id):
    query = Skins.select().where(Skins.skin_id == skin_id)
    skin_list = query.dicts().execute()
    return skin_list


def remove_skin_by_id(current_id):
    skin = Skins.get(Skins.skin_id == current_id)
    skin.delete_instance()
