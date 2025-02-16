# playwright-ui-solid

npx playwright test
npx playwright show-report


docker build -t playwright-tests .
docker run --rm playwright-tests

docker run --rm -v $(pwd)/playwright-report:/app/playwright-report playwright-tests
npx playwright show-report playwright-report
