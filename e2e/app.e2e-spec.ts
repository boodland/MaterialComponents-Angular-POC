import { AppPage } from './app.po';

describe('material-components-angular-poc App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display app title', () => {
    page.navigateTo();
    expect(page.getAppTitle()).toEqual('Subject Hub');
  });
});
