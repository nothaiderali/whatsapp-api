const production = {
    ...process.env,
    NODE_ENV: process.env.NODE_ENV || 'production',
};

const development = {
    ...process.env,
    NODE_ENV: process.env.NODE_ENV || 'development',
    PORT: '9000',
    Meta_WA_accessToken:'EABLtwfrbyC0BAFNJdN1Oq6es1hUhycGWpK1C4iLU4XfUM9hvMZAM3Ul5om62ZBC9OogDhbzKZBgcyZBlLjPApeP7vBlyzeJOXXOZBgB1hZAZCRJ5VCiGCuHTpe0XaCCyAzCefgDGI3sjOrXuliWkoeVcyzllkxpBqe5SDDi28YjZASeE4nEPqZCnzSTgF1qgseY1aRVoRSlYZCkQZDZD',
    Meta_WA_SenderPhoneNumberId: '105055832516532',
    Meta_WA_wabaId: '115541034788584',
    Meta_WA_VerifyToken: 'YouCanSetYourOwnToken',
};

const fallback = {
    ...process.env,
    NODE_ENV: undefined,
};

module.exports = (environment) => {
    console.log(`Execution environment selected is: "${environment}"`);
    if (environment === 'production') {
        return production;
    } else if (environment === 'development') {
        return development;
    } else {
        return fallback;
    }
};