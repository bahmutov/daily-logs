# November 2019
## Friday 2019-11-01

- Cypress workshop at ReactiveConf @presentation

## Monday 2019-11-04

- Merged IBM example link as a community recipe in https://github.com/cypress-io/cypress-example-kitchensink/pull/302 @example
- closing branch `3.5.0` and https://github.com/cypress-io/cypress-example-kitchensink/pull/294 and instead adding Windows CircleCI build in branch `add-circle-windows-build` in pull request https://github.com/cypress-io/cypress-example-kitchensink/pull/319 @example
  - running the spec times out right away, opened https://github.com/cypress-io/cypress/issues/5596
  - interesting - it is hanging with `cy.visit(url)` but NOT when you move the base url to the `cypress.json` file
- test runner planning meeting @internal
- looking the NPM version set error in https://circleci.com/gh/cypress-io/cypress/182772 - https://github.com/cypress-io/cypress/pull/5601 @support
- pushed Docker image `cypress/included:3.6.0` @feature
- tested https://github.com/cypress-io/cypress-documentation/pull/2194 for replacing `stop-only` with eslint-no-only-tests @feature
- GitHub actions now support caching dependencies and other artifacts https://github.com/actions/cache @feature
  - testing it in https://github.com/cypress-io/testing-actions/pull/1 example cached run https://github.com/cypress-io/testing-actions/runs/288449535 - `npm ci` takes 4 seconds with binary restore taking 12 seconds, see https://twitter.com/bahmutov/status/1191505460198817792
  - parallel build https://github.com/cypress-io/testing-actions/runs/288654012 https://dashboard.cypress.io/#/projects/z43z9i/runs/4/specs
  - really want to write `@cypress/github-action`, opened an issue asking how to use `actions/cache` from JavaScript action https://github.com/actions/cache/issues/55
  - Placeholder repo https://github.com/cypress-io/github-action
- ran bot comments on Cypress release v3.6.0 @feature

## Tuesday 2019-11-05

- remove Cypress 3.5.0 patch from cypress-example-kitchensink, since we have already upgraded to 3.6.0 @example
- adding GitHub actions to cypress-example-kitchensink in https://github.com/cypress-io/cypress-example-kitchensink/pull/320 @example
  - single job with Dashboard recording
  - two parallel jobs with single install job
  - video and screenshot upload
  - good list of GitHub actions examples http://www.thedreaming.org/2019/09/10/github-ci/
- worked more on validating updated list of browsers in `pass-list-of-browsers-to-config-5067` @feature
- update firefox branch to build and upload Linux binary @feature
  - also factored out command and job to post GitHub comment with pre-release instructions.
- **redacted** meetings @internal
- started slides https://cypress.slides.com/cypress-io/siemens-case-study @slides
- found good list of repos with test situations like https://github.com/text-mask/text-mask @learning

## Wednesday 2019-11-06

- update integration tests for browser list @feature
- added to `cypress-test-example-repos` jobs to run tests against `cypress-example-todomvc-redux` and `cypress-example-realworld` @example
  - https://github.com/cypress-io/cypress-test-example-repos/pull/66
  - https://github.com/cypress-io/cypress-test-example-repos/pull/67
- phonecall about **redacted** @internal
- update more tests for list of browsers @feature
- published circleci orb v1.12.0 https://github.com/cypress-io/circleci-orb/releases/tag/v1.12.0 with firefox executor @feature
  - and trying to figure out the demo pre-release build through orb
  - published orb 1.13.0 with optional `post-install` steps
- review documentation change for configuration guide https://github.com/cypress-io/cypress-documentation/pull/2228 to provide more examples for each config value @feature
- adding image `browsers/node12.13.0-chrome78-ff70/` https://github.com/cypress-io/cypress-docker-images/pull/170 @feature
- update `cypress-example-realworld` to work on Node 12 @example
- created https://github.com/cypress-io/cypress-skip-test after an idea from Kevin @feature
- ran Cypress tests against https://github.com/text-mask/text-mask and they ran just fine @example

## Thursday 2019-11-07

- Published plugin https://github.com/cypress-io/cypress-skip-test @feature
  - adding to the docs https://github.com/cypress-io/cypress-documentation/pull/2230
  - iterating on features
- Updating realworld example tests to run on Firefox, finally passed - and we have excluded one test that was failing using `@cypress/skip-test` plugin @example
- added logic to use plugins browsers in open and run mode, updated all tests @feature
- reviewed 2 pull requests to **redacted** @feature

## Friday 2019-11-08

- another feature for `cypress-skip-tests` - to allow conditional logic like stubbing routes only on some platforms @feature
- opened issue to explain Test Runner keyboard shortcuts better https://github.com/cypress-io/cypress-documentation/issues/2231 @feature
- found a way to hide fiddle inside `details` section, which allows a Markdown page to test itself https://github.com/cypress-io/cypress-fiddle/releases/tag/v1.3.0 @feature
- enabled threads in our chat channel @support
- conference report during TechTalks @internal
- working fiddle when visiting external site @feature
- more review of documentation change https://github.com/cypress-io/cypress-documentation/pull/2228 @feature
- added e2e test to filtering browsers in the plugins file @feature

## The Weekend

- Fork https://github.com/actions/cache into https://github.com/cypress-io/github-actions-cache to see if we can reuse it for `@cypress/github-action`, made a branch `reusable-functions` at https://github.com/cypress-io/github-actions-cache/tree/reusable-functions @feature
  - Note: you can enable verbose actions debug logs https://github.com/actions/toolkit/blob/master/docs/action-debugging.md#step-debug-logs by setting Actions secret `ACTIONS_STEP_DEBUG: true`
  - opened issue https://github.com/actions/toolkit/issues/209 because cannot execute `npm ci` using `exec.exec` to pass `env` object
  - success running jobs in parallel using matrix strategy
- working on publishing official Cypress GitHub action https://github.com/cypress-io/github-action @feature
  - problem with transpiled `dist` folder, opened issue https://github.com/cycjimmy/semantic-release-action/issues/4 for now committing `dist` folder to Git
  - working action
- Writing blog post about self-testing JAM pages @blog
  - https://github.com/bahmutov/self-testing-jam
  - "Self-testing JAM pages"

## Tuesday 2019-11-12

- Small edits to the post "Self-testing JAM pages" @blog
- updated blog post in response to https://github.com/cypress-io/cypress/issues/5667 @support
- answering Disqus and a few small github issues @support
- merged PR with recipe that shows how to monitor performance of site with Cypress https://github.com/cypress-io/cypress-example-recipes/tree/master/examples/ testing-dom__performance-metrics @example
- approved https://github.com/cypress-io/cypress-example-recipes/pull/358 about removing unnecessary files from each recipe @example
- looking at Siemens slides @slides
- pull request to add caching to Azure CI https://github.com/cypress-io/cypress-example-kitchensink/pull/323 @example
- [ ] reply to some user comments on https://www.cypress.io/blog/2019/01/03/stop-using-page-objects-and-start-using-app-actions but could not log into Disqus
- added parsing detected browser version to major version number https://github.com/cypress-io/cypress/pull/5068 @feature
  - tested Kitchensink with Microsoft Edge - works
- test runner meeting @internal
- published https://github.com/marketplace/actions/cypress-io @feature
- added several more features to github-action @feature
  - now can run Kitchensink using GH Action https://github.com/cypress-io/cypress-example-kitchensink/pull/326
  - trying to get all platforms working - `start` has a problem on Windows, opened https://github.com/actions/toolkit/issues/216

## Wednesday 2019-11-13

- running background server while running tests in GitHub Actions on Windows, almost working correctly @feature
- Pass GitHub Actions info to the dashboard https://github.com/cypress-io/cypress/pull/5687 @feature
- Strip double quotes if any from ci build id and group name CLI arguments https://github.com/cypress-io/cypress/pull/5692 @feature
- experiment with changing source code and pushing back to GitHub from action https://github.com/bahmutov/gh-action-with-prettier @example
- built a Docker image with Chrome, FF and Brave as example https://github.com/cypress-io/cypress-docker-images/pull/175 @feature
- written about Cypress GitHub Action @blog
- another pass over Siemens slides @slides

## Thursday 2019-11-14

- wrote PR to explain custom list of browsers in the plugins https://github.com/cypress-io/cypress-documentation/pull/2245 @feature
- assigned myself to finish updating config docs https://github.com/cypress-io/cypress-documentation/issues/2227 and PR https://github.com/cypress-io/cypress-documentation/pull/2228 @feature
- need to make sure we detect forked PR in GitHub Action https://github.com/bahmutov/is-fork-pr/issues/122 - ha, this already done and released, Cypress should detect forked PRs from environment variables @internal
- tried "manual" parallel test run via test files and globby @feature
- adding new pull request review MD files https://github.com/cypress-io/cypress/pull/5701 @internal
- better performance for code coverage by stringifying it ourselves https://github.com/cypress-io/code-coverage/pull/98 new version published @feature
- added support for `ENVIRONMENT` variable https://github.com/cypress-io/cypress-skip-test/pull/12 new version published @feature
- slides review with Murat for Siemens, will continue tomorrow morning @slides
- published github action https://github.com/bahmutov/npm-install see https://github.com/bahmutov/npm-install-action-example @feature
- wrote blog post @blog

## Friday 2019-11-15

- published blog post https://glebbahmutov.com/blog/trying-github-actions/ @blog
- review Siemens slides @slides
- added GitLab CI example with Yarn and caching https://gitlab.com/bahmutov/cypress-yarn-gitlab-ci-example @example
- opened https://github.com/cypress-io/cypress/issues/5712 - we need to validate config returned from plugins file just like we validate object loaded from `cypress.json` @feature
- test talks, need to replace `containers` with `machines` in cypress-io/github-action @feature
- deployed new github hook with commit parsing doing unique issue numbers @feature

## The Weekend

- more work on cypress/github-action @feature
  - custom `cache-key` parameter
  - `browser` name
- found `GITHUB_TOKEN` documentation https://help.github.com/en/actions/automating-your-workflow-with-github-actions/authenticating-with-the-github_token @learning
- working on slides for DevIntersection https://cypress.slides.com/cypress-io/e2e-using-cypress @slides

## Monday 2019-11-18

- add `working-directory` and `install` parameters to github action, created monorepo use example https://github.com/bahmutov/cypress-gh-action-monorepo @feature
  - Released https://github.com/cypress-io/github-action/releases/tag/v1.12.0
- added warning about parallel id and SHA and re-running github action checks for a run that has already finished @feature
- adding more tests for browsers list @feature
- looked again at the issue description https://github.com/cypress-io/cypress-documentation/issues/2227 @support
- worked on slides https://cypress.slides.com/cypress-io/e2e-using-cypress @slides
- smoke test example in https://github.com/cypress-io/cypress-example-todomvc-redux/pull/58 @example

## Tuesday 2019-11-19

- updated `snap-shot-core` and `snap-shot-it` to bring dependencies without security issues @feature
- landed list of browsers pull request, now need to test it, will use `cypress/browsers:node12.13.0-chrome78-ff70-brave78` https://github.com/cypress-io/cypress-docker-images/pull/175 @feature
- started https://github.com/cypress-io/cypress-example-recipes/pull/368 to show v3.7.0 recipes @example
  - custom browsers list, including Brave
- adding ability to install pre-release versions of the Test Runner easily in https://github.com/cypress-io/cypress-example-recipes/issues/369 @feature
- described how to write recipes for upcoming test runner release https://github.com/cypress-io/cypress-example-recipes/blob/master/Development.md @feature
- team retrospective @internal
- added CLA to `cypress-io/github-action` because there were user pull requests https://github.com/cypress-io/github-action/issues/30 @feature
- reviewing user-submitted pull requests to GitHub action @feature
- closed a few issues in GitHub action like using debug logs, added development doc @support
- published new release with user's pull requests @feature

## Thursday 2019-11-21

- presentation about Cypress at DevIntersection, 1 hour @presentation
- looking at `wait-on-timeout` which seems to not resolve inside GitHub Action https://github.com/jeffbski/wait-on/issues/30 @feature

## Friday 2019-11-22

- full day Cypress workshop at DevIntersection @presentation

## Monday 2019-11-25

- question about system Node version https://github.com/cypress-io/cypress/issues/5785 @support
- looking at GitHub actions and a few open issues @support
- For artifacts: added an example https://github.com/bahmutov/cypress-gh-action-example/issues/3 and https://github.com/cypress-io/github-action/issues/33 @example
- for wait-on timing out I wrote my own utility that seems to work fine https://github.com/bahmutov/test-server-ping and https://github.com/bahmutov/cypress-gh-action-monorepo/commit/ddf815791ae238245f5c86a0729b438e872bb773/checks?check_suite_id=327694645 @feature
- made my own https://github.com/cypress-io/github-action/pull/43 released new version v1.16.1 @feature
- configure Renovate for https://github.com/bahmutov/cypress-gh-action-example/issues/1 @feature
- presentation for **redacted** and discussing their problems and how Cypress can solve them @presentation
- looking at TypeScript for `cy.its` again https://github.com/cypress-io/cypress/pull/5755 @feature
- looked at performance entries to see if we can know about in-flight network resource requests (and make sure that all network requests finished for example). See https://developer.mozilla.org/en-US/docs/Web/API/PerformanceObserver and in-flight proposal https://github.com/w3c/resource-timing/issues/137 @example
- sent abstract to NomadJS for January 2020 online presentation @slides

## Tuesday 2019-11-26

- review and merge pull requests related to `cy.its` and `cy.invoke` @feature
- opened https://github.com/cypress-io/cypress/issues/5799 and https://github.com/cypress-io/cypress/issues/5800 @feature
- testing Firefox branch against example repos: @example
  - cypress-example-kitchensink
  - cypress-example-todomvc
  - cypress-documentation
- reading https://slides.com/dobromir/modern-e2e-testing-with-cypress/ @learning
- updated badge for Semaphore V2 in https://github.com/cypress-io/cypress-example-kitchensink since now they are available, and project is public @example
- email **redacted** about working together with **redacted** @internal
- looking at the hanging test https://github.com/cypress-io/cypress-test-example-repos/issues/72 @feature
- Interviewed **redacted** @hiring
- publishing new version of commit-message-install with updated execa, maybe this will solve hanging on CI @feature
  - set `@cypress/commit-message-install` to READ only for Cypress developers - only our NPM publisher bot should have write permissions
  - also set `@cypress/github-commit-status-check` to READ only for developers
- updating cypress-test-ci-environments, because Node versions are old @feature
  - https://github.com/cypress-io/cypress-test-ci-environments/issues/25
- building `cypress-internal/xvfb:12.13.0` Docker image - ughh no matter what I do, I cannot push a Docker image to that hub `denied: requested access to the resource is denied` and many people complain https://github.com/docker/hub-feedback/issues/1222 - turns out it was just wrong organization name in existing build file @feature
- built docker image `cypress/base:ubuntu16-12.13.1` @feature
- looked at **redacted** @learning
- pull request review https://github.com/cypress-io/cypress/pull/5562 @feature

## Wednesday 2019-11-28

- review PR https://github.com/cypress-io/cypress/pull/5562 @feature
- added `cy.invoke` with arrays example https://github.com/cypress-io/cypress-documentation/pull/2264 and tested in cypress fiddle - created branch 3.7.0 there @example
- opened https://github.com/cypress-io/cypress/issues/5807 for reading Electron Chrome flags from environment variable @feature
- opened https://github.com/cypress-io/cypress/issues/5808 to detect SIGBUS and other kill signals to the child process from CLI @feature
  - wrote PR https://github.com/cypress-io/cypress/pull/5810
- looking at the CI failure for pre-release of 3.7.0 @feature
- added cy-api to the list of plugins in our documentation https://github.com/cypress-io/cypress-documentation/pull/2268 @feature

## The Weekend

- ignore `grunt*` and other dev dependencies in renovate https://github.com/cypress-io/cypress-example-piechopper/issues/82 @example
- wrote https://glebbahmutov.com/blog/mocha-and-sinon/ @blog
- helped with https://github.com/duluca/lemon-mart/pull/18 @support
- released new version of npm-install GitHub Action https://github.com/bahmutov/npm-install/releases/tag/v1.2.0 with `working-directory` parameter @feature
  - this is to implement https://github.com/cypress-io/github-action/issues/40
- started https://github.com/bahmutov/keep-password-secret to use as an example @example
- wrote a blog post to be published https://glebbahmutov.com/blog/keep-passwords-secret-in-e2e-tests/ @blog
