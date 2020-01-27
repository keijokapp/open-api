module.exports = {
  parameters: [
    {
      in: 'query',
      name: 'search',
      type: 'string',
      'x-custom': 'value',
      nullable: true
    }
  ],

  outputSchema: {
    query: {
      properties: {
        search: {
          type: ['string', 'null'],
          'x-custom': 'value'
        }
      },
      required: []
    }
  }
};
