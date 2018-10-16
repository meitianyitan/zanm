# Contributing to Zanm

The following is a set of guidelines for contributing to Zanm. Please spend several minutes in reading these guidelines before you create an issue or pull request.

Anyway, these are just guidelines, not rules, use your best judgment and feel free to propose changes to this document in a pull request.

## Opening an Issue
If you think you have found a bug, or have a new feature idea, please start by making sure it hasn't already been reported or fixed. You can search through existing issues and PRs to see if someone has reported one similar to yours.

Next, create a new issue that briefly explains the problem, and provides a bit of background as to the circumstances that triggered it, and steps to reproduce it.

## Submitting a Pull Request
It's welcomed to pull request, And there are some tips about that:

- Before working on a large change, it is best to open an issue first to discuss it with the maintainers.

- When in doubt, keep your pull requests small. To give a PR the best chance of getting accepted, don't bundle more than one feature or bug fix per pull request. It's always best to create two smaller PRs than one big one.

- When adding new features or modifying existing, please attempt to include tests to confirm the new behaviour. 

- Rebase before creating a PR to keep commit history clear.

- Add some descriptions and refer relative issues for you PR.

## Getting started

```bash
git clone git@github.com:meitianyitan/zanm.git

cd zanm

npm run bootstrap

npm run dev

# open http://localhost:8080
```

## Component Developing Guidelines
- Create new directory under `packages` for a new component.
- All the style code are located under `packages/zanm-css/src`.
- Refer to `Sku` for nested components.
- Refer to `Button` for components that depend on other components.
