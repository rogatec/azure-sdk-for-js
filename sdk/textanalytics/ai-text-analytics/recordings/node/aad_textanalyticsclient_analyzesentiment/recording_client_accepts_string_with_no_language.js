let nock = require('nock');

module.exports.hash = "e0ed889302d1274a23ac0bff6be15e5b";

module.exports.testInfo = {"uniqueName":{},"newDate":{}}

nock('https://login.microsoftonline.com:443', {"encodedQueryParams":true})
  .post('/azure_tenant_id/oauth2/v2.0/token', "response_type=token&grant_type=client_credentials&client_id=azure_client_id&client_secret=azure_client_secret&scope=https%3A%2F%2Fcognitiveservices.azure.com%2F.default")
  .reply(200, {"token_type":"Bearer","expires_in":3599,"ext_expires_in":3599,"access_token":"access_token"}, [
  'Cache-Control',
  'no-cache, no-store',
  'Pragma',
  'no-cache',
  'Content-Type',
  'application/json; charset=utf-8',
  'Expires',
  '-1',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains',
  'X-Content-Type-Options',
  'nosniff',
  'x-ms-request-id',
  '0745be3c-929c-40ca-81aa-ddb24c172900',
  'x-ms-ests-server',
  '2.1.10946.15 - NCUS ProdSlices',
  'P3P',
  'CP="DSP CUR OTPi IND OTRi ONL FIN"',
  'Set-Cookie',
  'fpc=AsgbUVriKa1OiJeNi8g3gOr0CyfMAQAAAHDFyNYOAAAA; expires=Sun, 13-Sep-2020 17:48:32 GMT; path=/; secure; HttpOnly; SameSite=None',
  'Set-Cookie',
  'x-ms-gateway-slice=estsfd; path=/; SameSite=None; secure; HttpOnly',
  'Set-Cookie',
  'stsservicecookie=estsfd; path=/; SameSite=None; secure; HttpOnly',
  'Date',
  'Fri, 14 Aug 2020 17:48:31 GMT',
  'Content-Length',
  '1500'
]);

nock('https://endpoint', {"encodedQueryParams":true})
  .post('/text/analytics/v3.1-preview.1/sentiment', {"documents":[{"id":"0","text":"I had a wonderful trip to Seattle last week and even visited the Space Needle 2 times!","language":"en"},{"id":"1","text":"Unfortunately, it rained during my entire trip to Seattle. I didn't even get to visit the Space Needle","language":"en"},{"id":"2","text":"I went to see a movie on Saturday and it was perfectly average, nothing more or less than I expected.","language":"en"},{"id":"3","text":"I didn't like the last book I read at all.","language":"en"}]})
  .reply(200, {"documents":[{"id":"0","sentiment":"positive","confidenceScores":{"positive":0.99,"neutral":0.01,"negative":0},"sentences":[{"sentiment":"positive","confidenceScores":{"positive":0.99,"neutral":0.01,"negative":0},"offset":0,"length":86,"text":"I had a wonderful trip to Seattle last week and even visited the Space Needle 2 times!"}],"warnings":[]},{"id":"1","sentiment":"negative","confidenceScores":{"positive":0,"neutral":0,"negative":1},"sentences":[{"sentiment":"negative","confidenceScores":{"positive":0,"neutral":0,"negative":1},"offset":0,"length":58,"text":"Unfortunately, it rained during my entire trip to Seattle."},{"sentiment":"neutral","confidenceScores":{"positive":0.01,"neutral":0.7,"negative":0.29},"offset":59,"length":43,"text":"I didn't even get to visit the Space Needle"}],"warnings":[]},{"id":"2","sentiment":"positive","confidenceScores":{"positive":1,"neutral":0,"negative":0},"sentences":[{"sentiment":"positive","confidenceScores":{"positive":1,"neutral":0,"negative":0},"offset":0,"length":101,"text":"I went to see a movie on Saturday and it was perfectly average, nothing more or less than I expected."}],"warnings":[]},{"id":"3","sentiment":"negative","confidenceScores":{"positive":0.01,"neutral":0.03,"negative":0.96},"sentences":[{"sentiment":"negative","confidenceScores":{"positive":0.01,"neutral":0.03,"negative":0.96},"offset":0,"length":42,"text":"I didn't like the last book I read at all."}],"warnings":[]}],"errors":[],"modelVersion":"2020-04-01"}, [
  'Transfer-Encoding',
  'chunked',
  'Content-Type',
  'application/json; charset=utf-8',
  'csp-billing-usage',
  'CognitiveServices.TextAnalytics.BatchScoring=4',
  'x-envoy-upstream-service-time',
  '947',
  'apim-request-id',
  '603b2fab-f116-4173-88f6-b1bde3f5b7c6',
  'Strict-Transport-Security',
  'max-age=31536000; includeSubDomains; preload',
  'x-content-type-options',
  'nosniff',
  'Date',
  'Fri, 14 Aug 2020 17:48:33 GMT'
]);
