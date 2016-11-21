import { EuronewsCmsV2Page } from './app.po';

describe('euronews-cms-v2 App', function() {
  let page: EuronewsCmsV2Page;

  beforeEach(() => {
    page = new EuronewsCmsV2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
