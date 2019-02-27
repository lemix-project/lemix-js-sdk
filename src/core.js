let _platform = ''
let _callbackObj = new Object()

const __android__ = 'android'
const __ios__ = 'ios'

/**
 * 设置当前平台（通常由平台调用）
 * @param platform 平台名称：android / ios
 */
let setPlatform = (platform) => {
    _platform = platform
}

/**
 * 获取当前设置的所属平台
 * @returns {string} 平台名称：android / ios
 */
let getPlatform = () => {
    return _platform
}

/**
 * 调用平台入口函数
 * @param type
 * @param parameters
 */
let sendMessage = (type, parameters, isSync) => {
    let data = JSON.stringify({
        type: type,
        params: parameters,
        sync: isSync
    })
    if (getPlatform() === __android__) {
        // android消息发送
        return window.__js_android__.message(data)
    }
    else if (getPlatform() === __ios__) {
        // ios消息发送7
        let result = window.prompt(data)
        return result
    }
}

/**
 * 保存callback函数
 * @param uuid
 * @param fn
 */
let saveCallback = (fn) => {
    let uuid = createUUID()
    _callbackObj[uuid] = fn
    return uuid
}

/**
 * 读取callback函数
 * @param uuid
 * @returns {*}
 */
let loadCallback = function (uuid) {
    let arr = Array.prototype.slice.call(arguments)
    arr.splice(0, 1);
    return _callbackObj[uuid].apply(window, arr)
}

/**
 * 销毁uuid和callback映射关系
 * @param uuid
 */
let distoryCallback = (uuid) => {
    delete _callbackObj[uuid]
}

/**
 * create uuid
 */
let createUUID = (function (uuidRegEx, uuidReplacer) {
    return function () {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(uuidRegEx, uuidReplacer).toUpperCase();
    };
})(/[xy]/g, function (c) {
    var r = Math.random() * 16 | 0,
        v = c == "x" ? r : (r & 3 | 8);
    return v.toString(16);
})

/**
 * 统一处理config，把config中的回调函数传入saveCallback
 * @param config
 * @returns {*}
 */
let handleConfig = (config) => {
    for (let key in config) {
        if (typeof config[key] === "function") {
            config[key] = saveCallback(config[key])
        }
    }
    return config
}

export default {
    setPlatform,
    getPlatform,
    sendMessage,
    saveCallback,
    loadCallback,
    distoryCallback,
    createUUID,
    handleConfig
}