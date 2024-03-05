import { expect, test } from 'vitest'
import packageJson from './package.json' assert { type: 'json' }

test('project setup', () => {
  expect(packageJson.name).toBe('ad-coding-challenges')
})
