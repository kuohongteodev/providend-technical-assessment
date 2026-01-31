export const mockData = {
  clients: [
    {
      clientId: 'bb4d460d-b86f-4ae8-bf01-1826053f0ff3',
      name: 'John Doe',
    },
    {
      clientId: 'aa3c1234-c56d-7ef8-g90h-1234567890ij',
      name: 'Jane Smith',
    },
  ],
  notes: [
    {
      id: 1,
      clientId: 'bb4d460d-b86f-4ae8-bf01-1826053f0ff3',
      content: 'This is a note for John Doe.',
      createdAt: new Date('2024-01-15T10:00:00Z'),
      authorId: 'admin-user-001',
    },
    {
      id: 2,
      clientId: 'aa3c1234-c56d-7ef8-g90h-1234567890ij',
      content: 'This is a note for Jane Smith.',
      createdAt: new Date('2024-02-20T14:30:00Z'),
      authorId: 'admin-user-001',
    },
  ],
};
