const jsonata = require("jsonata");

module.exports = async function (context, req) {

    context.log('JavaScript JSONata function processed a request.');

    const has_data = (req.query.jsonata && req.body);
    const responseMessage = has_data
        ? jsonata(req.query.jsonata).evaluate(req.body)
        : "This JSONata function executed successfully. Pass a jsonata in the query string and JSON in the request body for an evaluated response.";

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseMessage
    };
}