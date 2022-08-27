import { dCaveApiService, LoginDTO, RegisterUserDTO } from '@d-cave/shared';
import { environment } from '../../environments/environment';

describe('user', () => {
    const apiService = new dCaveApiService(environment.apiUrl);

    function registerUser(name, password) {
        const registerDTO = new RegisterUserDTO({ name, password });

        return apiService.apiAuthRegister(registerDTO);
    }

    function loginUser(name, password) {
        const loginDTO = new LoginDTO({ name, password });

        return apiService.apiAuthLogin(loginDTO);
    }

    it('register', async () => {
        // const name = faker.internet.userName();
        // const password = faker.internet.password();
        // const registerResponse = await registerUser(name, password);
        // expect(registerResponse).toBeNull();
    });

    it('activation', async () => {
        // const name = faker.internet.userName();
        // const password = faker.internet.password();
        // const registerResponse = await registerUser(name, password);
        // expect(registerResponse).toBeNull();
    });

    it('login', async () => {
        // const name = faker.internet.userName();
        // const password = faker.internet.password();
        // await registerUser(name, password);
        // const loginResponse = await loginUser(name, password);
        // expect(loginResponse).not.toBeNull();
        // expect(loginResponse.accessToken).toBe(expect.any(String));
    });

    it('admin check', () => {
        console.log(environment.adminPassword);
        console.log(environment.adminUsername);
    });
});
