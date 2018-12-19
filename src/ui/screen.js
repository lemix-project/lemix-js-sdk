/**
 * 获取宽度
 *
 * @return 宽度：float
 */
let getWidth = () => {
    __send_message(
        __TYPE.UI.SCREEN.GET_WIDTH,
        {}
    )
}

/**
 * 获取高度
 *
 * @return 高度：float
 */
let getHeight = () => {
    __send_message(
        __TYPE.UI.SCREEN.GET_HEIGHT,
        {}
    )
}

let rotate = (config) => {
    __send_message(
        __TYPE.UI.SCREEN.ROTATE,
        config
    )
}

export default {
    getWidth,
    getHeight,
    rotate
}