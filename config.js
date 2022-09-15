const pathMap = {
    local: '.env.local',
    test: '.env.test',
    prod: '.env',
};

require('dotenv').config({ path: pathMap[process.env.ENV] });
