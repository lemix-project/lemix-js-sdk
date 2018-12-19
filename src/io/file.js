let deleteLongTermFile = (fileKey) => {
    __send_message(
        __TYPE.IO.FILE.DELETE_LONG_TERM_FILE,
        {
            fileKey:fileKey
        }
    )
}

let deleteShortTermFile = (fileKey) => {
    __send_message(
        __TYPE.IO.FILE.DELETE_SHORT_TERM_FILE,
        {
            fileKey:fileKey
        }
    )
}

let clearAllLongTermFiles = () => {
    __send_message(
        __TYPE.IO.FILE.CLEAR_ALL_LONG_TERM_FILES,
        {}
    )
}

let clearAllShortTermFiles = () => {
    __send_message(
        __TYPE.IO.FILE.CLEAR_ALL_SHORT_TERM_FILES,
        {}
    )
}

export default {
    deleteLongTermFile,
    deleteShortTermFile,
    clearAllLongTermFiles,
    clearAllShortTermFiles
}