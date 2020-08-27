# September 2019

## Tuesday 2019-09-03

- looked at a couple of issues opened across the repos. @support
- https://github.com/cypress-io/circleci-orb/pull/165 (a few command names) @feature
- https://github.com/cypress-io/circleci-orb/pull/160 (link to the orb repo in the description) @feature
- custom cache key for install job, released as v1.9.0 https://github.com/cypress-io/circleci-orb/releases/tag/v1.9.0 @feature
- Slido meeting about the upcoming workshop @presentation
  - all the little details about the content and organization
- example using `.as` to save variables in test context and avoid pyramid of callbacks (answered Gitter question) @example
- replied to email from conference organizers from AngularMIX & anglebrackets @presentation
- read through the **redacted** to understand what is going on @feature
- answered https://github.com/cypress-io/cypress/issues/5080 @support
- example using `jsconfig.json` to get intelligent code completion in a regular JS project https://github.com/cypress-io/cypress-documentation/pull/2054 @example
- fixed `.nyc_output` in a subfolder https://github.com/bahmutov/cy-nested-code-coverage/issues/1 @feature
  - this probably resolves https://github.com/cypress-io/code-coverage/issues/18
- wrote https://glebbahmutov.com/blog/cypress-using-child-window/ with example repo https://github.com/bahmutov/cypress-open-child-window @blog

## Wednesday 2019-09-04

- added new features to https://github.com/cypress-io/cypress-example-kitchensink-auto @example
  - typescript definition
  - generate tests from object of definitions
  - description and name
-  started slide deck with Justin James https://cypress.slides.com/cypress-io/cypress-on-ci/ for upcoming Webinar @presentation
- last edit to instrument create-react-app v3 blog post @blog
- looked at the jQuery TS definition breaking cypress testing library https://github.com/cypress-io/cypress/issues/5065 @feature
  - related to upgrading jQuery to v3 pull request that is almost there https://github.com/cypress-io/cypress/pull/1229
- answered **redacted** email @hiring
- **redacted** support call about **redacted** - need to release some of the stuff we have shown them
- a few text changes in FAQ https://github.com/cypress-io/cypress-documentation/pull/2056 @feature
- Looked at filtering collected tests from Cypress in local branch `let-user-change-tests`. - pushed it to https://github.com/cypress-io/cypress/tree/let-user-change-tests @feature
- **redacted** presentation @internal
- instrument CRA v3 and collect code coverage PR https://github.com/test-wrangler/practical-tdd-react/pull/1 @feature
- opened issue https://github.com/cypress-io/cypress-documentation/issues/2057 - missing `projectRoot` from our configuration docs page @feature
- answered several questions from Justin Searls using `cypress-example-kitchensink-auto` - it is awesome and fast playground for trying out Cy snippets. @example

## Thursday 2019-09-05

- more features for https://github.com/cypress-io/cypress-example-kitchensink-auto @feature
  - maybe rename and publish as `cy-sandbox`?
- added example and plugin to our docs https://github.com/cypress-io/cypress-documentation/pull/2058 @example
  - I think it would be super nice to test example using `cy-sandbox` right there in the documentation repo
- updated **redacted** scope of work @feature
- added proposal to filtering tests https://github.com/cypress-io/cypress/issues/1865#issuecomment-528386095 and this should be in local branch `let-user-change-tests`. @feature
- update Semaphore V2 example with simpler caching and using built-in env variables https://github.com/cypress-io/cypress-example-kitchensink/pull/291 @example
- looked up CircleCI API to trigger workflow / project build for Kate https://circleci.com/docs/api/#trigger-a-new-build-by-project-preview @internal
- services testing workshop and discussion zoom @internal
- Open sourced and published https://github.com/cypress-io/cypress-fiddle @feature
  - added Markdown support to test description
  - tried writing a test or two for kitchensink in branch `use-cypress-fiddle`

## Friday 2019-09-06

- looked at v5 of cypress-testing-library that includes our retry mechanism @learning
  - done by https://twitter.com/JohnHarmanWho in https://github.com/testing-library/cypress-testing-library/pull/78
  - tweeted about it https://twitter.com/bahmutov/status/1169953993835065344
- link cypress-fiddle in our docs https://github.com/cypress-io/cypress-documentation/pull/2060 @feature
- trying to trigger CircleCI project build via https://circleci.com/docs/api/#trigger-a-new-build-by-project-preview but without success, posted a comment https://support.circleci.com/hc/en-us/articles/115014005208?page=1#comment_360002892314 asking about it @feature
  - maybe can trigger a single job and just have production deploy do it all (build, test, deploy) via orb commands?
- reviewed PR that transfers organization's subscription @feature
- Sent message to **redacted**, want to help add Cypress as e2e test tool
- published new version of CircleCI Orb with new executors that include Chrome browser https://github.com/cypress-io/circleci-orb/releases/tag/v1.10.0 @feature
- trying to fix remaining tests in PR to upgrade jQuery to v3 https://github.com/cypress-io/cypress/pull/1229 @feature
  - fixed all problems except for server test - the screenshot height is slightly different from the snapshot value
- watched "Cypress + Gatsby" webinar https://www.youtube.com/watch?v=Tx6Lg9mwcCE @learning
- Found really weird behavior when the app uses `location.href=…` syntax, opened https://github.com/cypress-io/cypress/issues/5099 @feature

## The Weekend

- updated https://github.com/lourenci/react-kanban/pull/100 based on review feedback @example
- submitted workshop to Agile Testing Days 2020 Chicago, June 21-25 2020 @presentation
  - 2 hour workshop
- applied to Confoo.ca @presentation
- writing blog post how to set up Prettier, VSCode and ESLint with Prettier @blog

## Monday 2019-09-09

- finish writing https://glebbahmutov.com/blog/configure-prettier-in-vscode/ @blog
- watched intro to Cypress https://twitter.com/library_dev/status/1170975695293562880 video by https://twitter.com/library_dev @learning
  - shows global app download
  - shows node install then Cypress install
  - shows how to run Cypress using `npx` then example tests
- looked quickly at long spec paths not being visible in the CLI report https://github.com/cypress-io/cypress/issues/4977 @feature
- prototype using fiddle in documentation repo, local branch `use-cypress-fiddle` @feature
  - pushed branch, cannot get the right syntax highlighting to work
  - got fiddles working, and found a bug https://github.com/cypress-io/cypress-fiddle/issues/11
  - opened WIP PR https://github.com/cypress-io/cypress-documentation/pull/2063
- test runner meeting @internal
- answering Cypress orb questions @support
- moved `cypress-fiddle` blurb to debugging guide https://github.com/cypress-io/cypress-documentation/pull/2060 @feature
- move the answer to the right English FAQ https://github.com/cypress-io/cypress-documentation/pull/2056 @feature
- add answer about tests failing in CI https://github.com/cypress-io/cypress-documentation/pull/2064 @feature
- wrote prototype of testing CLI output using Percy snapshot comparison https://github.com/bahmutov/percy-for-cli-example @feature
  - capture output from a CLI program with ANSI color escape codes
  - convert them to HTML
  - send HTML as a DOM snapshot to Percy
  - using image diffing to detect differences in CLI output, use branch review workflow, etc

## Tuesday 2019-09-10

- replied to Cypress at Confoo workshop @presentation
- looked at typescript error in the cypress-axe example - not our problem https://github.com/chandramuralis/cypress-axe-typescript-error @feature
- increase XVFB timeout from 5 to 30 seconds https://github.com/cypress-io/cypress/pull/5114 @feature
- looking at pull request to give better error message when the cypress install binary is invalid https://github.com/cypress-io/cypress/pull/5060 @feature
- closed PR about environment variables that depend on the OS @feature
  - https://github.com/cypress-io/cypress/pull/5037
  - https://github.com/cypress-io/cypress/issues/5036
- document TypeScript files in NYC report for code coverage https://github.com/cypress-io/code-coverage/issues/73 @feature
- PR to print coverage counters in the command log https://github.com/cypress-io/code-coverage/pull/74 going back and forth with review @feature
- writing Cypress on CI webcast abstract @presentation
- let's try using custom list of browsers change https://github.com/cypress-io/cypress/pull/5068 from branch `pass-list-of-browsers-to-config-5067` to return local Electron app in branch `test-electron-app-4964` @feature
  - First need to merge latest from `develop` to Chrome recording branch `add-cri-4608`
  - `pass-list-of-browsers-to-config-5067` is up to date with `develop`
  - `add-cri-4608` trying to update all snapshots to be up to date with `develop`
  - finally merged back the latest `add-cri-4608` and `pass-list-of-browsers-to-config-5067` into `test-electron-app-4964`.
- support call about TeamCity and dashboard @support
- figured out how to send the reporter (not the iframed app) to Percy for visual command log diffing @example
  - https://percy.io/bahmutov/percy-cypress-command-log-example
  - https://github.com/bahmutov/percy-cypress-command-log-example
- looking at spec summary and long filenames PR https://github.com/cypress-io/cypress/pull/5120 - remote branch `issue-4977-specfiles-in-stdout` @feature
  - made own branch `try-cli-visual-diffing`
  - experimented with `cli-table2` and `cli-table3` trying to get a cell inside a table with 2 rows but without inner separators, finally managed to do this, see https://github.com/bahmutov/test-cli-table3
  - Still the table in Cypress spec results was misaligned, probably needs to be upgraded to `cli-table3`
- wrote blog post https://glebbahmutov.com/blog/visual-diffing-for-CLI-apps/ @blog

## Wednesday 2019-09-11

- experiment with capturing test runner screenshot @feature
  - use DevTools "Capture Screenshot" command
  - use DevTools Cypress command `cy.now('screenshot', null, 'my-example', {log: false, capture: 'runner'})`
  - how to do this automatically and copy the captured image to clipboard?
- trigger Cypress development build by creating an empty commit on GitHub @feature
  - https://github.com/cypress-io/cypress-documentation/pull/2070
- testing Electron branch `test-electron-app-4964` @feature
  - start statis example site in `~/git/example-site` with `http-server -p 4600 -c-1 .`
  - run Cypress with `npm run dev -- --project ~/git/electron-sandbox`
  - moved custom code into `@cypress/electron-plugin`, using plugins file to return path to Electron browser to load https://github.com/cypress-io/cypress-electron-plugin
  - tried building beta version of Cypress from electron branch and installed it in `electron-sandbox` and run the app https://github.com/cypress-io/electron-sandbox
- answering user question https://github.com/cypress-io/circleci-orb/issues/175 @support
- listening to Amir on "RealTalkJavaScript" [Episode 49: Are Your Tests Developer Friendly? - Amir Rustamzadeh](https://realtalkjavascript.simplecast.fm/da7a1bce) @learning
- TypeScript meeting @internal

## Thursday 2019-09-12

- write section how to configure ESLint + TypeScript + Prettier together https://glebbahmutov.com/blog/configure-prettier-in-vscode/#vscode-eslint-prettier-typescript-setup @blog
- Cypress ConFoo.ca workshop announced https://confoo.ca/en/yul2020/session/workshop-end-to-end-testing-with-cypress @presentation
- sent an email to **redacted** about her presentation from CoderCruise
- quickly looked at `create-nx-workspace` that creates TypeScript Next.js project @learning
- expenses @internal
  - Atlanta trip
  - Montreal / Burlington, VT trip
  - ReactiveConf trip
- Marketing meeting @internal
- replied to candidates @hiring
- opened issue to simplify installing beta versions of Cypress by commit SHA https://github.com/cypress-io/cypress/issues/5135 @feature
- reviewed the schedule for AngularMix conference in November @presentation
- working on Angular app actions in repo https://github.com/bahmutov/angular-heroes-app-actions @example
- and writing a blog post testing-angular-application-via-app-actions.md @blog

## Friday 2019-09-13

- adding TestAutomationU Cypress course to our docs https://testautomationu.applitools.com/cypress-tutorial/ Watching the course @learning
- Interview with the candidate **redacted** @hiring
- new version of https://github.com/bahmutov/start-server-and-test @feature
  - upgrade `execa` from v0.11 to v2
  - support `start-test http-get:/…` url
- retro @internal
- post install comment for Mac builds of `test-electron-app-4964` branch @feature
- prepared README for cypress-electron-plugin @feature

## The Weekend

- finished blog post https://glebbahmutov.com/blog/testing-angular-application-via-app-actions/ @blog
- working on Cypress on CI slides @presentation

## Monday 2019-09-16

- working on Cypress on CI slides @presentation
- fixed reported dead link https://github.com/bahmutov/cypress-open-from-docker-compose/issues/3 @feature
- answer speaker questions for Revo.js @presentation
- meeting **redacted** team that uses Cypress for possible webinar @presentation
- watch "Componentizing end-to-end tests - Nicholas Boll - JSConf US 2019" https://www.youtube.com/watch?v=Pv2YHXQOEJY @learning
- opened https://github.com/cypress-io/cypress/issues/5148 @feature
- test runner planning meeting @internal
- worked on slides for speaking training (same deck for Vermont Code Camp) @presentation

## Tuesday 2019-09-17

- support call @support
- speaker training all day @internal

## Wednesday 2019-09-18

- speaker training all day @internal
- review CI slides with Justin James for upcoming webinar @presentation
- looked at the orb failing CircleCI config validation suddenly https://github.com/cypress-io/circleci-orb/issues/178 @feature
- typescript meeting - need to include tsconfig.json in kitchensink @internal
- commented on https://github.com/cypress-io/cypress/issues/832 - seems people are really confused about running Chrome on CI @support
- watched Nicholas Boll talk where he uses Cypress https://www.youtube.com/watch?v=Pv2YHXQOEJY @learning

## Thursday 2019-09-19

- [x] deploy new release automation @feature
- [x] answering question https://github.com/cypress-io/cypress-example-kitchensink/issues/293 @support
- [x] building new Docker image https://github.com/cypress-io/cypress-docker-images/pull/144 `cypress/browsers:node10.16.0-chrome77` @feature
- [x] building docker image `cypress/browsers:node12.6.0-chrome77` https://github.com/cypress-io/cypress-docker-images/pull/143 @feature
- [x] AllThingsOpen presentation meeting @presentation
  - need to start working on the slide deck (with Amir)
- [x] show demo of Electron testing in Cypress @feature
- [x] finally have replied to a webinar question that was open from Spotahome webinar @support
- [x] work on CI slide deck @presentation
- pull requests @feature
- look at Windows pipe duplicate log lines issue https://github.com/cypress-io/cypress/pull/5045 @feature
  - Try to recreate the problem after patching https://github.com/cypress-io/cypress-test-tiny/pull/49 - no, runs and shows single output line on Windows Circle https://circleci.com/gh/cypress-io/cypress-test-tiny/4442
- adding branch `3.5.0` to https://github.com/cypress-io/cypress-example-kitchensink with Windows CircleCI build that should be fixed after STDIN pipe fix is released, PR https://github.com/cypress-io/cypress-example-kitchensink/pull/294 @feature
- hmm, `cy.exec` fails on CircleCI Windows machine @feature
  - opened https://github.com/cypress-io/cypress/issues/5169
- interview a developer @hiring
- describe starting Xvfb on Linux manually around Cypress run https://github.com/cypress-io/cypress-documentation/pull/2090 @feature

## Friday 2019-09-20

- landed https://github.com/cypress-io/cypress-documentation/pull/2090 @feature
  - once it is out need to close / answer several related XVFB issues
- Worked on CI slides, now need to just tweak them and practice. @presentation
- creating a survey to send to Revo.js participants before the workshop @presentation
- created survey for GDG Cambridge group meetup workshop @presentation
- landed https://github.com/cypress-io/cypress-documentation/pull/1788 @feature
- sent email to a candidate who has applied @hiring
- reach out to **redacted** - about Cypress @internal
  - No response

## The Weekend

- finish slides for CI presentation on Monday @presentation
- fork https://github.com/cypress-io/todomvc-app-css and fix the contrast by installing `npm i -S cypress-io/todomvc-app-css#a9d4ea1` @feature
  - used better styles in testing workshop repo
- answered email about testing from **redacted** @internal
- worked more on the VermontCodeCamp presentation https://slides.com/bahmutov/secure-the-front-end @presentation
- started slides for Revo.js https://cypress.slides.com/cypress-io/next-test/ @presentation
- opened https://github.com/cypress-io/cypress-documentation/issues/2092 @feature

## Monday 2019-09-23

- make repo https://github.com/cypress-io/cypress-electron-plugin public, and set NPM access to public for `@cypress/electron-plugin` @feature
- joined `revoconference.slack.com` @presentation
- opened https://github.com/cypress-io/cypress-documentation/issues/2093 @feature
- have written blog post about electron app alpha testing @blog
- merged https://github.com/cypress-io/cypress/pull/1626 (catch `CYPRESS_ENV` variable) @feature
- invited candidate **redacted** to interview on Tuesday @hiring
- added better contrast CSS to https://github.com/cypress-io/cypress-example-todomvc with `npm i -S cypress-io/todomvc-app-css#a9d4ea1` @feature
- CI webinar @presentation
- meeting with **redacted** team @internal
- work on Revo.js presentation @presentation
- working on creating fiddles from Markdown in branch `process-markdown-files` @feature
- schedule interview with candidate **redacted** for next Monday @hiring
- looked at **redacted** homework project, trying to find services people to interview him @hiring
- updating CLI tests with new Electron and sandbox @feature
  - merging fix https://github.com/cypress-io/cypress/pull/5196 and https://github.com/cypress-io/cypress/pull/5197

## Tuesday 2019-09-24

- https://github.com/cypress-io/cypress-docker-images/pull/145 typo @feature
- updating repo https://github.com/cypress-io/cypress-test-ci-environments @feature
  - disabled renovate bot for `standard` and `execa` dependencies since we still need Node v6 support
  - added lint CI job
  - looking at the 3.5.0 failure (extra STDERR messages) https://circleci.com/gh/cypress-io/cypress-test-ci-environments/6695 https://github.com/cypress-io/cypress-test-ci-environments/issues/21 - finally have passing v3.5.0 with `TERM=xterm` set
- asked **redacted** about joining Cypress @hiring
- test runner planning meeting @internal
- updating Cypress branch `external-node-for-plugins-4432` with latest from `develop` @feature
- looked at Docker image pull request https://github.com/cypress-io/cypress-docker-images/pull/147 @feature
  - merged and pushed `cypress/browsers:node12.0.0-chrome73` for testing Electron v5 upgrade, then aded `xauth` there
- interview test runner candidate **redacted** @hiring

## Wednesday 2019-09-25

- travel to Canada
- answering questions and PR comments @support
- prepare for ReactJS Montreal, Revo.js and VT code camp @presentation
- and CI variables reset @feature

## Thursday 2019-09-26

- looking at our fork, turns out it does not run tests, so we have been releasing blindly https://github.com/cypress-io/sinon-chai/issues/22 @feature
  - fixed and updated all dev dependencies to make sure we are testing it against sinon v7
- support call about CI and headless Electron @support
- fixed build in https://github.com/bahmutov/cypress-react-unit-test @feature
- adding contexts to https://github.com/cypress-io/cypress/pull/5209 to prevent sensitive env variables everywhere @feature
- Ambassador call @presentation
- root cause analysis on variables, work in progress to set and inject variables to build and upload test runner https://github.com/cypress-io/cypress/issues/5219 @feature
- discussing testing with **redacted** @presentation
- DX experience call @internal
- Cypress presentation at React Montreal meetup @presentation

## Friday 2019-09-27

- update CircleCI with all contexts to build and trigger test projects on `develop` branch @feature
- updating AppVeyor environment variables @feature
  - cypress-test-tiny
  - cypress
  - cypress-test-example-repos
- sent email to **redacted** @hiring
- reply to new connections and message on Linked and email after the React Meetup presentation @presentation
- scheduling interview with **redacted** @hiring
- created example testing Apache running inside a Docker container for a customer who has problem understanding what to do in this case (?) https://github.com/bahmutov/cypress-tests-apache-in-docker @example
  - added this example to list in Docker examples
- more work on status checks context @feature
- upgrade jQuery TS definition https://github.com/cypress-io/cypress/pull/5230 ready for review and land @feature
- need to set new cypress-bot private key for issues-in-release hooks @feature

## The Weekend

- presentation at VTCodeCamp (security, lots of chatter with people who use Cypress or not) https://slides.com/bahmutov/secure-the-front-end @presentation
- working on Revo.js presentation @presentation
- working on `cypress-fiddle` to allow running tests from Markdown files via custom pre-processor https://github.com/cypress-io/cypress-fiddle/tree/process-markdown-files @feature

## Monday 2019-09-30

- test runner quick meeting @internal
- noticed jQuery types need sizzle types and made PR https://github.com/cypress-io/cypress/pull/5247 @feature
- updated test for incorrect `DISPLAY` variable - it can have contents https://github.com/cypress-io/cypress-test-ci-environments/issues/23 @feature
- submit stay form to DevIntersection / AngleBracket conference in Las Vegas, Nov 20-23 @presentation
- upgraded execa for cypress-example-recipes to hopefully avoid Windows timing out @example
- interview **redacted** @hiring
- submitted talk about Cypress idea to [https://www.onlinetestconf.com](https://www.onlinetestconf.com/) @presentation
- opened issue about hanging test example recipe https://github.com/cypress-io/cypress-example-recipes/issues/337 @example
