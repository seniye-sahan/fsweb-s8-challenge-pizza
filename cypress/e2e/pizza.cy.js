describe("Pizza Order Form Tests", () => {

  beforeEach(() => {
    cy.visit("http://localhost:5173");
    cy.contains("ACIKTIM").click();   // Home → OrderForm sayfasına geçiş
  });

  // 1️⃣ İsim input testi
  it("inputa bir metin girilebilmeli", () => {
    cy.get('[data-testid="name-input"]')
      .type("Seniye Şahan")
      .should("have.value", "Seniye Şahan");
  });

  // 2️⃣ Birden fazla malzeme seçilebilmeli
  it("birden fazla malzeme seçilebilmeli", () => {
    cy.get('[data-testid="topping-pepperoni"]').check();
    cy.get('[data-testid="topping-domates"]').check();
    cy.get('[data-testid="topping-sosis"]').check();

    cy.get('[data-testid="topping-pepperoni"]').should("be.checked");
    cy.get('[data-testid="topping-domates"]').should("be.checked");
    cy.get('[data-testid="topping-sosis"]').should("be.checked");
  });

  // 3️⃣ Form gönderilebilmeli
  it("form gönderilebilmeli", () => {

    // Boyut seç
    cy.get('input[value="Küçük"]').check();

    // En az 4 topping seç (zorunlu olduğu için)
    cy.get('[data-testid="topping-pepperoni"]').check();
    cy.get('[data-testid="topping-domates"]').check();
    cy.get('[data-testid="topping-sosis"]').check();
   cy.contains("label", "Mısır").find("input").check();


    // İsim gir
    cy.get('[data-testid="name-input"]').type("Seniye");

    // Submit butona bas
    cy.get('[data-testid="submit-button"]').click();

    // Success sayfası açıldı mı?
    cy.contains("TEBRİKLER").should("exist");
  });

});
