# Cypress Project

Cypress project to test landing page: [cypress](https://docs.cypress.io/api/table-of-contents), [cypress-terminal-report](https://github.com/archfz/cypress-terminal-report), [typescript](https://docs.cypress.io/guides/tooling/typescript-support#Install-TypeScript), [docker](https://github.com/cypress-io/cypress-docker-images)

To see test results check them on [Project GitHub Actions](https://github.com/arnasbastys/cypress-project-2/actions):

- Click on the last workflow run
- Chose chrome/firefox job
- Select "test pages" step
- You have to be logged in to GitHub to see tests logs

Or check artifacts on latest [workflow run](https://github.com/arnasbastys/cypress-project-2/actions)

## Launch tests

### On a local machine with node:

- Clone project
- Install dependencies(in the project directory): `yarn install`
- Launch tests by running the command: `npx cypress run`

### On a local machine with docker:

- Clone project
- Build docker image (in project directory): `docker build .`
- Test with chrome: `docker-compose run test-chrome`
- Test with firefox: `docker-compose run test-firefox`

### On the GitHub page with "GitHub Actions"

- Navigate in your browser to: [link](https://github.com/arnasbastys/cypress-project-2/actions)
- Launch tests manually (by default it runs on both Chrome and Firefox)
- More info on how to trigger workflow manually: [link](https://docs.github.com/en/actions/managing-workflow-runs/manually-running-a-workflow)
