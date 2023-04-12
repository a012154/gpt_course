export function sendJSONresponse(res, status, content) {
    res.status(status)
    res.json(content)
}

export function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}