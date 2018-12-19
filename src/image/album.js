let openAlbum = (config) => {
    let hConfig = __handle_config(config)
    __send_message(
        __TYPE.IMAGE.ALBUM.OPEN,
        hConfig
    )
}

export default {
    openAlbum
}