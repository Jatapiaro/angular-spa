import { SinglePageAngularPage } from './app.po';

describe('single-page-angular App', () => {
  let page: SinglePageAngularPage;

  beforeEach(() => {
    page = new SinglePageAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
