let start = (config)=>{
    let hConfig = __handle_config(config)
    __send_message(
        __TYPE.BIOMETRICS.CHECK.START,
        hConfig
    )
}
export default {
    start
}