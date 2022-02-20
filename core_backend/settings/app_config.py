import os

from pyaml_env import BaseConfig, parse_config


def init_config():
    path_to_settings = os.getenv("PATH_TO_SETTINGS")
    if path_to_settings is None:
        path_to_settings = 'settings/develop-config.yml'

    return BaseConfig(parse_config(path_to_settings))


app_config = init_config()
