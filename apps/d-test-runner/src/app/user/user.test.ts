import { dCaveApiService, LoginDTO, RegisterUserDTO, UserStatuses } from '@d-cave/shared';
import { faker } from '@faker-js/faker';
import axios from 'axios';
import { environment } from '../../environments/environment';

describe('user', () => {
    const aIntance = axios.create();

    const apiService = new dCaveApiService(environment.apiUrl, aIntance);

    function registerUser(name: string, password: string) {
        const registerDTO = new RegisterUserDTO({ name, password });

        return apiService.apiAuthRegister(registerDTO);
    }

    function loginUser(name: string, password: string) {
        const loginDTO = new LoginDTO({ name, password });

        return apiService.apiAuthLogin(loginDTO);
    }

    function activateUser(id: string) {
        return apiService.apiAdminUserManagementActivate(id);
    }

    function loadUsers() {
        return apiService.apiAdminUserManagementGet();
    }

    function loadMasters() {
        return apiService.apiMasters();
    }

    async function findUserByName(name: string) {
        const users = await loadUsers();
        const testUser = users.find((user) => user.name === name);

        return testUser;
    }

    async function findMasterById(id: string) {
        const masters = await loadMasters();
        const testMaster = masters.find((master) => master.id === id);

        return testMaster;
    }

    function loadMasterCampaigns() {
        return apiService.apiMastersCampaignsGet();
    }

    function removeUser(id) {
        return apiService.apiAdminUserManagementDelete(id);
    }

    function createTokenInterceptor(token: string) {
        return aIntance.interceptors.request.use((config) => {
            config.headers['Authorization'] = `Bearer ${token}`;

            return config;
        });
    }

    function ejectTokenInterceptor(interceptorId: number) {
        aIntance.interceptors.request.eject(interceptorId);
    }

    it('create and activate', async () => {
        const testUsername = faker.internet.userName();
        const testPassword = faker.internet.password();

        await registerUser(testUsername, testPassword);

        const { accessToken: adminAccessToken } = await loginUser(
            environment.adminUsername,
            environment.adminPassword
        );

        const adminTokenInterceptorId = createTokenInterceptor(adminAccessToken);

        const disabledTestUser = await findUserByName(testUsername);

        expect(disabledTestUser.status).toBe(UserStatuses.Disabled);

        await activateUser(disabledTestUser.id);

        const activatedTestUser = await findUserByName(testUsername);

        expect(activatedTestUser.status).toBe(UserStatuses.Active);

        const { accessToken: testAccessToken } = await loginUser(testUsername, testPassword);

        ejectTokenInterceptor(adminTokenInterceptorId);

        const userTokenInterceptorId = createTokenInterceptor(testAccessToken);

        const campaigns = await loadMasterCampaigns();

        expect(campaigns.length).toBe(0);

        ejectTokenInterceptor(userTokenInterceptorId);

        createTokenInterceptor(adminAccessToken);

        await removeUser(activatedTestUser.id);

        const removedUser = await findUserByName(testUsername);

        expect(removedUser).toBeUndefined();

        const removedMaster = await findMasterById(activatedTestUser.id);

        expect(removedMaster).toBeUndefined();
    });
});
