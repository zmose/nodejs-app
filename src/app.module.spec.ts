import { AppModule } from "./app.module"

describe('app.module.ts', () => {

    let appModule: AppModule;

    beforeEach(() => {
        appModule = new AppModule();
    })

    test('AppModule has been created', () => {
        expect(appModule).toBeInstanceOf(AppModule);
    })
})