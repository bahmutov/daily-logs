# December 2019

## Monday 2019-12-02

- invite **redacted** from GitHub to conduct a webinar about GitHub Actions @slides
- Merged `cypress/included:3.7.0` https://github.com/cypress-io/cypress-docker-images/pull/181 @feature
- released new version https://github.com/cypress-io/github-action/releases/tag/v1.17.0 that installs Cypress dependencies by taking into account `working-directory` parameter @feature
- open PR to add open source project examples to our documentation https://github.com/cypress-io/cypress-documentation/pull/2276 @example
- Electron crash on Windows when passing url https://github.com/cypress-io/cypress/issues/5466 @support
  - https://github.com/cypress-io/cypress/pull/5853
- Adding more tests to unzip on Linux PR https://github.com/cypress-io/cypress/pull/5851 @feature

## Tuesday 2019-02-03

- final review and landed https://github.com/cypress-io/cypress/pull/5851 - unzip on Linux @feature
- more tweaks for projects page in the documentation @feature
- update slide column https://cypress.slides.com/cypress-io/e2e-using-cypress/#/how-to-run-tests-quickly @slides
- Update https://github.com/cypress-io/cypress-documentation/pull/2276 @feature
- change removing `--` and update tests in https://github.com/cypress-io/cypress/pull/5853 @feature
- hiring meeting @hiring
- Electron just crashing on Mac for me - probably need to merge latest Electron upgrade branch into https://github.com/cypress-io/cypress/pull/5550 (run Windows on CircleCI) @feature
- **redacted** meeting @internal

## Wednesday 2019-12-04

- pull request review and github issues @support
- working on Siemens presentation slides https://cypress.slides.com/cypress-io/siemens-case-study/ @slides
- landed `--` for Windows crash https://github.com/cypress-io/cypress/pull/5853 @feature
- working on Mac build notarize in branch `notarize-mac-build-5791` @feature
- [x] online meeting with **redacted** @internal
- [x] test runner retro meeting @internal
- [x] review Cypress testing workshop with **redacted** @slides
- need to add redirect to example projects @feature
- fixed unit test in https://github.com/cypress-io/cypress/pull/5164 and added more tests and tested it against staging to confirm `--tag` is working @feature
- working on upgrading Electron and maybe notarization https://github.com/cypress-io/cypress/pull/5849 @feature
- scheduled another Siemens check in for Friday morning @slides
- SemaphoreCI using `parallelism:3` setting https://github.com/cypress-io/cypress-example-kitchensink/pull/333 @example
- wrote Cypress blog post about smoke tests @blog

## Thursday 2019-12-05

- Added Cypress GH action to the list https://github.com/sdras/awesome-actions/pull/274
- added parameter `useLockFile` to `bahmutov/npm-install` action https://github.com/bahmutov/npm-install/pull/5 @feature
- answering questions from the workshop: @slides
  - iframe support (we need to document it)
  - changing `data.json` file from a task in the testing workshop (we need to watch the file when launching `data.json`)
- passing additional Electron launch flags https://github.com/cypress-io/cypress/pull/5891 @feature
- review a couple of candidates @hiring
- working on code signing in branch `try-new-electron-sign` @feature

## Friday 2019-12-6

- sync with Siemens about the slides for upcoming webinar @slides
- more work on notarizing the app in branch `try-new-electron-sign` @feature
- slight update to Electron command line switches pull request - still need to write user docs for it @feature

## The Weekend

- fixed the url for Ghost blog post about Angular-vs-Protractor (when publishing blog posts please use morning timestamp EST because it puts URL using GMT) @blog
- fixed CSS for testing workshop in dark theme @feature
- found bug where we pass `null` instead of `undefined` when calling `cy.task` https://github.com/cypress-io/cypress/issues/5913 @feature
- added reset data using `cy.task` in the testing workshop https://github.com/cypress-io/testing-workshop-cypress/pull/171 @slides
  - and `cy.writeFile` example etc and slides
- working on TodoMVC example with dark media preferences in https://github.com/cypress-io/cypress-example-todomvc see https://twitter.com/bahmutov/status/1203769753392861191 @example

## Monday 2019-12-09

- review code coverage doc pull request https://github.com/cypress-io/cypress-documentation/pull/2292 @feature
- opened https://github.com/cypress-io/cypress-documentation/issues/2293 @feature
- document Electron app command line switches and how to see Chrome switches used https://github.com/cypress-io/cypress-documentation/pull/2295 @feature
- Test runner meeting @internal
- A few code-coverage plugin fixes @feature
  - `execa` should be production dependency https://github.com/cypress-io/code-coverage/issues/106
  - Skip logging to avoid slowing down task https://github.com/cypress-io/code-coverage/issues/105
- presentation for 2 groups of people at **redacted**, used slides https://cypress.slides.com/cypress-io/cypress-intro @presentation
- read https://dev.to/davidkpiano/xstate-version-4-7-and-the-future-2ehk @learning
- working on building and signing Cypress app - trying to use `electron-builder` instead of `electron-packager` to pack and code sign, getting all sorts of errors https://github.com/cypress-io/cypress/issues/5791 @feature
- wrote blog post about testing Dark mode appearance @blog

## Tuesday 2019-12-10

- added async unit test examples to https://github.com/cypress-io/cypress-example-recipes/tree/master/examples/unit-testing__application-code to answer question on Gitter @example
- interview **redacted** @hiring
- company meeting @internal
- last tweaks to the Siemens slides @slides
- working on electron-builder - it does NOT copy `packages/**/node_modules` folder for some reason :( @feature
- to check if the app has been notarized need to call `spctl` @feature
- found the test runner is freezing on large values as subjects plus assertions https://github.com/cypress-io/cypress/issues/5929 @support

## Wednesday 2019-12-11

- answered question about environment variables https://github.com/cypress-io/cypress/issues/5932 @support
- interview **redacted** @hiring
- added more test jobs to run against Firefox @feature
  - need to set target browsers in the cypress-example-realworld, see https://circleci.com/gh/cypress-io/cypress/212280 done in [@6957675](https://github.com/cypress-io/cypress-example-realworld/commit/69576750660f46c243bad4d4fd4bbd13ad25ad12)
- looking at next-dev-version @feature
- interview **redacted** @hiring
- intro call with **redacted** @support
- Siemens webinar @presentation
- exporting Apple Developer certificate from new Cypress company account @feature
- built Cypress Test Runner is code signed with the new certificate and notarized, but `packages/node_modules` are still missing - might be related to https://github.com/electron-userland/electron-builder/issues/3185 @feature

## Thursday 2019-12-12

- answer issues @support
  - added Jennifer as maintainer at gitlab cypress-example-kitchensink
- Cypress-example-kitchensink GitLab yml using `extends` key https://github.com/cypress-io/cypress-example-kitchensink/pull/206 @example
- wrote little example https://github.com/bahmutov/cypress-extends-example that supports `extends: path` in `cypress.json` @example
  - opened related https://github.com/cypress-io/cypress/issues/5941
- ambassador call @presentation
- created `has-message` script https://github.com/cypress-io/commit-message-install/releases/tag/v3.1.0 with demo how to halt jobs without commit message status in https://github.com/bahmutov/commit-message-install-example @feature
  - this is useful for services branch that should run Firefox beta of the Test Runner which is branch `test-beta-firefox`
- meeting about **redacted** @internal
- interview **redacted** @hiring
- more work on test runner beta firefox @feature
- updated https://github.com/cypress-io/cypress-example-todomvc/pull/132 and merged @example
- played with spok and Cypress together in repo https://github.com/bahmutov/cy-spok @example

## Friday 2019-12-13

- built Docker image `cypress/included:3.8.0` @feature
- replied to AngularShow for Monday
- merge eslint + prettier config into testing-workshop-cypress and update settings to pass https://github.com/cypress-io/testing-workshop-cypress @feature
- added RenovateBot to CLA in `testing-workshop-cypress` @feature
- created new Docker image `cypress/browsers:node10.16.0-chrome77-ff71` for testing FF beta release with services @feature
- updated branch `cypress-firefox-branch` to run in new Docker image with Node10 and Firefox browser, finally working, most containers hang though @feature

## The Weekend

- figured out cy-spok problem with multiple assertions @feature
- published `cy-spok` to NPM @feature
  - https://github.com/bahmutov/cy-spok
  - working on example https://github.com/bahmutov/cy-spok-example
- expand github actions NPM blog post @blog

## Monday 2019-12-16

- looking at Cypress upgrade to 3.8.0 failing in cypress-example-kitchensink in GH Action @feature
  - hmm, seems like we are above 400MB cache limit at GH Action so install job cannot cache the test runner, making parallel jobs fail later on.
- [x] Angular Show @presentation
- add branch name to get separate cache https://github.com/cypress-io/cypress-example-kitchensink/issues/337 which allows updating Cypress to v3.8.0 in https://github.com/cypress-io/cypress-example-kitchensink/pull/335 @feature
  - we probably need `cypress cache prune` command
- test runner meeting @internal
- looking at our Docker images with Node 13 https://github.com/cypress-io/cypress-docker-images/pull/180 @feature
- opened issue to add `cypress cache prune` command https://github.com/cypress-io/cypress/issues/5972 @feature
- add testing Firefox browser against cypress-example-recipes @example
- investigate size increases in built Test Runner @feature
  - https://github.com/cypress-io/cypress/issues/5977
  - traced it to `jest` as production dependency in `parse-domain`, opened https://github.com/peerigon/parse-domain/pull/91
  - https://github.com/cypress-io/cypress/pull/5978 should print dist usage stats during the build and send it to our performance metric
- opened issue https://github.com/cypress-io/cypress/issues/5979 about crashes - duplicate of https://github.com/cypress-io/cypress/issues/4981 @feature
- working on XHR assertions example `xhr-assertions` in cypress-example-recipes https://github.com/cypress-io/cypress-example-recipes/pull/382 @example

## Tuesday 2019-12-17

- create new CircleCI context `test-runner:performance-tracking` and use to when building binary on Linux to send package sizes @feature
- Add spok spec to xhr-assertions recipe, set TERM @example
- updating performance tracking to not crash and burn without CI env variables @feature
- disabled `console.error` message in `bin-up` - need to use `VERBOSE=1` to see the found path https://github.com/bahmutov/bin-up/issues/4 @feature
  - also fixed what to me seemed like a bug, released v1.3.1
- looked at **redacted** candidate @hiring
- updated **redacted** to get rid of deprecated Oktokit rest messages @feature
- more work on `parse-domain` and how we use it from `packages/network` and `packages/driver` @feature
- opened https://github.com/cypress-io/cypress/issues/5990 to stop loading entire environment during build and seeing warnings just to grab cdn url @feature
- Rejected candidated **redacted** @hiring
- send email to the Firefox devtools team asking to help with debugging a crash @feature

## Wednesday 2019-12-18

- merge improvement for changelog and added unit tests @feature
- built Docker images with 13.1.0 and 13.3.0 https://github.com/cypress-io/cypress-docker-images/pull/180 plus browsers. @feature
- meeting with **redacted**, showing him how Cypress can help engineering velocity @internal
- pull request to explain how to run `cypress/included` image as a non-root user https://github.com/cypress-io/cypress-docker-images/pull/187 @example
- added custom CI build id link to our github action @feature
- pull request to give example running Cypress included Docker image with locally installed plugins https://github.com/cypress-io/cypress-docker-images/pull/188 @example
- work in progress: remapping user https://github.com/cypress-io/cypress-docker-images/pull/189 @example
- interivew **redacted** @hiring
- chat with **redacted** @internal
- Docker container on top of cypress/included that runs as a mapped non-root user matching the user on the host machine https://github.com/cypress-io/cypress-docker-images/pull/189 @example
- merged and cleaned up recipe that shows stubbing image to load via mutation observer https://github.com/cypress-io/cypress-example-recipes/tree/master/examples/stubbing__resources @example
- expand network guide page with assertion examples https://github.com/cypress-io/cypress-documentation/pull/2319 @example
- adding cy-spok plugin to our documentation https://github.com/cypress-io/cypress-documentation/pull/2320 @example
- working again on new electron sign process, trying to figure out the output build folder @feature

## Thursday 2019-12-19

- more tweaks to XHR assertions recipe and documentation change @example
- met with Hayden to review and help with Cypress tests for Fabe @support
- interview **redacted** with Amir @hiring
- review documentation PR for `cy.click` examples https://github.com/cypress-io/cypress-documentation/pull/2311 @example
- multiple network request tweak https://github.com/cypress-io/cypress-example-recipes/pull/386 @example
- working on code sign - Mac seems happy with the new `electron-builder` but Linux ... is not happy and includes multiple copies of Electron, blowing up its size, opened https://github.com/cypress-io/cypress/pull/6013 WIP @feature
- found that we swallow permission errors trying to access the binary, opened https://github.com/cypress-io/cypress/issues/6014 @feature
- interview **redacted** @hiring
- another approach for running `cypress/included` as non-root `node` user https://github.com/cypress-io/cypress-docker-images/pull/191 @example
- more work on building test runner app on Linux, found the build was deleting the wrong Electron `dist` and swallowing the error @feature

## Friday 2019-12-20

- working on blog post "Asserting Network Calls from Cypress Tests" @blog
- added clock spec to https://github.com/cypress-io/cypress-example-recipes/pull/386 @example
- Increased my zip size for test runner build in the new code sign branch @feature
- looking at the renamed and zip operations @feature
- looking at Windows binary build @feature
- found all commits related to **redacted** @internal
- review PR to remove assertion generic fallback TypeScript https://github.com/cypress-io/cypress/pull/5597 @feature
- check binary build on Windows @feature

## The Weekend

- fixed https://github.com/bahmutov/vue-vuex-todomvc build and merged pull request to complete items @example
- https://dev.to/bahmutov/unit-testing-vuex-data-store-using-cypress-io-test-runner-3g4n - long blog post @blog
- looked at loading Vue devtools in Chrome - working, but does not really connect to the Vue app running inside the iframe @feature

## Monday 2019-12-23

- review spec parameter https://github.com/cypress-io/github-action/pull/51, re-configured CLA bot, merged, new version will be published @feature
- why is AppVeyor choking on Windows recipe https://github.com/cypress-io/cypress-example-recipes/issues/388 @example
  - trying to use `serve` instead of `http-server` in that recipe - seems to work
  - https://github.com/cypress-io/cypress-example-recipes/pull/389
- update Docker images with fonts for FF https://github.com/cypress-io/cypress-docker-images/pull/190 @feature
- fixing `got` README https://github.com/sindresorhus/got/pull/1004 @feature

## Tuesday 2019-12-24

- add code to lock issue as resolved when closing it as part of the release @feature
- example recipe that loads React DevTools via browser launch API, working in branch `load-react-devtools-extension` folder `cypress-example-recipes/examples/blogs__use-react-devtools` @example
- testing `cypress-react-unit-test` in Cypress using example from testing lib @example

## Thursday 2019-12-26

- added unit tests for handling unzip errors https://github.com/cypress-io/cypress/pull/6009 @feature
- merged and release `cypress/included:3.8.1` and related pull requests https://github.com/cypress-io/cypress-docker-images/pull/191 @feature
- working on mocking React components - and it is working https://twitter.com/bahmutov/status/1210260413956444160 @feature
- updating https://github.com/bahmutov/ok-file to release new version with more debug output, and Windows CI @feature
  - which has fixed Windows Cypress CI on Circle build https://github.com/cypress-io/cypress-test-tiny/pull/49
- showing how to use Cypress Orb for Angular book https://github.com/duluca/lemon-mart/pull/22 @example

## Friday 2019-12-27

- figured out how to mock named ES6 imports in Cypress React unit test https://github.com/bahmutov/cypress-react-unit-test/pull/108/commits/0be1aa37534c5b19957babb94c8e6fb6aa4bd295 @feature
- more tweaks and tests for release automations @feature
- support issue @support
- add example of using custom docker image with github action @example
- explain how to set up SSH for GitHub Desktop on Windows @internal
- trying to build Cypress on Windows, ughh build problem, probably some stale files, will need to reclone the repo again @feature
- pull request WIP for React DevTools extension, probably need to finish by the time the blog post is finished @example

## Tuesday 2019-12-31

- write Cypress tests for **redacted** @feature
