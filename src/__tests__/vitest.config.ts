import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    testTimeout: 60000,
    reporters: ['default', 'junit'],
    outputFile: 'junit.xml',
    exclude: ['**/node_modules/**', '**/src/**'],
    onConsoleLog(log: string, type: 'stdout' | 'stderr'): false | void {
      console.log('log in test: ', log);
      if (log === 'message from third party library' && type === 'stdout') {
        return false;
      }
    }
  },
})