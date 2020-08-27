# October 2019

## Tuesday 2019-10-01

- working on example app where a form is split across multiple pages `cypress-example-forms` @example
- disabled running hanging test in cypress-example-recipes on AppVeyor @feature
- DX meeting @internal
- preparation for workshop and Revo.js presentation @slides

## Wednesday 2019-10-02

- Cypress full day workshop @presentation
  - need to update code coverage example
  - ughh, visual testing could not be executed, used pull request
  - some attendees asked later for an exercise to perform, so they would have to test an app

## Thursday 2019-10-03

- First day of the conference, networking, working on my slides and code example for the last slides https://github.com/bahmutov/cypress-example-forms @slides
- replying to support about running Docker temp image in CircleCI using our orb @support
- watching pull request @feature
  - plugin to detect commented out JavaScript code https://github.com/bahmutov/eslint-rules#no-commented-out-code which is a little out of date

## Monday 2019-10-07

- Trying to connect to the Google hangout meeting to help **redacted**, but they would never allow me in :( Seems their basic auth system has something weird with onfocus / onblur event handlers on the page, leading to Cypress code to throw trying to call the original handler.
  - They will reschedule the call after preparing better
- Updated https://github.com/bahmutov/cypress-movie with links and videos because people asked about similar feature (full demos from Cypress tests ) https://github.com/bahmutov/cypress-movie @feature
- Test runner meeting related to 3.5.0 release @internal
- made copy of slides for presentation at [http://sqgne.org](http://www.sqgne.org/) @slides
  - https://slides.com/bahmutov/sqgne
  - sent them backup PowerPoint and PDF
- our ambassador **redacted** is having problem with Cypress binary not found for their build, I made example repo https://github.com/bahmutov/yarn-cypress-cache and corresponding Travis + Yarn example @example
- reviewed https://github.com/cypress-io/cypress/pull/5293 only needs to pass all tests, merged it @feature
- answering Docker + orb support question @support
- added a few Cypress orb issues to Hacktoberfest label @internal
- updating Chrome remote interface PR to use blank about page first @feature
- **redacted** meeting @internal
- updating Chrome remote interface PR based on Brian's comments, need to clean up the reference, also ffmpeg is failing on Mac @feature

## Tuesday 2019-10-08

- updated failing server unit tests in branch `add-cri-4608` @feature
- adding comment to newly opened pull requests with review checklist @feature
- review the CircleCI orb hackathon comments @support
- opened new issue in our docs to improve debugging advice for missing Cypress binary on CI https://github.com/cypress-io/cypress-documentation/issues/2140 @feature
- opened issue to better describe and link "Cypress on CI" webinar https://github.com/cypress-io/cypress-documentation/issues/2141 @slides
- working on unit and e2e tests for Chrome branch @feature
- talk to **redacted** @internal
- I should add GitHub Actions support to detect forked pull requests https://github.com/bahmutov/is-fork-pr/issues/113 @feature
- fixing https://github.com/cypress-io/add-cypress-custom-command-in-typescript (webpack is now a dependency that should be added after our preprocessor upgrade) @example
- opened issue describing external pull requests and environment variables in contexts https://github.com/cypress-io/cypress/issues/5312 @feature
- sent update to AllThingsOpen to replace Brian @slides

## Wednesday 2019-10-09

- replying to emails and GitHub issues @support
- switched AllThingsOpen speaker @slides
- update is-fork-pr https://github.com/bahmutov/is-fork-pr @feature
  - a few more fixes and tests
  - support GitHub Actions
  - support environment fallback variable
- Retro improvement meeting @internal
- noticed wrong logic for comment from RenovateBot @feature
  - added test and fix
- updated example in https://github.com/bahmutov/yarn-cypress-cache and described install binary @example
- updated to only use `client.on` when working with CRI client, pushed the branch @feature
- watching Netlify video with plugins example @learning
- store NPM logs during build https://github.com/cypress-io/cypress/pull/5323 @feature
- presentation for SQGNE https://slides.com/bahmutov/sqgne @presentation

## Thursday 2019-10-10

- ask **redacted** how to get deployed url in the plugin @feature
- PR to add missing fields to the object returned from Cypress module API call https://github.com/cypress-io/cypress/pull/5337 @feature
- fixing PR processing with empty body @feature
- fixed github event logging in Zeit @feature
- add advice how to deal with missing binary on CI https://github.com/cypress-io/cypress-documentation/pull/2146 @feature
- updating branch https://github.com/cypress-io/cypress/tree/test-electron-app-4964 with latest from `develop` to build new version of Electron app @feature
- working on slides for AllThingsOpen @slides

## Friday 2019-10-11

- working on slides @slides
- asking **redacted** about caching NPM dependencies and additional folders @feature
- reviews Cypress CircleCI orb PR, published new version @feature
- tech talks meeting @internal
- published `snap-shot-core@10.2.0` that allows snapshotting empty strings and `snap-shot-it@7.8.1` @feature
- updating record key to avoid using security context https://github.com/cypress-io/cypress/pull/5358 @feature

## Tuesday 2019-10-15

- fixing typo in our example, upgrading orb version, using latest version of Chrome to test kitchensink and general PR upgrades @example
- Recipe with CSV and table element https://github.com/cypress-io/cypress-example-recipes/pull/342 @example
- watching presentation https://allthingsopen.org/talk/test-automation-without-assertions/ about ReTest, need to follow up with its author https://retest.de/ @learning
- make mirror https://gitlab.com/cypress-io/cypress-example-todomvc-redux to get GitLab CI running and capture code coverage on CI https://docs.gitlab.com/ee/user/project/pipelines/settings.html#test-coverage-parsing @example
  - https://github.com/cypress-io/cypress-example-todomvc-redux/issues/45
  - continue work on publishing code coverage report https://github.com/cypress-io/cypress-example-todomvc-redux/issues/47
  - coverage available at https://cypress-io.gitlab.io/cypress-example-todomvc-redux/
- Typora supports charts from Markdown http://support.typora.io/Draw-Diagrams-With-Markdown/ @learning

## Wednesday 2019-10-16

- made my way back to Boston @internal
- ibm cloud code pipeline example PR https://github.com/cypress-io/cypress-example-kitchensink/pull/302 @example
- improving TS with webpack recipe a little bit https://github.com/cypress-io/cypress-example-recipes/pull/343 @example
- opened https://github.com/cypress-io/cypress/issues/5386 to handle `~/...` in `CYPRESS_CACHE_FOLDER` better, needed to solve https://github.com/cypress-io/circleci-orb/pull/189 (Cache folder on Mac) @feature
- https://github.com/cypress-io/cypress-example-kitchensink/pull/309 @example
- sent email to **redacted** candidate asking about his homework @hiring

## Thursday 2019-10-17

- [x] write blog post “Gitlab + Cypress code coverage” @blog
  - the live preview shows incorrect version (old) of the post, sent an email to Ghost support
- [x] wrote blog post showing how to split long test into shorter ones using app actions to set the state @blog
- better dynamic tests recipe https://github.com/cypress-io/cypress-example-recipes/pull/345 @example
- trying to export slides to send to AllThingsOpen organizers - done @slides
- support `~` in Cypress cache path @feature
  - https://github.com/cypress-io/cypress/pull/5393
  - https://github.com/cypress-io/cypress-documentation/pull/2167
- read Netlify announcement https://www.netlify.com/blog/2019/10/16/creating-and-using-your-first-netlify-build-plugin/ @learning
- custom browserify + Mocha-like grep test picker example https://github.com/bahmutov/cypress-select-tests/issues/33 published v1.4.0 @feature

## Friday 2019-10-18

- Added CI and Renovate bot to https://github.com/bahmutov/cypress-example-forms that is used as a blog example repo @example
- trying to SSH into CircleCI with reverse SSH forwarding back to the local machine @feature
- could not get it to work, asked CircleCI support question https://discuss.circleci.com/t/can-we-set-reverse-ssh-tunnel-back-to-localhost-when-debugging-a-job/32980 @feature
- building another Docker image with Chrome73 and FF68 https://github.com/cypress-io/cypress-docker-images/pull/156 @feature
- updated https://github.com/bahmutov/build-example-basic to start local server and run Cypress tests post-build @example
- trying to use both `netlify dev` and `netlify build` and running into config problems @feature
  - https://github.com/netlify/build/issues/337 (config)
  - https://github.com/netlify/build/issues/338 (plugin crashed but build is green)
- recording from Netlify to the dashboard via plugin @feature
- updating and merging https://github.com/cypress-io/cypress-example-todomvc/pull/124 @example
- looking at recipe pull request https://github.com/cypress-io/cypress-example-recipes/pull/346 @example
- update cypress recipe example with `console.log` spying and stubbing - hmm, checking local closure variable is simple with `cy.should(cb)`. https://github.com/gabbersepp/cypress-example-recipes/pull/1 @example
- building new Docker image https://github.com/cypress-io/cypress-docker-images/pull/157 @feature
- updated PR that brings Microsoft Edge https://github.com/cypress-io/cypress/pull/4203/ (installing Edge for Mac) @feature
- video works when running `cypress run --browser edgeCanary` @feature
- AppVeyor does not have Edge browser on their images @feature
- CircleCI does not have Edge browser on their image, asked about it https://discuss.circleci.com/t/can-microsoft-edge-browser-be-installed-on-windows-image/32990 - got reply that this is not possible because Windows Server does not have Microsoft App Store, so one cannot install that browser. @feature
- Rejected candidate **redacted** @hiring

## The Weekend

- tried running tests using Brave browser, works https://github.com/cypress-io/cypress/pull/5068#issuecomment-544137616 @feature
- working on XState + Cypress test https://github.com/bahmutov/xstate-test-with-cypress-example @example
- updating cypress-fiddle markdown branch https://github.com/cypress-io/cypress-fiddle/pull/21/ @feature

## Monday 2019-10-21

- looking at `testFiles` config option and how it works @feature
  - https://github.com/cypress-io/cypress/issues/5401
  - https://github.com/cypress-io/cypress/pull/5402
- Cypress fiddle Markdown updates and new version release @feature
- Made an example https://github.com/bahmutov/vuepress-cypress-test-example where Cypress runs against README.md and Vuepress generates site https://vuepress-cypress-test-example.netlify.com/ from README too. @example
- Applied fiddle to some examples in our API docs https://github.com/cypress-io/cypress-documentation/pull/2175 @example
- PR to avoid relative cache folder surprises during npm install https://github.com/cypress-io/cypress/pull/5407 @feature
- Renovate bot issue detection @feature
- wrote blog post https://glebbahmutov.com/blog/cypress-fiddle/ @blog

## Tuesday 2019-10-22

- update https://github.com/cypress-io/cypress-test-node-versions @feature
  - https://github.com/cypress-io/cypress-test-node-versions/issues/33
- Netlify still does not restore plugin's dependencies or exit with an error if plugin crashes https://github.com/netlify/build/issues/271 @feature
- marketing meeting @internal
- update code coverage section https://github.com/cypress-io/testing-workshop-cypress/pull/144 @feature
- merging PR with error type information from NPM module API https://github.com/cypress-io/cypress/pull/5337 @feature
- adding validation to returned user browser list @feature

## Wednesday 2019-10-23

- test runner 3.5.0 fails to clean the input box @feature
- answering https://github.com/cypress-io/cypress/issues/5420 via a fiddle https://github.com/cypress-io/cypress-fiddle/pull/26 @support
- adding more tests and splitting CircleCI jobs https://github.com/cypress-io/cypress/issues/5421 @feature
- release tasks for v3.5.0 @feature
- inject context status environment variables for `cypress-test-example-repos` to make sure they report the failed jobs back correctly. @feature
  - also setting `TERM: xterm` on Mac, otherwise shell commands where hanging
- fixed a few issues in 3.5.0 changelog (unbalanced quotes) https://github.com/cypress-io/cypress-documentation/issues/2189 @feature
- upgrading cypress-example-realworld to v3.5.0 https://github.com/cypress-io/cypress-example-realworld/pull/112 that uses system Node version @example
- looking at SSO recipe failing in 3.5.0 https://github.com/cypress-io/cypress/issues/5432 @example

## Thursday 2019-10-24

- fixing decoding unicode config strings https://github.com/cypress-io/cypress/pull/5448 @feature
- trying to recreate crash in `after` block without id, could not @support
- fixing remaining test projects on Circle https://github.com/cypress-io/cypress/pull/5454/ @feature
- updating Heroku build for `cypress-example-kitchensink`, not longer need to play games with caching folder, also need to pass 'no-sandbox' @example
  - https://github.com/cypress-io/cypress-example-kitchensink/pull/311
- always run Electron with `--no-sandbox` on Linux-like systems https://github.com/cypress-io/cypress/pull/5458/ @feature

## Friday 2019-10-25

- add more testing to no-sandbox @feature
- **redacted** support meeting still has not happened @support
- cleaning up circle file in `cypress-test-example-repos` @feature
- allow running `cypress-example-recipes` in chunks https://github.com/cypress-io/cypress-example-recipes/pull/359 @feature
- passing chunks to recipes from https://github.com/cypress-io/cypress-test-example-repos/pull/63 @feature
  - every recipe should have `npm run test:ci` script https://github.com/cypress-io/cypress-example-recipes/pull/360
- demo meeting @internal
- fixing Mac paths for testing test runner @feature
- built and published `cypress/included:3.5.0` image https://github.com/cypress-io/cypress-docker-images/pull/164 @feature

## Monday 2019-10-28

- Cypress workshop, fixed a few issues with answers, now testing more answers to the workshop on CI @presentation

## Tuesday 2019-10-29

- Looking at the undefined `NEXT_DEV_VERSION` for forked pull requests during test runner build https://github.com/cypress-io/cypress/issues/5509 @feature
  - opened https://github.com/cypress-io/cypress/pull/5512
- tried to recreate a problem I saw when we did not catch the error and the build was hanging, but could not. @support
- travel to Prague for ReactiveConf
- finishing ReactiveConf slides @slides
- checking user claim about `cy.contains` not retrying @support
- trying to make sure all testing workshop sections are tested, updated the PageObject example spec (was missing a label) @slides
- speakers' dinner

## Wednesday 2019-10-30

- last prep for ReactiveConf presentation @slides
- Opened https://github.com/cypress-io/cypress-documentation/issues/2209 to document test runner binary download checksum and file size @feature
- Need to add a step to the test runner Linux build to output `ldd` information @feature
- ReactiveConf presentation @presentation
- met **redacted** - this should be a Cypress plugin
- met **redacted** - he wants to talk about something
- talking a lot to **redacted** about **redacted**
- people ask about mutation testing, that could be really cool

## Thursday 2019-10-31

- improved static resource loading example to show how to detect that an image has finished loading https://github.com/cypress-io/cypress-example-recipes/pull/363 @example
- opened PR to mark free training courses in our documentation https://github.com/cypress-io/cypress-documentation/pull/2211 @feature
