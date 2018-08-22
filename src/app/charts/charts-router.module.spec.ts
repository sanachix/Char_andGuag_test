import { ChartsRouterModule } from './charts-router.module';

describe('ChartsRouterModule', () => {
  let chartsRouterModule: ChartsRouterModule;

  beforeEach(() => {
    chartsRouterModule = new ChartsRouterModule();
  });

  it('should create an instance', () => {
    expect(chartsRouterModule).toBeTruthy();
  });
});
