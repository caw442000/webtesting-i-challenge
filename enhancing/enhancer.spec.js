const enhancer = require('./enhancer.js');
// test away!


describe('enhancer.js', () => {
  describe('repair(item)', () => {
    it.todo('Should return durability to 100%');
  })
})



describe('enhancer.js', () => {
  describe('success(item)', () => {
    it.todo('should increase items enhancement by 1');
    it.todo('should not increase enhancement level if level of enhancement is 20');
  })
})

describe('enhancer.js', () => {
  describe('fail(item)', () => {
    it.todo('should decrease durability of the item by 5 if enhancement is less than 15');
    it.todo('should decrease durability of the item by 10 if enhancement is 15 or more');
    it.todo('should decrease enhancement level of the item by 1 if enhancement is 16 or more');
    
  })
})