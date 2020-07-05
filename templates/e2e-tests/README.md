# e2e tests

## Usage

1. Configure target URL by setting a `BASE_URL` env variable
2. Run all tests with `npm test`

## Preconfigured scripts

- `npm run test:local` against **http://localhost:3000**

## Run one test/subset of tests only

- Add a `-- -t <describe>` or `-- -t <describe> <it>` to the end of your script to run a feature or standalone test
