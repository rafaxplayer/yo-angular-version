import { YoPage } from './app.po';

describe('yo App', () => {
  let page: YoPage;

  beforeEach(() => {
    page = new YoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
