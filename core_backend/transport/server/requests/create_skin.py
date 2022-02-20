from pydantic import BaseModel


class SkinFields(BaseModel):
    skin_name: str
    image_link: str
    video_game: str
