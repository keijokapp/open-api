module.exports = {
  parameters: [
    {
      in: 'path',
      name: 'foo',
      required: true,
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
      required: ['foo']
    }
  }
};
