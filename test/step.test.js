const login = require('./login.fn.js')
let configLogin = require('./config.login.js');

const createtask = require('./createtask.fn.js')
let configCreateTask = require('./config.createtask.js');

/*describe('Login', () => {
    const config = configLogin;
    jest.setTimeout(config.timeout);

    it('should login correctly', () => {
        return login(config);
    });

});*/

describe('CreateTask', () => {
    const config = configCreateTask;
    jest.setTimeout(config.timeout);

    it('should createtask correctly', () => {
        return createtask(config);
    });

});
