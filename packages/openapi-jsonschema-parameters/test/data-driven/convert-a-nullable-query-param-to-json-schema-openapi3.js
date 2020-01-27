module.exports = {
  parameters: [
    {
      in: 'query',
      name: 'foo',
      required: true,
      schema: {
        nullable: true,
        type: 'string'
      }
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
