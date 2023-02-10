const jsonata = require("jsonata");

module.exports = async function (context, req) {

    context.log('JavaScript JSONata function processed a request.');

    const has_data = (req.query.jsonata && req.body);
    const responseMessage = req.body ? has_data
        ? jsonata(req.query.jsonata).evaluate(req.body)
        : (req.body.jsonata && req.body.data)
        ? jsonata(req.body.jsonata).evaluate(req.body.data)
        : "This JSONata function executed successfully. Pass jsonata and data JSON for an evaluated response."
        : "This JSONata function executed successfully. Pass in paramenters for an evaluated response."

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseMessage
    };
}