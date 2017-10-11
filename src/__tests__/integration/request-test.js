import request from 'Core/ajax';

test('should return a response', () => [
  const response = request('/posts').then(response => response);
])
