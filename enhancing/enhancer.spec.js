const enhancer = require('./enhancer.js');
// test away!


describe('enhancer.js', () => {
  describe('repair(item)', () => {
    it('Should return durability to 100',() => {
      const item = {
        name: 'cedric',
        durability: 65,
        enhancement: 5
      };
      expect(enhancer.repair(item).durability).toBe(100);
      
    });
  })
})



describe('enhancer.js', () => {
  describe('succeed(item)', () => {
    it('should increase items enhancement by 1',() => {
      const item = {
        name: 'cedric',
        durability: 65,
        enhancement: 5
      };
      expect(enhancer.succeed(item).enhancement).toBe(6);
    });
    it('should not increase enhancement level if level of enhancement is 20', () => {
      const item = {
        name: 'cedric',
        durability: 65,
        enhancement: 20
      };

      expect(enhancer.succeed(item).enhancement).toBe(20);
    });
  })
})

describe('enhancer.js', () => {
  describe('fail(item)', () => {
    it('should decrease durability of the item by 5 if enhancement is less than 15', () => {
      const item = {
        name: 'cedric',
        durability: 65,
        enhancement: 14
      };

      expect(enhancer.fail(item).durability).toBe(60);

    });
    it('should decrease durability of the item by 10 if enhancement is 15 or more', () => {
      const item = {
        name: 'cedric',
        durability: 65,
        enhancement: 17
      };

      expect(enhancer.fail(item).durability).toBe(55);

    });
    it('should decrease enhancement level of the item by 1 if enhancement is 16 or more', () => {
      const item = {
        name: 'cedric',
        durability: 65,
        enhancement: 17
      };

      expect(enhancer.fail(item).enhancement).toBe(16);

    });
    
  })
})