module.exports = {
  parameters: [
    {
      in: 'query',
      name: 'foo',
      required: true,
      nullable: true,
      type: 'string'
    }
  ],
  outputSchema: {
    query: {
      properties: {
        foo: {
          type: ['string', 'null']
        }
      },
      required: ['foo']
    }
  }
};
