describe('store-ui-shared: Header component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=header--primary&args=title:Hola'));
    
    it('should render the component', () => {
      cy.get('h6').should('contain', 'Hola');
    });
});
