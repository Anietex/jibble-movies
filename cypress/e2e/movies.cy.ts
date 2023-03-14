describe('Movie List', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('displays movie titles, years and IMDB ids', () => {
        cy.get('.movie-item')
            .should('have.length.greaterThan', 0)
            .each((movie) => {
                cy.wrap(movie).find('[data-test-title]')
                cy.wrap(movie).find('[data-test-year]')
                cy.wrap(movie).find('[data-test-imdbID]')
            })
    })

    it('browses movies using pagination', () => {
        cy.get('.pagination')
            .should('have.length.greaterThan', 0)

        cy.get('.pagination .v-pagination__item button')
            .should('have.length.greaterThan', 1)
            .first()
            .click()

        cy.get('.movie-item')
            .should('have.length', 10)
    })


    it('searches for movies by title', () => {
        cy.get('.search-input')
            .type('Waterworld')

        cy.get('.movie-item')
            .should('have.length.greaterThan', 1)
            .first()
            .should('contain', 'Waterworld')
    })


    it('stars/unstars movies and keeps starred ones in a "Favourites" section', () => {
        // Star a movie
        cy.get('.movie-item')
            .first()
            .find('.add-to-favorite')
            .click()


        cy.get('.favourites-tab-action')
            .first()
            .click()



        // Verify the movie is in the "Favourites" section
        cy.get('.favourite-movies-tab')
            .should('exist')
            .find('.movie-item')
            .should('have.length.greaterThan', 0)
            .each((movie) => {
                cy.wrap(movie).find('[data-test-title]')
                cy.wrap(movie).find('[data-test-year]')
                cy.wrap(movie).find('[data-test-imdbID]')

            })

        // Unstar the movie
        cy.get('.favourite-movies-tab')
            .find('.add-to-favorite')
            .click()
        // Verify the movie is not in the "Favourites" section anymore
        cy.get('.favourite-movies-tab')
            .find('.movie-item')
            .should('not.exist')
    })
})