let push = (type, aim, config) => {
    __send_message(
        __TYPE.UI.NAVIGATION.PUSH,
        {
            aim: aim,
            type: type,
            config: config
        }
    )
}
let pop = (layer) => {
    __send_message(
        __TYPE.UI.NAVIGATION.POP,
        {
            layer: layer
        }
    )
}
let close = (layer) => {
    __send_message(
        __TYPE.UI.NAVIGATION.CLOSE,
        {
            layer: layer
        }
    )
}
let present = (type, aim, config) => {
    __send_message(
        __TYPE.UI.NAVIGATION.PRESENT,
        {
            type: type,
            aim: aim,
            config: config
        }
    )
}

export default {
    push, pop, close, present
}