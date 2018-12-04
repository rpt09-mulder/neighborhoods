const Rooms = require('./room.js');

describe('test the helper functions for the Room Model', () => {

  let badDataExample = { user: 'Erica Bergnaum', title: 'testing', type: 'Shared Room', city: 'Lake Elnora', selfCheckin: false, superhost: true, descriptions: [{ title: 'headline', text: 'test1' }, { title: 'The space', text: 'test2' }, { title: 'Guest Access', text: 'test3' }, { title: 'Interaction with guests', text: 'test4' }, { title: 'Other things to note', text: 'test5' }], amenities: ['Kitchen', 'Iron', 'Free parking on premises', 'Wifi', 'Hangers', 'Laptop friendly workspace'], sleepingArrangements: [{ typeOfRoom: 'Bedroom', furniture: { typeOfFurniture: 'queen bed', qty: 1 } }] };
  let goodDataExample = { id: 99999, user: 'Erica Bergnaum', title: 'testing', type: 'Shared Room', city: 'Lake Elnora', selfCheckin: false, superhost: true, descriptions: [{ title: 'headline', text: 'test1' }, { title: 'The space', text: 'test2' }, { title: 'Guest Access', text: 'test3' }, { title: 'Interaction with guests', text: 'test4' }, { title: 'Other things to note', text: 'test5' }], amenities: ['Kitchen', 'Iron', 'Free parking on premises', 'Wifi', 'Hangers', 'Laptop friendly workspace'], sleepingArrangements: [{ typeOfRoom: 'Bedroom', furniture: { typeOfFurniture: 'queen bed', qty: 1 } }] };

  afterAll(() => {
    Rooms.disconnect();
  });

  describe('test the insertOne function', () => {
    test('insertOne should exist', () => {
      expect(Rooms.insertOne).toBeDefined();
    });

    test('insertOne should not insert a record unless it has an id', () => {
      Rooms.insertOne(badDataExample, (err, example) => {
        if (err) {
        }
        expect(err).toBeDefined();
      });

      Rooms.insertOne(goodDataExample, (err, example) => {
        if (err) {
        }
        expect(err).toBeUndefined();
      });
    });
  });
});