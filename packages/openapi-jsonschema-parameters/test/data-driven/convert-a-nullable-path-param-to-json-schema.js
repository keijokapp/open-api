module.exports = {
  parameters: [
    {
      in: 'path',
      name: 'foo',
      nullable: true,
      type: 'string'
    }
  ],
  outputSchema: {
    path: {
      properties: {
        foo: {
          type: ['string', 'null']
        }
      },
      required: []
    }
  }
};
