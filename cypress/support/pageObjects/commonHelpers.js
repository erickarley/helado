import './../commands'; // Import the commands for use in the page object files

class CommonHelpers {
  findBrokenLinks() {
    cy.get('a').each(link => {
      if (link.prop('href')) {
        cy.request({
          url: link.prop('href'),
          failOnStatusCode: false,
        });
        cy.log(link.prop('href'));
      }
    });
  }

  findMissingImages() {
    cy.get('img').each(image => {
      if (image.prop('src')) {
        if(String(image.prop('src')).indexOf('http')>=0) {  
            cy.request({
            url: image.prop('src'),
            failOnStatusCode: true,
            });
            cy.log(image.prop('src'));
        }
      }
    });
  }


  disableUncaughtExceptionHandling() {
    cy.disableUncaughtExceptionHandling(); // Use the custom command
  }

  enableUncaughtExceptionHandling() {
    cy.enableUncaughtExceptionHandling(); // Use the custom command
  }
}

export default new CommonHelpers();