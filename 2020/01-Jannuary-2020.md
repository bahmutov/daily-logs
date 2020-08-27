# January 2020
## Thursday 2020-01-02

- review PR https://github.com/cypress-io/cypress-docker-images/pull/194 and build `cypress/base:12.14.0` plus browsers https://github.com/cypress-io/cypress-docker-images/pull/195 @feature
- went through pull requests for `cypress-docker-images` to close stale pull requests and update existing ones @support
- thinking how to automate Cypress docker image building https://github.com/cypress-io/cypress-docker-images/tree/add-circle-build @feature
  - wrote a reusable job definition to generate base image
  - if image already exists on Docker hub, halts Circle job
  - wrote a script to regenerate CircleCI file from `base/*` folders
  - https://github.com/cypress-io/cypress-docker-images/pull/196
- review GitLab pull request https://gitlab.com/cypress-io/cypress-example-docker-gitlab/merge_requests/4/pipelines that exports Cypress test results in JUnit format and injects into GitLab, merged @example
- review PR that adds Russian translation to our documentation https://github.com/cypress-io/cypress-documentation/pull/2338 @feature
- comment on component testing https://github.com/cypress-io/cypress/pull/5923 @feature
- comment on assertions running after the test has finished - it should show a warning https://github.com/cypress-io/cypress/issues/6068#issuecomment-570292150 @example
- merged https://github.com/cypress-io/cypress-example-kitchensink/pull/309 after updating tilde in the path. Opened https://github.com/cypress-io/circleci-orb/issues/212 about weird message in the console output @example
- looking at TSC build on Windows, for some reason does not ignore TSC errors @feature
- opened https://github.com/cypress-io/cypress/issues/6084 for nested `it` blocks @feature
- looking at https://github.com/cypress-io/cypress-example-kitchensink/pull/338 @example
- added 2 material UI examples to `cypress-react-unit-test` next version @example

## Friday 2020-01-03

- looking at github action CI build id problem https://github.com/cypress-io/cypress/issues/5814 @feature
  - opened https://github.com/cypress-io/cypress-services/issues/1961 and implemented https://github.com/cypress-io/cypress-services/pull/1962
  - then decided to not do this and instead wait for GH Actions to support workflow id
- merged first Russian translation for Cypress documentation https://github.com/cypress-io/cypress-documentation/pull/2338 @feature
- merged cypress-docker-images build PR and making sure it is working @feature
  - new image `cypress/base:10.18.0` was built on CircleCI and uploaded to Docker hub automatically
  - seems the auto-generated circle.yml is not being pushed from GH action, branch check is incorrect?
  - added CircleCI badge to README
  - fixed the branch check
- opened https://github.com/cypress-io/cypress/issues/6088 about async assertion from the first test breaking the second test @feature
- opened an issue to add E2E testing guide using Cypress to GitLab docs @feature
- working on automatically building browsers Docker images https://github.com/cypress-io/cypress-docker-images/issues/197 @feature
  - opened https://github.com/cypress-io/cypress-docker-images/pull/198
- automatic building `cypress/included` Docker images, landing https://github.com/cypress-io/cypress-docker-images/pull/200 @feature
- fixing build on Windows x86 folder name `win-ia32-unpacked` @feature
  - testing signed binary from Mac CI, found that `cypress verify` breaks notarization by saving `binary_state.json` file in the app folder, opened https://github.com/cypress-io/cypress/issues/6089 opened https://github.com/cypress-io/cypress/pull/6090

## The Weekend

- Add Prettier to https://github.com/bahmutov/cypress-react-unit-test/pull/108 @feature
- reworked it to mount component tests differently from integration tests @feature
- started https://github.com/bahmutov/todo-checks @feature
  - will probably need https://github.com/bahmutov/ggit/issues/149 to discover new or changed source code in pull request

## Monday 2020-01-06

- looking at our Codeship CI example @example
- update TODOs for component testing PR @feature
  - added app action example to the `cypress-react-unit-test` v2
- created repo https://github.com/cypress-io/cypress-example-reporters with Mochawesome and JUnit examples, storing artifacts and test results on CircleCI @example
  - added review to https://github.com/cypress-io/cypress-documentation/pull/2352 regarding reporters syntax
  - added `cypress-example-repos` to https://github.com/cypress-io/cypress-test-example-repos Circle runs
- 3 new courses added to our docs https://github.com/cypress-io/cypress-documentation/pull/2355 @feature
- looking at CI error https://github.com/cypress-io/cypress-example-recipes/issues/393, fixed @example
- looked at and merged https://github.com/cypress-io/cypress-example-recipes/pull/171 (TS + Webpack example recipe) @example
- updated and closed https://github.com/cypress-io/cypress-example-recipes/pull/194 (TS + Webpack source maps) @example
- updated and closed https://github.com/cypress-io/cypress-example-recipes/pull/125 (TS + Browserify example) @example
- opened https://github.com/cypress-io/cypress-example-recipes/pull/394 to start linting our example recipes @example
- updated cypress-example-recipes to use Cypress v3.8.1 and finishing linting in https://github.com/cypress-io/cypress-example-recipes/pull/395 @example
- review issue template PR https://github.com/cypress-io/cypress/pull/6086 @feature
- review https://github.com/cypress-io/cypress/pull/6066 `runUrl` and event emitter types @feature

## Tuesday 2020-01-07

- linting https://github.com/cypress-io/cypress-example-recipes/pull/391 @example
- added pre-commit linting https://github.com/cypress-io/cypress-example-recipes/pull/397 for JS and JSON files @feature
- opened https://github.com/cypress-io/cypress-documentation/issues/2356 because pull request creation fails from `develop` to `master`. @feature
  - need to sort it out and answer https://github.com/cypress-io/cypress-documentation/pull/2355
- Reviewed and merged https://github.com/cypress-io/cypress/pull/6066 @feature
- replied to customer question about code coverage, opened https://github.com/cypress-io/code-coverage/issues/116 to create such example @example
- test runner planning meeting @internal
- set up renovate to https://github.com/bahmutov/cypress-gh-action-subfolders and to https://github.com/bahmutov/cypress-gh-action-monorepo @feature
- merged https://github.com/cypress-io/cypress-example-recipes/pull/391/ @example
- because blog post about react devtools got published https://www.cypress.io/blog/2020/01/07/how-to-load-the-react-devtools-extension-in-cypress/ @blog
- created example https://github.com/bahmutov/code-coverage-subfolder-example to show how to instrument code as a separate step and answer support question @example
- looking at Codeship failing to start / test https://github.com/cypress-io/cypress-example-kitchensink/pull/344 and fixed it @example
- worked on https://github.com/bahmutov/auto-pr-gh-action-example to figure out why auto merge is not happening. Seems it is due to limitation of GH actions - workflow cannot trigger another workflow @example
  - figured out how to combine GH and https://mergify.io/ to automatically move PRs from `develop` to `master` branches. Example https://github.com/bahmutov/auto-pr-gh-action-example/pull/23
- Opened https://github.com/cypress-io/cypress-documentation/issues/2363 to finish `develop` to `master` workflow @feature

## Wednesday 2020-01-08

- publish https://github.com/bahmutov/cypress-expect-n-assertions to NPM, needs a blog post "When can a test finish?" @example
- review and land https://github.com/cypress-io/cypress-documentation/pull/2352 @feature
- installed Mergify GH App only for `cypress-documentation` and set the settings https://github.com/cypress-io/cypress-documentation/pull/2366 @feature
  - Merged, seems to be working
- created recipe showing waiting for test to finish and counting assertions @example
  - https://github.com/cypress-io/cypress-example-recipes/pull/398
- wrote blog post @blog
- adding to the list of plugins https://github.com/cypress-io/cypress-documentation/pull/2368 @feature
- review and merge Codeship changes https://github.com/cypress-io/cypress-example-kitchensink/pull/344 @example
- Updated https://github.com/cypress-io/cypress-example-kitchensink/pull/319 - really want to run Kitchensink on CircleCI Windows machines @feature
- reviewed removing verbose logs https://github.com/cypress-io/github-action/pull/57 - merged @feature
- company touchpoint @internal
- opened issue and discussed component testing with Amir @feature
- tried to stub Notifications in the browser, need to make this into a recipe @example

## Thursday 2020-01-09

- land https://github.com/cypress-io/cypress-example-recipes/pull/398 (Expect N assertions recipe) @example
- coded recipe showing how to test application that uses browser notification https://github.com/cypress-io/cypress-example-recipes/pull/399 @example
  - opened issue with spying on `Notification` constructor https://github.com/cypress-io/cypress/issues/6129
- review https://github.com/cypress-io/cypress-documentation/pull/2365 @feature
- looking at CRI target not found https://github.com/cypress-io/cypress/issues/6053 bug @feature
  - opened https://github.com/cypress-io/cypress/pull/6133 with added retries around `CRI.List` call
- merged Chrome remote interface recipe and played with it locally @example

## Friday 2020-01-10

- extend notification recipe with a test that confirms the app handles browser that does not support notifications @example
- added Chrome headless test job https://github.com/cypress-io/cypress-example-recipes/pull/400 @example
- added Chrome headless GitHub action workflow to https://github.com/cypress-io/cypress-example-kitchensink/pull/346 @example
- added `headless` parameter to our GitHub Action https://github.com/cypress-io/github-action/releases/tag/v1.19.0 @example
- tighten XHR assertions recipe to handle out of order delivery @example
- technical talks @internal
- merge mochawesome update https://github.com/cypress-io/cypress-example-kitchensink/pull/345 @example
- merged `develop` into `test-electron-app-4964` and opened WIP https://github.com/cypress-io/cypress/pull/6143 @feature

## The Weekend

- Review new docker included image https://github.com/cypress-io/cypress-docker-images/pull/203 @feature
  - added non-root solution
  - found issue with testing included images, opened https://github.com/cypress-io/cypress-docker-images/issues/204 and fixed it.

## Monday 2020-01-13

- enabled chained spoks https://github.com/bahmutov/cy-spok/issues/7 because Cypress v3.8.2 has fixed the problem @feature
- opened https://github.com/cypress-io/cypress-documentation/issues/2385 to explain `localStorage` docs that need more information @feature
- looking at why `--headless` CLI option is lost https://github.com/cypress-io/cypress/issues/6151 while trying to confirm a fix @feature
  - opened https://github.com/cypress-io/cypress/pull/6154 to fix it
- tested and merged https://github.com/cypress-io/cypress/pull/6133 (CRI retry fix) @feature
- released https://github.com/cypress-io/cypress-docker-images/pull/203 `cypress/included:3.8.2` from CI @feature
- Commented on `cypress.json` extends issue https://github.com/cypress-io/cypress/issues/5674 @feature
- added example Svelte unit tests from outside tutorial @example
- refactor mac build and upload branches in `test-electron-app-4964` branch. Need to build Windows version @feature
  - building Mac and Windows versions and posting pre-release install comments
- quick look at https://github.com/bahmutov/cypress-failed-log/pull/196 @support
- wrote blog post about testing browser Notification API @blog
- finished presentation https://slides.com/bahmutov/github-actions-in-action @example
- opened https://github.com/bahmutov/cypress-vue-unit-test/pull/247 to adopt component mode @feature

## Tuesday 2020-01-14

- review pr to improve invoke typings https://github.com/cypress-io/cypress/pull/4950 @feature
- presentation at NomadJS https://slides.com/bahmutov/github-actions-in-action @presentation

## Wednesday 2020-01-15

- Look at https://edwardthomson.com/blog/github_actions_advent_calendar.html list that describes making GH actions @learning
- comment on https://stackoverflow.com/questions/54671266/setting-the-browser-language-in-cypress @support
- fixing types in https://github.com/cypress-io/schema-tools to solve https://github.com/cypress-io/json-schemas/pull/464 - fixed @feature
- review type change https://github.com/cypress-io/cypress/pull/6127#pullrequestreview-343400645 @feature
- added https://github.com/cypress-io/cypress-example-kitchensink/pull/349 with select examples, closed https://github.com/cypress-io/cypress-example-kitchensink/pull/155 @example
- looked at the base Node image we use - we should switch to `-buster` for next one to use newer Debian image https://github.com/cypress-io/cypress-docker-images/issues/202 @feature
- working on Electron app testing again, trying to get the app to load correctly @feature
- Refined Cypress single action https://github.com/bahmutov/gh-example-cypress and opened https://github.com/actions/starter-workflows/pull/311 to add our starter workflow to GitHub @feature
- lots of work on cypress-vue-unit-test new mount mode https://github.com/bahmutov/cypress-vue-unit-test/pull/247 @feature

## Thursday 2020-01-16

- updating pull request that brings Edge and Edge Canary support https://github.com/cypress-io/cypress/pull/6181 need to set up CI, trying to find a CI capable of installing Edge @feature
- review and merge PR to truncate too long of names in cypress-failed-log, released v2.6.0 and switching to Travis PRO for this project. @feature
  - https://travis-ci.com/bahmutov/cypress-failed-log
- need to install Windows on Mac via https://support.apple.com/boot-camp @feature

## Friday 2020-01-19

- automate creation of new `cypress/base` Docker images https://github.com/cypress-io/cypress-docker-images/pull/208 @feature
- adding auto-generated `cypress/base:13.6.0` image https://github.com/cypress-io/cypress-docker-images/pull/209 @feature
- adding command prefix to github-action @feature
  - allows easy set up of Percy runs
  - Example project in https://github.com/cypress-io/angular-pizza-creator/pull/36
  - released new version of GH Action and working Percy example and announced https://twitter.com/bahmutov/status/1218232405691109377
- opened https://github.com/cypress-io/cypress/issues/6191 because the user gets just a blank page in `cy.visit` with missing `body`, seems like `document.domain` mismatch @feature
- working on stubbing network requests from iframe in folder `cypress-example-stub-xhr-from-iframe` @example

## Tuesday 2020-01-21

- review invert option pull request https://github.com/bahmutov/cypress-select-tests/pull/76 @feature
- rejected unfinished Alpine docker image PR https://github.com/cypress-io/cypress-docker-images/pull/206 @feature
- Freezing and archiving https://github.com/cypress-io/jsnation-example/pull/28 repo @slides
- ughh, trying to print Microsoft Edge version on AppVeyor - how does one run edge from command line... @feature
  - could not simply print version, Cypress repo `packages/launcher/index.js` does not show Edge present, but the list of software shows that it should be there already https://www.appveyor.com/docs/windows-images-software/
  - detected Edge on AppVeyor!
  - adding running kitchensink included in `packages/example` on AppVeyor using `--browser chrome` and `--browser edge` as smoke tests.
  - updated PR https://github.com/cypress-io/cypress/pull/6181
  - opened https://github.com/cypress-io/cypress-example-kitchensink/pull/352
- closed https://github.com/cypress-io/cypress-example-recipes/issues/404
- team touchpoint @internal
- talk to **redacted** from **redacted** @slides
  - End-to-end testing questions; what parts can you automate; how to go around it, steps.
  - planning for presentation for Feb 4th in Boston
- adding pipeline artifacts to Bitbucket example https://bitbucket.org/cypress-io/cypress-example-kitchensink/addon/pipelines/home#!/results/15 @example

## Wednesday 2020-01-22

- looking at GitHub actions suddenly failing with `SEGSERV` @support
  - merged doc update pinning to `ubuntu-16.04`
  - looking at XVFB description https://github.com/cypress-io/cypress/pull/6199
- adding Ubuntu 18 base image https://github.com/cypress-io/cypress-docker-images/pull/211 and testing the fix in it @feature
  - pushed `cypress/base:ubuntu18-node12.14.1` to Docker hub
- closing https://github.com/cypress-io/cypress/issues/6184 and added a small unit test, added test job https://github.com/cypress-io/cypress-test-ci-environments/pull/27 @feature
- preemptive testing on Ubuntu 19 https://github.com/cypress-io/cypress-docker-images/issues/212 https://github.com/cypress-io/cypress-docker-images/pull/213 @feature
- redoing https://github.com/cypress-io/cypress/pull/6181 (Edge support) against branch `4.0-release` @feature
- Dashboard webinar discussion with Amir @slides
- looking at possible missing production dependency https://github.com/bahmutov/start-server-and-test/issues/229 @feature
- answer email about code coverage from parallel CI runs @support
- sent talk abstract to **redacted** @slides
- looked more at blank page during visit problem, might be a problem with buffering body during our script injection @feature

## Monday 2020-01-27

- we need to show a recipe that shows how to wait for iframe to load and how to spy / stub network calls from that iframe @example
- review `cypress/included:3.8.3` docker image pull request https://github.com/cypress-io/cypress-docker-images/pull/214 @feature
  - opened issues to automate creating browsers and included Docker images https://github.com/cypress-io/cypress-docker-images/issues/216
  - automate `cypress/included` creation https://github.com/cypress-io/cypress-docker-images/pull/217
- emails @internal
- test runner team touchpoint @internal
- interview with support engineer @hiring
- test more recipes in Chrome and Firefox before release https://github.com/cypress-io/cypress-example-recipes/pull/407 @example
- update example to close https://github.com/bahmutov/start-server-and-test/issues/88 @example
- added github-action example to test against Ubuntu 16 and 18 https://github.com/bahmutov/cypress-gh-action-example/pull/11 @example
- trying and answering a few Cypress GH Action questions @support
- expanded delayed resource recipe https://github.com/cypress-io/cypress-example-recipes/pull/408 to link to https://github.com/cypress-io/cypress/issues/1296 @example
- opened https://github.com/cypress-io/cypress/issues/6255 to allow passing custom XVFB arguments via an environment variable. @feature
- phone call with **redacted** @hiring
- merging combining code coverage for apps that load multiple pages https://github.com/cypress-io/code-coverage/pull/70 and released as new version @feature
- opened https://github.com/cypress-io/cypress/issues/6257 to add experiments @feature

## Tuesday 2020-01-28

- added note to post-deploy https://github.com/cypress-io/cypress/pull/6262 @feature
- adding experiments for https://github.com/cypress-io/cypress/pull/6265 and trying it out for component testing in https://github.com/cypress-io/cypress/pull/5923 @feature
- new release from user PR https://github.com/bahmutov/cypress-select-tests/pull/76 that adds `--invert` option @feature
- added tags support to our GitHub action https://github.com/cypress-io/github-action/pull/76 @feature
- created example how to use Cypress included Docker image from GH Action https://github.com/bahmutov/cypress-gh-action-included @example
- iframe UI and XHR examples in `cypress-example-stub-xhr-from-iframe` @example
  - helped my friend set up e2e test for his company, including Stripe credit card iframe enter

## Wednesday 2020-01-29

- add new Cypress course to our list of courses https://www.lynda.com/Developer-tutorials/End-End-JavaScript-Testing-Cypress-io/2814152-2.html @feature
- answering tweet messages @support
- started work on iframe blog post and recipe @blog
- adding recipe in https://github.com/cypress-io/cypress-example-recipes/pull/412 @example
- reworked experiments to keep them with the larger config @example
- yarn review @feature
- more work on the iframe blog post and recipe, almost done
- went to North Boston meetup @slides

## Thursday 2020-01-30

- Work on experiments PR https://github.com/cypress-io/cypress/pull/6265 @feature
  - updated https://github.com/cypress-io/cypress/pull/5923
- review doc clarification https://github.com/cypress-io/cypress-documentation/pull/2448 @feature
- opened https://github.com/cypress-io/cypress/issues/6277 (integration tests collapse UI) @feature
- started presentation deck https://cypress.slides.com/cypress-io/quality-in-1-million-projects @slides
- trying userbase.com @learning
  - https://userbase.com/docs/quickstart/
- looked at the hanging Cypress on GitLab CI @feature
  - https://github.com/cypress-io/cypress/issues/6279
  - created https://gitlab.com/cypress-io/cypress-example-included
  - solved the config problem (needed to clear entrypoint)
  - BUT the hanging is still possible, we need to handle this case better.
  - opened PR https://github.com/cypress-io/cypress/pull/6280 that prints nice error message, need to add unit tests
- preparing for **redacted** meeting on Friday @slides

## Friday 2020-01-31

- merged iframes recipe into master branch, waiting to publish the blog post @example
- comment on user's concerns in lifecycle events issue https://github.com/cypress-io/cypress/issues/686#issuecomment-580778908 @support
- **redacted** presentation @presentation
- interview **redacted** @hiring
- finish tests for https://github.com/cypress-io/cypress/pull/6280 (parsing invalid config error), landing @feature
- path to success discussion @internal
- more tweaks of iframes blog post, ready to be reviewed and published @blog

## The Weekend

- looking at cypress-svelte-unit-test https://github.com/bahmutov/cypress-svelte-unit-test/pull/59 @feature

