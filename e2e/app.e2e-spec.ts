import { PCComponentPage } from './app.po';

describe('pc-component App', () => {
  let page: PCComponentPage;

  beforeEach(() => {
    page = new PCComponentPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
