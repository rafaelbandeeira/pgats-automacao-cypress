import menu from "../menu"
import register from "../register"
import account from "../../fixtures/account.json";

class Login {
    signIn(user, password) {
        cy.get('[data-qa="login-email"]').type(user)
        cy.get('[data-qa="login-password"]').type(password)

        cy.get("[data-qa='login-button']").click()

        return menu
    }

    signUp(name, email) {
        cy.get('[data-qa="signup-name"]').type(name)
        cy.get('[data-qa="signup-email"]').type(email)
        cy.contains('button', 'Signup').click()

        return register
    }
}

export default new Login()