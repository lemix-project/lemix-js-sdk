let callCustom = (config)=>{
    let hConfig = __handle_config(config)
    __send_message(
        __TYPE.CALL.CUSTOMS.CALL_CUSTOM,
        hConfig
    )
}
export default {
    callCustom
}