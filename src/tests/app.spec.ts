import Application from '../app';
const startApplication = new Application();

describe('This is test case about application', () => {
  it('test thoi chu gi nua', () => {
    expect(startApplication.start()).toBe(undefined);
  });
});

/* 
    Test case to initialize Application
*/