describe('optIn' function () {

  var scope,
  element,
  compiled,
  html,
  img;

  beforeEach(module("formApp"));
  beforeEach(inject(function($rooteScope, $compile) {
    scope = $rootScope.$new();
    img = '<div></div>';
    html = "<opt-in>" + img + "</opt-in>";
    compiled = $compile(html);
    element = compiled(scope);
    scope.$digest();
  }));

  it('should render each form with an image', function(){
    expect(element.text()).toContain(img);
    expect(element.text()).toContain('First name:');
    expect(element.text()).toContain('Last name:');
  })
});