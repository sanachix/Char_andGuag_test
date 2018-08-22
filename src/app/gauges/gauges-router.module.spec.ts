import { GaugesRouterModule } from './gauges-router.module';

describe('GaugesRouterModule', () => {
  let gaugesRouterModule: GaugesRouterModule;

  beforeEach(() => {
    gaugesRouterModule = new GaugesRouterModule();
  });

  it('should create an instance', () => {
    expect(gaugesRouterModule).toBeTruthy();
  });
});
