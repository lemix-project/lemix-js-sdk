// 定位一次
let getLocation = (config)=>{
    let hConfig = __handle_config(config)
    __send_message(
        __TYPE.MAP.LOCATION.GET_POSITION,
        hConfig
    )
}
// 即时定位(打开)
let onInstantLocation = (config)=>{
    let hConfig = __handle_config(config)
    __send_message(
        __TYPE.MAP.LOCATION.ON_INSTANT_POSITION,
        hConfig
    )
}
// 即时定位(关闭)
let offInstantLocation = (config)=>{
    let hConfig = __handle_config(config)
    __send_message(
        __TYPE.MAP.LOCATION.OFF_INSTANT_POSITION,
        hConfig
    )
}
export default {
    getLocation,
    onInstantLocation,
    offInstantLocation
}