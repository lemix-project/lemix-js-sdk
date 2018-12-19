/**
 * 隐藏导航栏
 * @param isHidden
 *
 * @return void
 */
let setNavigationBarHidden = (isHidden) => {
    __send_message(
        __TYPE.UI.STYLE.SET_NAVIGATION_BAR_HIDDEN,
        {
            isHidden: isHidden
        }
    )
}
/**
 * 设置导航栏背景颜色
 * @param color
 *
 * @return void
 */
let setNavigationBackgroundColor = (color) => {
    __send_message(
        __TYPE.UI.STYLE.SET_NAVIGATION_BACKGROUND_COLOR,
        {
            color: color
        }
    )
}
/**
 * 设置导航标题
 * @param title
 *
 * @return void
 */
let setNavigationTitle = (title) => {
    __send_message(
        __TYPE.UI.STYLE.SET_NAVIGATION_TITLE,
        {
            title: title
        }
    )
}

let setStatusBarHidden = (isHidden) => {
    __send_message(
        __TYPE.UI.STYLE.SET_STATUS_BAR_HIDDEN,
        {
            isHidden: isHidden
        }
    )
}

let setNavigationItemColor = (color) => {
    __send_message(
        __TYPE.UI.STYLE.SET_NAVIGATION_ITEM_COLOR,
        {
            color: color
        }
    )
}

let setStatusBarStyle = (style) => {
    __send_message(
        __TYPE.UI.STYLE.SET_STATUS_BAR_STYLE,
        {
            style: style
        }
    )
}

let getNavigationBarHeight = (config) => {
    let hConfig = __handle_config(config)
    __send_message(
        __TYPE.UI.STYLE.GET_NAVIGATION_BAR_HEIGHT,
        hConfig
    )
}

export default {
    setNavigationBarHidden,
    setNavigationBackgroundColor,
    setNavigationTitle,
    setStatusBarHidden,
    setNavigationItemColor,
    setStatusBarStyle,
    getNavigationBarHeight
}