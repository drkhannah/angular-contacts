import { AngularGradesPage } from './app.po';

describe('angular-grades App', () => {
  let page: AngularGradesPage;

  beforeEach(() => {
    page = new AngularGradesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
