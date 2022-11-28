yarn ng build error-banner --output-hashing=none

cat dist/apps/error-banner/runtime.js dist/apps/error-banner/polyfills.js dist/apps/error-banner/main.js > dist/error-banner.js
