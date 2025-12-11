import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  // Automatically clear mock calls, instances, contexts and results before every test
  clearMocks: true,

  // Indicates whether the coverage information should be collected while executing the test
  collectCoverage: true,

  // An array of glob patterns indicating a set of files for which coverage information should be collected
  collectCoverageFrom: [
    "src/**/*.{js,jsx,ts,tsx}",
    "!src/**/*.d.ts",
  ],

  // The directory where Jest should output its coverage files
  coverageDirectory: "coverage",

  // An array of regexp pattern strings that are matched against all source file paths, matched files will skip transformation
  transformIgnorePatterns: [
    "node_modules/(?!(d3-color|d3-array|d3-scale)/)", // Adjust based on Docusaurus specific modules
  ],

  // The test environment that will be used for testing
  testEnvironment: "jsdom",

  // A map from regular expressions to paths to transformers
  transform: {
    "^.+\.(ts|tsx)$": "ts-jest",
    "^.+\.(js|jsx)$": "<rootDir>/node_modules/babel-jest", // For Docusaurus's JS/JSX
  },

  // An array of file extensions your modules use
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],

  // A map from regular expressions to module names or to arrays of module names that allow to stub out resources with a single module
  moduleNameMapper: {
    // Handle CSS imports (with CSS modules)
    // https://jestjs.io/docs/webpack#handling-css-imports
    "^.+\.module\.(css|sass|scss)$": "identity-obj-proxy",

    // Handle image imports
    // https://jestjs.io/docs/webpack#handling-static-assets
    "^.+\.(jpg|jpeg|png|gif|webp|avif|svg)$": `<rootDir>/__mocks__/fileMock.js`,

    // Handle module aliases
    '^~/(.*)$': '<rootDir>/src/$1',
  },

  // The glob patterns Jest uses to detect test files
  testMatch: [
    "<rootDir>/tests/unit/**/*.test.{js,jsx,ts,tsx}",
  ],
};

export default config;
