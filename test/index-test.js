describe('functions', () => {
  describe('happyHolidays', function() {
    it('logs Happy holidays!', function() {
      const spy = expect.spyOn(console, 'log').andCallThrough();
  
      happyHolidays();
  
      expect(spy).toHaveBeenCalledWith('Happy holidays!');
  
      console.log.restore();
    })
  })

  describe('happyHolidaysTo(name)', () => {
    it('returns "Happy holidays, ${name}!"', () => {
      expect(happyHolidaysTo('you')).toEqual('Happy holidays, you!')
      expect(happyHolidaysTo('everyone')).toEqual('Happy holidays, everyone!')
    })
  })

  describe('happyCustomHolidayTo(holiday, name)', () => {
    it('returns "Happy ${holiday}, ${name}!"', () => {
      expect(happyCustomHolidayTo('Independence Day', 'you')).toEqual('Happy Independence Day, you!')
      expect(happyCustomHolidayTo('New Year', 'everyone')).toEqual('Happy New Year, everyone!')
    })
  })

  describe('happyCustomHolidayWithNameOptional(holiday, name)', function() {
    it('takes in two arguments, a name and a holiday, and name defaults to you', function() {
      expect(happyCustomHolidayWithNameOptional("Kwanzaa")).toEqual("Happy Kwanzaa, you!");
    })
  })
  
  describe('happyCustomHolidayWithNameOptional(holiday, name)', function() {
    it('takes in two arguments, a name and a holiday, and the default value can be overridden with an argument', function() {
      expect(happyCustomHolidayWithNameOptional("Diwali", "Gracie")).toEqual("Happy Diwali, Gracie!");
    })
  })  
})
