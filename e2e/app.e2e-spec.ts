import { UnogamedevPage } from './app.po';

describe('unogamedev App', () => {
  let page: UnogamedevPage;

  beforeEach(() => {
    page = new UnogamedevPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
