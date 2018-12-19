/**
 * 打开相机
 * @param config
 * @param callbacks
 *
 * @return 图片
 */

let openCamera = function (config) {
    let hConfig = __handle_config(config)
    __send_message(
        __TYPE.IMAGE.CAMERA.OPEN,
        hConfig
    )
}


export default {
    openCamera
}