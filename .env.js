const production = {
    ...process.env,
    NODE_ENV: process.env.NODE_ENV || 'production',
};

const development = {
    ...process.env,
    NODE_ENV: process.env.NODE_ENV || 'development',
    PORT: '9000',
    Meta_WA_accessToken:'EABLtwfrbyC0BADuFamFdnQyXkI5NMFnWnanGXd0cWEWMy8u3mx056j3NOqwv7xQ8MVHrbZBiqL5nB1L6HncdlLKgH0D69Hb4nWilQZCje1fyGeKo5Tej48M3XEA3zaZAZAv1HgxZAfOQZCQL5sHeDmtkN8N8HzudeqQYTWUpNSQsC8MDGChvkDnmZBcZCZCCSw2TAjjHhvUVvsAZDZD',
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