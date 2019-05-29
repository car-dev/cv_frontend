import { AppRouttingModule } from './app-routting.module';

describe('AppRouttingModule', () => {
  let appRouttingModule: AppRouttingModule;

  beforeEach(() => {
    appRouttingModule = new AppRouttingModule();
  });

  it('should create an instance', () => {
    expect(appRouttingModule).toBeTruthy();
  });
});
