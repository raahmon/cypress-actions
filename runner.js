const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');

const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6ImNmYTVlOGY2LTZlOTEtNDhjYi1iZTFhLTYzOTQzMzExYTBlZC0xNzI4NTc1Njg1MTkwIiwiZXhwIjo0MTAyNDQ0ODAwMDAwLCJ2ZXIiOiIwIiwic2VzIjoiNDg2ZmU3YzItODdhNi00NzQzLWI0MWMtZWRlMWI0MWUzMzgxIiwidHlwZSI6InQifQ.AKkzr5BDKgCqFeze-wqvyI0awPLGvnba-11UC7lGhW0'

cypress.run({
  // specs to run here
})
.then((results) => {
  const args = {
    target: TOKEN,
  }
  tesults.results(results, args);
})
.catch((err) => {
 console.error(err)
})
