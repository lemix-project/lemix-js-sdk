/**
 * 同步请求
 * @param config { url,method,header,body,success,failed }
 */
let syncRequest = (config) => {
    return __send_message(
        __TYPE.NET.HTTP.SYNC_REQUEST,
        config,
        true
    )

}
/**
 * 异步请求
 * @param config { url,method,header,body,success,failed }
 */
let asyncRequest = (config) => {
    let hConfig = __handle_config(config)
    __send_message(
        __TYPE.NET.HTTP.ASYNC_REQUEST,
        hConfig
    )

}
/**
 * 上传文件
 * @param config { url,method,header,fileKey,success,failed }
 */
let uploadFile = (config) => {
    let hConfig = __handle_config(config)
    __send_message(
        __TYPE.NET.HTTP.UPLOAD_FILE,
        hConfig
    )
}
/**
 * 下载文件
 * @param config { url,method,header,success,failed }
 */
let downloadFile = (config) => {
    let hConfig = __handle_config(config)
    __send_message(
        __TYPE.NET.HTTP.DOWNLOAD_FILE,
        hConfig
    )

}

export default {
    syncRequest,
    asyncRequest,
    uploadFile,
    downloadFile
}