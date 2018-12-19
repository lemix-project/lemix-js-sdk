let scanQRCode = (config) => {
    let hConfig = __handle_config(config)
    __send_message(
        __TYPE.IMAGE.CODE.SCANQRCODE,
        hConfig
    )
}

export default {
    scanQRCode
}