import filterQueryGenerator from '../filterQueryGenerator';

const payload = [
  {
    attribute_key: 'status',
    filter_operator: 'equal_to',
    values: [
      { id: 'pending', name: 'Pending' },
      { id: 'resolved', name: 'Resolved' },
    ],
    query_operator: 'and',
  },
  {
    attribute_key: 'assignee',
    filter_operator: 'equal_to',
    values: {
      id: 3,
      account_id: 1,
      auto_offline: true,
      confirmed: true,
      email: 'fayazara@gmail.com',
      available_name: 'Fayaz',
      name: 'Fayaz',
      role: 'agent',
      thumbnail:
        'https://www.gravatar.com/avatar/a35bf18a632f734c8d0c883dcc9fa0ef?d=404',
    },
    query_operator: 'and',
  },
  {
    attribute_key: 'id',
    filter_operator: 'equal_to',
    values: 'This is a test',
    query_operator: null,
  },
];

const finalResult = [
  {
    attribute_key: 'status',
    filter_operator: 'equal_to',
    values: ['pending', 'resolved'],
    query_operator: 'and',
  },
  {
    attribute_key: 'assignee',
    filter_operator: 'equal_to',
    values: [3],
    query_operator: 'and',
  },
  {
    attribute_key: 'id',
    filter_operator: 'equal_to',
    values: ['This is a test'],
    query_operator: null,
  },
];

describe('#filterQueryGenerator', () => {
  it('returns the correct format of filter query', () => {
    expect(filterQueryGenerator(payload)).toMatchObject(finalResult);
    expect(finalResult.every(i => Array.isArray(i.values))).toBe(true);
  });
});
