import image from './image'
import core from './core'
import TYPE from './type'
import ui from './ui'
import net from './net'
import io from './io'
import map from './map'
import call from './call'
import data from './data'
import biometrics from './biometrics'

window.$__set_platform__ = core.setPlatform
window.__send_message = core.sendMessage
window.__TYPE = TYPE
window.__handle_config = core.handleConfig
window.__load_callback = core.loadCallback
window.__distory_callback = core.distoryCallback

window.$__get_platform__ = core.getPlatform


window.$lemix = {
    image,
    ui,
    net,
    io,
    map,
    call,
    data,
    biometrics
}
