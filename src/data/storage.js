let getLocalStorage = (config)=>{
    let hConfig = __handle_config(config)
    return __send_message(
        __TYPE.DATA.STORAGE.GET,
        hConfig,
        true
    )
}
let setLocalStorage = (config)=>{
    let hConfig = __handle_config(config)
    __send_message(
        __TYPE.DATA.STORAGE.SET,
        hConfig
    )
}
let clearLocalStorage = (config)=>{
    let hConfig = __handle_config(config)
    __send_message(
        __TYPE.DATA.STORAGE.CLEAR,
        hConfig
    )
}
let removeLocalStorage = (config)=>{
    let hConfig = __handle_config(config)
    __send_message(
        __TYPE.DATA.STORAGE.REMOVE,
        hConfig
    )
}
export default {
    getLocalStorage,
    setLocalStorage,
    clearLocalStorage,
    removeLocalStorage
}