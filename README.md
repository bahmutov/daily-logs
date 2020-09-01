# Daily Logs

Read the analysis at [What I Have Done](https://glebbahmutov.com/blog/what-i-have-done/)

This repo contains my daily notes for [2019](./2019) and [2020](./2020) in Markdown format. I started keeping daily running log of things I have done for myself (almost as a personal quick memory cache), and for daily agile stand ups. I have redacted private information from these notes using `**redacted**`, but mostly they are intact. Almost every task is tagged with its type, the valid tags are below:

- `@example` task for when I created an example or a demo application to show a concept, like examples in the [cypress-example-kitchensink](https://github.com/cypress-io/cypress-example-kitchensink) and [cypress-example-recipes](https://github.com/cypress-io/cypress-example-recipes) repositories. I also tag most of the work related to the documentation with `@example` because our docs do have lots of examples.
- `@feature` is the new code or fixing bugs or writing tests or documenting new feature
- `@internal` are utility tasks that are usually private to Cypress
- `@support` supporting our users
- `@slides` preparing for a public presentation, working on slides, sending a proposal
- `@presentation` the actual public presentation in front of people
- `@learning` is when I was learning something new
- `@hiring` working to hire someone
- `@blog` writing a blog post for [https://www.cypress.io/blog/](https://www.cypress.io/blog/), [https://glebbahmutov.com/blog/](https://glebbahmutov.com/blog/), or some 3rd party blog

The dates follow YYYY-MM-DD format, for example `2020-05-27`. There are a couple of missing days - I was probably taking time off or traveling. You often find "The Weekend" notes that show me working through the weekend. I only do this because I enjoy my work so so much, it helps me to do stuff even during my days off. Usually during the weekends I invent new stuff, prepare presentations, and write blog posts.

## Task counts

The script [src/index.js](src/index.js) parses the markdown files and generates totals.

```shell
npm install
npm run count
```

See [counted.md](counted.md) file for month by month totals and averages. You can also use [counted.csv](counted.csv) or [counted.json](counted.json). Mostly I spent time working on features and examples teaching our users how to use the features.

![Task breakdown percentages](images/categories.png)

## GitHub stats

<!-- prettier-ignore-start -->
Month | GH | Commits | New repos | PRs | Reviews | Opened issues | Total | Level
--- | --- | --- | --- | --- | --- | --- | --- | ---
[March 2019](./2019/03-March-2019.md) | [Link](https://github.com/bahmutov?tab=overview&from=2019-03-01&to=2019-03-31) | 697 | 13 | 45 | 8 | 72 | 138 | 100%
[April 2019](./2019/04-April-2019.md) | [Link](https://github.com/bahmutov?tab=overview&from=2019-04-01&to=2019-04-30) | 1391 | 7 | 49 | 8 | 58 | 122 | 88%
[May 2019](./2019/05-May-2019.md) | [Link](https://github.com/bahmutov?tab=overview&from=2019-05-01&to=2019-05-31) | 1038 | 8 | 52 | 10 | 47 | 117 | 85%
[June 2019](./2019/06-June-2019.md) | [Link](https://github.com/bahmutov?tab=overview&from=2019-06-01&to=2019-06-30) | 925 | 12 | 43 | 13 | 31 | 99 | 72%
[July 2019](./2019/07-July-2019.md) | [Link](https://github.com/bahmutov?tab=overview&from=2019-07-01&to=2019-07-31) | 1663 | 13 | 44 | 16 | 63 | 136 | 99%
[August 2019](./2019/08-August-2019.md) | [Link](https://github.com/bahmutov?tab=overview&from=2019-08-01&to=2019-08-31) | 378 | 4 | 26 | 7 | 31 | 68 | 50%
[September 2019](./2019/09-September-2019.md) | [Link](https://github.com/bahmutov?tab=overview&from=2019-09-01&to=2019-09-30) | 715 | 10 | 24 | 11 | 30 | 75 | 54%
[October 2019](./2019/10-October-2019.md) | [Link](https://github.com/bahmutov?tab=overview&from=2019-10-01&to=2019-10-31) | 1095 | 5 | 42 | 18 | 41 | 106 | 77%
[November 2019](./2019/11-November-2019.md) | [Link](https://github.com/bahmutov?tab=overview&from=2019-11-01&to=2019-11-30) | 1012 | 11 | 39 | 23 | 58 | 131 | 95%
[December 2019](./2019/12-December-2019.md) | [Link](https://github.com/bahmutov?tab=overview&from=2019-12-01&to=2019-12-31) | 1169 | 11 | 32 | 27 | 35 | 105 | 76%
[January 2020](./2020/01-January-2020.md) | [Link](https://github.com/bahmutov?tab=overview&from=2020-01-01&to=2020-01-31) | 802 | 7 | 62 | 34 | 41 | 144 | 104%
[February 2020](./2020/02-February-2020.md) | [Link](https://github.com/bahmutov?tab=overview&from=2020-02-01&to=2020-02-29) | 1190 | 10 | 79 | 42 | 80 | 211 | 160%
[March 2020](./2020/03-March-2020.md) | [Link](https://github.com/bahmutov?tab=overview&from=2020-03-01&to=2020-03-31) | 1386 | 9 | 81 | 34 | 74 | 198 | 143%
[April 2020](./2020/04-April-2020.md) | [Link](https://github.com/bahmutov?tab=overview&from=2020-04-01&to=2020-04-30) | 1145 | 29 | 85 | 26 | 89 | 229 | 166%
[May 2020](./2020/05-May-2020.md) | [Link](https://github.com/bahmutov?tab=overview&from=2020-05-01&to=2020-05-31) | 1311 | 30 | 89 | 38 | 102 | 259 | 188%
[June 2020](./2020/06-June-2020.md) | [Link](https://github.com/bahmutov?tab=overview&from=2020-06-01&to=2020-06-30) | 1183 | 8 | 51 | 35 | 66 | 160 | 116%
[July 2020](./2020/07-July-2020.md) | [Link](https://github.com/bahmutov?tab=overview&from=2020-07-01&to=2020-07-31) | 943 | 7 | 62 | 35 | 57 | 161 | 117%
[August 2020](./2020/08-August-2020.md) | [Link](https://github.com/bahmutov?tab=overview&from=2020-08-01&to=2020-08-31) | 743 | 4 | 19 | 27 | 14 | 64 | 46%
<!-- prettier-ignore-end -->

**Total** = new repos + PRs + reviews + opened issues

We take the first month of March 2019 as the base level of 100% and normalize the GH work against that month.

**Level** = month's total / 138 \* 100
