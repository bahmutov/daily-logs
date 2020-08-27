# February 2020

## Monday 2020-02-03

- Add more tests to experiments PR https://github.com/cypress-io/cypress/pull/6265 @feature
- looking at PR to Cypress github action to split installing NPM dependencies from Cypress binary install @feature
- opened https://github.com/cypress-io/cypress/issues/6303 when `cypress cache list` tries to access cache folder, but no binaries were installed ever @feature
- adding example how to do NPM install then Cypress binary install then cache it https://github.com/bahmutov/cypress-gh-action-split-install @example
- closed both https://github.com/cypress-io/github-action/issues/81 and https://github.com/cypress-io/github-action/issues/79 with example repo
- team touchpoint @internal
- updating default CircleCI orb image version to 12.14.0 from Node 10 https://github.com/cypress-io/circleci-orb/pull/222 @feature
- review https://github.com/cypress-io/cypress-documentation/pull/2448 @feature
- reviewing https://github.com/cypress-io/cypress/pull/5780 (rework TS types and added TS check) @feature
- reviewing https://github.com/cypress-io/cypress/pull/5906 (out of the box typescript support in the test runner) @feature
- watching "Tomasz Łakomy — Sleeping better at night — ConFrontJS 2019" https://www.youtube.com/watch?v=mVGWQK8j_s0&feature=youtu.be @learning
- reviewing code coverage issues @support
  - added CLA to https://github.com/cypress-io/instrument-cra before merging Yarn workspaces support https://github.com/cypress-io/instrument-cra/pull/63
  - added strong note that our code coverage plugin does not instrument code, closed https://github.com/cypress-io/code-coverage/issues/78
- released new version of `@cypress/skip-tests` that uses new `Cypress.isBrowser` method and updated https://github.com/cypress-io/cypress-example-recipes/pull/414 to skip iframe tests on Firefox @feature
- update https://jsonplaceholder.cypress.io/ to use our REST API and updated recipes https://github.com/cypress-io/cypress-example-recipes/pull/415 @example
  - need to update the blogpost (and screenshots)
- fixing the bug in `snap-shot-it` https://github.com/bahmutov/snap-shot-it/pull/497 @feature

## Tuesday 2020-02-04

- update iframes blog post with new urls and our own 3rd party domain @blog
- add notes to cypress-example-recipes about not using 3rd party domains and test names @example
- sent an email to **redacted** about a webinar @slides
- added cypress-iframe plugin to my recipe https://github.com/cypress-io/cypress-example-recipes/pull/416 @example
- show warning in code coverage plugin if there is no coverage information https://github.com/cypress-io/code-coverage/pull/128 @feature
- working to add full tests to https://github.com/cypress-io/cypress-skip-test/pull/37 @feature
- Cypress demo and conversation at **redacted** @presentation
- adding `headed` and `headless` to https://github.com/cypress-io/cypress-skip-test/pull/39, publishing new version 2.5.0 @feature
- talked to **redacted** people about their webinar progress @slides
- types review @feature
- fixing https://github.com/cypress-io/cypress-example-kitchensink GH Actions and Azure builds (ubuntu 16 problem) so we can upgrade to 3.8.3 and then pass https://github.com/cypress-io/cypress-example-kitchensink/pull/354 (plugins type jsdoc) @example
- trying to bisect the branch `v4.0-release` and find the bundle error. Using `git clean -fXd` to clean folder @feature

## Wednesday 2020-02-05

- looking at cypress-browserify-preprocessor @feature
  - clean up failing build
  - Add spec with bundling
  - opened https://github.com/cypress-io/cypress-browserify-preprocessor/issues/32 with imports / exports demo failing e2e test
- pushed updated browserify-preprocessor version into the branch, should fix failing recipe https://circleci.com/workflow-run/8c824365-f24f-43a9-a237-1663e9e758e7 @feature
- added Docker image with Chrome80 and FF72 https://github.com/cypress-io/cypress-docker-images/pull/220 @feature
- updating flaky kitchensink test https://github.com/cypress-io/cypress-example-kitchensink/pull/357 @example
- start testing kitchensink on Chrome 80 https://github.com/cypress-io/cypress-example-kitchensink/pull/358 @example
- created example https://github.com/cypress-io/gh-action-and-gh-integration and linked it @example
- disabled pagination test in cypress-documentation in Firefox @feature
- looking at bunch of `cypress/browsers` images that suddenly got Chrome 80 installed (because CI checked Docker Hub and received negative response) https://github.com/cypress-io/cypress/issues/6335. Good images still @feature
  - cypress/browsers:node10.11.0-chrome75
- restored images from local Docker images by pushing them @feature
- more Firefox testing @feature
- extra check before pushing Docker image https://github.com/cypress-io/cypress-docker-images/pull/224 @feature
- check Node version when testing base images @feature

## Thursday 2020-02-06

- **redacted** visit @presentation
- review and commit update https://github.com/cypress-io/commit-info/pull/108 @feature
- bump Chrome image used to test example repos https://github.com/cypress-io/cypress-test-example-repos/pull/81 @example
- update CDP recipe to work with Cypress v3 and v4 @feature
- update custom browser recipe to work with Cypress v3 and v4 @example
- disabled automatic Docker image push after build on CircleCI @feature
- adding Cypress v4.0.0 included image https://github.com/cypress-io/cypress-docker-images/pull/233 @feature
  - had to update https://github.com/bahmutov/cly that we use to scaffold test project
- working on strict Docker image not found in https://github.com/cypress-io/docker-image-exists/tree/handle-errors-better @feature

## Friday 2020-02-07

- update a few more Chrome images @feature
- consistent Docker naming scheme @feature
- https://github.com/cypress-io/docker-image-not-found @feature
  - only exits with 0 if Docker registry responds correctly "image not found", 1 for anything else
  - Using it in https://github.com/cypress-io/cypress-docker-images/pull/234
- added lint and build on each commit https://github.com/cypress-io/github-action/pull/83 @feature
- opening issue about Firefox not working inside github action, because it cannot run as root https://github.com/cypress-io/github-action/issues/84 @feature
- running FF on Circle https://github.com/cypress-io/cypress-example-kitchensink/pull/362 @example
- a few sanity updates for locked issues @feature
- looking at Edge detection on Mac PR https://github.com/cypress-io/cypress/pull/6364 @feature
- meeting about dashboard introduction webinar @slides
- can we have a Cypress CLI command to list found browsers @feature
  - original (closed) issues https://github.com/cypress-io/cypress/issues/1041 implemented in https://github.com/cypress-io/cypress/tree/add-cli-browsers-command-1041
  - got folded into issue 4540 - opened https://github.com/cypress-io/cypress/pull/6372 that prints detected browsers, need to handle `@packages` in CLI though - moved code into the binary.

## The Weekend

- Installed https://github.com/probot/weekly-digest in a couple of local repos @feature
  - https://github.com/bahmutov/start-server-and-test
- reading https://upmostly.com/tutorials/create-simple-web-app-react-airtable @learning

## Monday 2020-02-10

- creating `cypress/included:4.0.1` image https://github.com/cypress-io/cypress-docker-images/pull/237 @feature
  - enabled Docker image uploads from CI again
- fixing AppVeyor CI build for `cypress-example-piechopper` @example
- merged Yarn workspaces support for https://github.com/cypress-io/instrument-cra/pull/63 @feature
- Add example of custom command wrapping an async function https://github.com/cypress-io/cypress-example-recipes/pull/424 @example
- a few PR reviews @feature
  - https://github.com/cypress-io/circleci-orb/pull/189 (fix caching path in Cypress orb on Mac), updating https://github.com/cypress-io/cypress-example-kitchensink/pull/364
- looking at fetching backend code coverage bug https://github.com/cypress-io/code-coverage/issues/129 @feature
- test runner touch point @internal
- move performance tracking to environment variables from security context https://github.com/cypress-io/cypress/pull/6401 @feature
- added more information for `cypress info` command https://github.com/cypress-io/cypress/pull/6372 @feature
- checking launcher test PR https://github.com/cypress-io/cypress/pull/6376 @feature
- added CLA for renovate bot to https://github.com/cypress-io/instrument-cra/issues/93 @feature
- created CRA app with TypeScript to try instrument-cra https://github.com/bahmutov/cra-ts-code-coverage-example @example
- add CLA and PR review for https://github.com/cypress-io/cypress-and-jest-typescript-example/issues @example

## Tuesday 2020-02-11

- merged https://github.com/cypress-io/cypress-and-jest-typescript-example/pull/42 @example
- code refactor and backend code coverage testing https://github.com/cypress-io/code-coverage/pull/133 @feature
  - test frontend code coverage and backend coverage
  - publish new NPM module version only after both jobs pass
  - after this can look at improving backend code coverage request and moving it to plugins
- need to try `global.d.ts` approach https://github.com/cypress-io/cypress-example-kitchensink/issues/365 @example
- testing kitchensink on AppVeyor using Edge browser https://github.com/cypress-io/cypress-example-kitchensink/pull/352 @example
- tried using `global.d.ts` file without success https://github.com/cypress-io/cypress-example-kitchensink/issues/365 @example
- longer coverage report timeout https://github.com/cypress-io/code-coverage/pull/135 @feature
- team retrospective meeting @internal
- add `config-file` parameters to Cypress orb https://github.com/cypress-io/circleci-orb/pull/225 and published `cypress-io/cypress@1.15.0` @feature
- opened issue https://github.com/cypress-io/cypress/issues/6420 to check links in our Markdown files @feature
- a single Percy snapshot for Cypress test runner desktop GUI PR https://github.com/cypress-io/cypress/pull/6421 (Percy does not render it correctly yet) @feature
- built https://github.com/bahmutov/term-to-html for converting terminal output to HTML pages. Looks nice, see stored artifat https://circleci.com/gh/cypress-io/cypress/251795#artifacts/containers/0 @feature

## Wednesday 2020-02-12

- checking markdown links in https://github.com/cypress-io/code-coverage/pull/136 and https://github.com/cypress-io/github-action/pull/87 @feature
- wrote https://glebbahmutov.com/blog/check-markdown-links/ about it @blog
- looking at https://github.com/cypress-io/cypress-example-recipes/issues/425 @example
- review PRs: cypress-vue-unit-test and GitHub-action (for new parallelization id) @feature
- working a little bit more on visual diffing, got styles to work https://github.com/cypress-io/cypress/pull/6421 @feature
- Cypress webinar with PlanGrid https://cypress.slides.com/cypress-io/quality-in-1-million-projects @presentation
- answering questions about Cypress Docker images, opened a few issues @feature
  - https://github.com/cypress-io/cypress-docker-images/issues/241
  - https://github.com/cypress-io/cypress-docker-images/issues/240 (clarify latest tag https://github.com/cypress-io/cypress-docker-images/pull/242)
- Added visual testing to CLI commands PR https://github.com/cypress-io/cypress/pull/6372 and command output HTML sanitization, see https://github.com/cypress-io/cypress/pull/6372#issuecomment-585453473 @feature

## Thursday 2020-02-13

- fixing Travis CI build for https://github.com/bahmutov/cypress-failed-log @feature
- added CLA assistant to https://github.com/cypress-io/cypress-skip-test/issues/44 @feature
- updated https://github.com/cypress-io/cypress-skip-test to Cypress v4 @feature
- added checking links in markdown files for https://github.com/cypress-io/cypress-docker-images/pull/244 and fixed a few broken ones @feature
- created https://github.com/cypress-io/cypress-example-docker-compose-included to investigate https://github.com/cypress-io/cypress-docker-images/issues/239 @example
  - opened https://github.com/cypress-io/cypress/issues/6449 because Firefox consistently hangs in Circle (but on different specs)
- reviewed and merged https://github.com/cypress-io/cypress/pull/6394 for additional GH Actions variables @feature
- recruiting @hiring
- talked to prospective webinar company **redacted** @slides
- Escalation, adding example in https://github.com/cypress-io/cypress-example-circleci-orb @example
- fixed types in https://github.com/cypress-io/pay-app using `global.d.ts` @feature
- and added code coverage PR https://github.com/cypress-io/pay-app/pull/115 @feature
  - found that there might be a bug collecting code coverage if multiple tests use a single `cy.visit` in a `before` hook. https://github.com/cypress-io/code-coverage/issues/137

## Friday 2020-02-14

- GitLab CI vars https://github.com/cypress-io/cypress/pull/6232 @feature
- adding more images https://github.com/cypress-io/cypress-docker-images/pull/245 (base node 12.8.1, then browsers with Chrome80 on top of that) @feature
- for tech talk showed visual testing for CLI @internal
- Webinar call with **redacted** @slides
- updating CLI info command PR to land it https://github.com/cypress-io/cypress/pull/6372 with tests, opened doc PR https://github.com/cypress-io/cypress-documentation/pull/2509 @feature

## The Weekend

- submitted "Rethinking Continuous Integration Configuration: CircleCI Orbs and GitHub Actions" to Observe 2020 in Boston @slides
- looked at a good example of testing a Preact app with Cypress https://github.com/bahmutov/wikipedia-kaios (uses hooks a lot, can it benefit from App Actions)? @example
- applying to meetups, proposals, some examples for users, upgrading testing-workshop to Cypress v4 @slides

## Tuesday 2020-02-18

- releasing `cypress/included:4.0.2` image, cleaned up generation scripts to prevent empty `--from` image. @feature
- refactoring `bahmutov/npm-install` GitHub Action to make it testable @feature
  - https://github.com/bahmutov/npm-install/pull/14
  - https://github.com/bahmutov/npm-install/pull/11
  - trying to separate test and release jobs, figured out how to use the current action to run examples in subfolders
- Added multiple working directories support https://github.com/bahmutov/npm-install/pull/21 @feature
- now can move to testing `cypress-io/github-action` @feature
  - Testing env handling https://github.com/cypress-io/github-action/pull/90
  - fixed a couple of issues by creating example jobs that will execute https://github.com/cypress-io/github-action/pull/92

## Wednesday 2020-02-19

- merging user PR that adds Yarn workspaces support https://github.com/cypress-io/github-action/pull/94 @feature
- added dark theme support to `term-to-html` https://github.com/bahmutov/term-to-html/pull/7 @feature
- reply to a nice blog post https://dev.to/bahmutov/comment/ll1o @support
- added live example for Vue CLI inside our GH Action for https://github.com/cypress-io/github-action/issues/56 at https://github.com/cypress-io/cypress-gh-action-vue-example @example
- PR review to verify expected number of test results https://github.com/cypress-io/cypress/pull/6496 @feature
- looked at `cypress-audit` plugin https://github.com/cypress-io/cypress-documentation/pull/2517 and tried it in https://github.com/cypress-io/cypress-example-todomvc/tree/add-lighthouse-audit @example
- talk to **redacted** about possible webinar @slides
- print node versions https://github.com/cypress-io/cypress-docker-images/pull/253 @feature
- added tags support to our orb https://github.com/cypress-io/circleci-orb/pull/230 testing in https://github.com/cypress-io/cypress-example-circleci-orb @feature
- confirm screenshot resolution in GH actions https://github.com/cypress-io/github-action/pull/96 and https://github.com/cypress-io/github-action/pull/97 - could get image screenshots 1280x1024 on Chrome headless in GH action, want to try getting 1920x1080 @feature
- got the 1920x1080 screenshots in https://github.com/cypress-io/github-action/pull/98 @example
- updating testing workshop, adding circleci Firefox run, GH Actions example https://github.com/cypress-io/testing-workshop-cypress/pull/195 @example

## Thursday 2020-02-20

- confirm top window resolution in https://github.com/cypress-io/github-action/pull/98 @feature
  - confirmed video generated by Chrome headless is 1920x1080 inside GH Action
- landed https://github.com/cypress-io/cypress/pull/6372 `cypress info` command @feature
- opened https://github.com/cypress-io/cypress/issues/6520 to add reporting video resolution to the terminal output @feature
- fixed Phonecat, switched it to CircleCI, added Renovate @example
- wrote Dashboard video script @slides
- looked at the error https://github.com/cypress-io/cypress/issues/2487 which is another case of the test finishing too quickly @feature
- looked at globally installed Cypress and intellisense a little bit (support question) @support
- opened https://github.com/cypress-io/cypress/issues/6526 about misleading error message @feature
- opened **redacted** about wrong blog post url @support
- sending email to Cypress testing workshop attendees @slides
- prototype snapshot + HTML generated file in https://github.com/cypress-io/cypress/tree/update-cypress-cache-list-6404 @feature

## Friday 2020-02-21

- update docker images with Node 8 and a few notes @feature
  - https://github.com/cypress-io/cypress-docker-images/pull/257
  - building `cypress/base:8.0.0` https://github.com/cypress-io/cypress-docker-images/pull/258
- using the new image to test Cypress install https://github.com/cypress-io/cypress-test-node-versions/pull/48 @feature
- looking at CircleCI job reporting after parallel step @feature
  - example in https://github.com/bahmutov/after-test-run-circle-example
  - probably need parallel build to save unique files, opened https://github.com/bahmutov/after-test-run-circle-example/issues/1
  - **good blog post candidate**
- sent email to ReactWeek NYC (July 2020) organizers @slides
- sending proposal to Nordic.js `How to write tests and save Earth a little bit` @slides

## Wednesday 2020-02-26

- fixing commit message and cypress test node versions on Node v8.0.0 https://github.com/cypress-io/cypress/issues/6559 @feature
- fixing chalk dependency for Node v8.0.0 https://github.com/cypress-io/cypress/pull/6569 @feature
- reading "Modern 2020 React stack, or how we switched away from Angular" https://medium.com/@sidetrade_labs/modern-2020-react-stack-or-how-we-switched-away-from-angular-a9efb65d51e5 @learning
- add one more example https://github.com/cypress-io/cypress-documentation/pull/2542 @example
- finish slides for tomorrow's presentation https://slides.com/bahmutov/stop-write-cypress-test @slides

## Thursday 2020-02-27

- final touches on the presentation https://slides.com/bahmutov/write-a-cypress-test and the talk itself. Excellent feedback @presentation
- add one more solution for retry-ability @example
  - Docs PR https://github.com/cypress-io/cypress-documentation/pull/2548
  - kitchensink PR https://github.com/cypress-io/cypress-example-kitchensink/pull/376
- review and merge https://github.com/cypress-io/cypress-docker-images/pull/264 with new base image @feature
- rebuilding Node 8.0.0 image https://github.com/cypress-io/cypress-docker-images/pull/266 @feature
