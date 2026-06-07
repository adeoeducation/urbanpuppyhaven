import { runPhysicsTestCases } from '../src/aura/physicsTestCases.js'

const report = runPhysicsTestCases()

for (const result of report.results) {
  const status = result.passed ? 'PASS' : 'FAIL'
  console.log(`${status} ${result.id}: expected ${result.expected}, got ${result.actual}`)
}

if (!report.passed) {
  process.exitCode = 1
}
