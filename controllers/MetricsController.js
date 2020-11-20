

/* POST /metric/:key */
const setMetric = async (req, res, next) => {
    let { value } = req.body

    //Value Validation
    if (!value && value !== 0) return res.status(400).json({ error: `Field 'value' in body is ${value} which is not expected.` })
    if (typeof value !== "number") return res.status(400).json({ error: `Type of field 'value' in body is ${typeof value} which should be number.` })

    value = Math.round(value)
    //In case we don't have this key in storage before,It will put 0  as default value.
    if (!global.storage.metrics[req.params.key]) global.storage.metrics[req.params.key] = 0

    //Add value to the key in storage
    global.storage.metrics[req.params.key] += value

    //Subtract value from the key in storage after1 hour.
    setTimeout(() => {
        global.storage.metrics[req.params.key] -= value
    }, 1 * 60 * 60 * 1000)

    return res.status(200).json({})
}

/* GET /metric/:key/sum */
const getMetric = async (req, res, next) => {
    return res.status(200).json({ 
        value: 
        //Send 0 if key is not specified in the storage
        (global.storage.metrics[req.params.key]) 
        ? global.storage.metrics[req.params.key] : 0 })
}
module.exports = {
    setMetric,
    getMetric
}