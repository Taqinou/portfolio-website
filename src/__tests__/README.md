# Testing Guide

This project uses Jest and React Testing Library for testing.

## Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode (useful during development)
npm run test:watch

# Run tests with coverage report
npm run test:coverage
```

## Test Structure

```
src/__tests__/
├── components/     # Component tests
│   └── Button.test.tsx
└── hooks/          # Custom hooks tests
    └── useContactForm.test.ts
```

## Writing Tests

### Component Tests

Example test for a component:

```typescript
import { render, screen } from '@testing-library/react';
import MyComponent from '@/components/MyComponent';

describe('MyComponent', () => {
  it('renders correctly', () => {
    render(<MyComponent />);
    expect(screen.getByText('Hello')).toBeInTheDocument();
  });
});
```

### Hook Tests

Example test for a custom hook:

```typescript
import { renderHook, act } from '@testing-library/react';
import { useMyHook } from '@/hooks/useMyHook';

describe('useMyHook', () => {
  it('returns expected values', () => {
    const { result } = renderHook(() => useMyHook());
    expect(result.current.value).toBe(0);
  });
});
```

## Best Practices

1. **Test user behavior**, not implementation details
2. **Use semantic queries** (getByRole, getByLabelText) over getByTestId
3. **Keep tests simple and focused** - one test per behavior
4. **Mock external dependencies** (API calls, third-party libraries)
5. **Use descriptive test names** that explain what is being tested

## Coverage Goals

Aim for:
- 80%+ code coverage for critical business logic
- 100% coverage for utility functions
- Focus on testing user-facing features

## Troubleshooting

### Common Issues

**Issue**: Tests fail with module import errors
**Solution**: Check that `moduleNameMapper` in `jest.config.ts` matches your `tsconfig.json` paths

**Issue**: Tests timeout
**Solution**: Increase timeout in jest.config.ts or use `jest.setTimeout(10000)` in specific tests

**Issue**: Mock not working
**Solution**: Ensure mocks are cleared between tests using `beforeEach(() => jest.clearAllMocks())`
