# Git Conventions.

# Flow Strategy

- GitHub-Flow
  - https://docs.github.com/en/get-started/quickstart/github-flow

&nbsp;

# Branch Naming Conventions.

- `<platform>/<commit type>/<ticket number>|<scope with short description of branch>`

_Examples_

- Ticket number
  - `mobile/feat/PT-101`
  - `web/fix/PT-140`
  - `shared/fix/PT-111`
- Scope or description
  - `mobile/feat/discoverFeed-header`
  - `web/fix/discoverFeed-header`
  - `shared/feat/colour-palette-update`

&nbsp;

# Commit Conventions.

- `git commit -m "<type>[(optional scope)]: <description>"`

_Types_

- build(): Build related changes (eg: yarn related/ adding external dependencies).
- chore(): A code change that external user won't see (eg: change to .gitignore file or .prettierrc file).
- ci(): Continuous integration related.
- docs(): Documentation related changes.
- feat(api): A new feature.
- fix(): A bug fix.
- perf(): A code that improves performance.
- refactor(): A code that neither fix bug nor adds a feature. (eg: You can use this when there is semantic changes like renaming a variable/ function name).
- revert(): Reverts a previous commit.
- style(): A code that is related to styling.
- test(): Adding new test or making changes to existing test.

&nbsp;

_Commit Breaking changes_

- `git commit -m "<type>[(optional scope)]!: <BREAKING CHANGE: description>"`

  - _Use "!" to draw attention for breaking changes. eg `chore(scope)!` or `chore!`_

  - _`BREAKING CHANGE:` describe in detail what the change is and how it will effect the project._
    - If more description space is required. proceed with Multi-line Commits.

&nbsp;

_Multi-line Commit: - Commit wisely with multiLine_

- `git commit -m "<type>[(optional scope)]: <Short description>" -m "Detailed Gory Description."`

- For further information https://www.conventionalcommits.org/en/v1.0.0/

&nbsp;

# Pull requests.

- All pull requests must be approved by at least 1 developer from your platform team..
- Any pull request that modifies the "Shared" folder must be reviewed by a lead developer or by 1 developer from Web & Mobile.

&nbsp;

# Merging to Master.

- You must squash your approved pull request when merging to master.
