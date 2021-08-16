# backstage-plugins

Simply Business's open source Backstage plugins

## Running Locally

### Prerequisites

1. Install dependencies: `yarn install`
2. Compile typescript: `yarn tsc`
3. Build Backstage: `yarn build`

### Running Frontend and Backend together

```shell
yarn dev
```

### Running Frontend and Backend separately

Start just the Backend:

```shell
yarn start-backend
```

Start just the Frontend:

```shell
yarn start-frontend
```

### Running Frontend and Backend together on Docker

1. Build the image: `yarn build-image`
2. Start the image: `yarn start-image`

Access Backstage from here: http://localhost:7000/

## Updating Backstage Dependencies

This repo has a bunch of Backstage packages that are glued together to
get our own Backstage instance. The plugins also use these packages.

From time to time we need to keep these dependencies up-to-date.

Here are the steps to update:

1. Run `backstage-cli versions:bump`.
1. Make a note of the changelogs that show up in the logs in step 1. They'll look something like this:

   ```
   ⚠️  The following packages may have breaking changes:

   @backstage/plugin-catalog-backend : 0.12.0 ~> 0.13.0
   https://github.com/backstage/backstage/blob/master/plugins/catalog-backend/CHANGELOG.md

   @backstage/plugin-catalog-react : 0.2.6 ~> 0.3.0
   https://github.com/backstage/backstage/blob/master/plugins/catalog-react/CHANGELOG.md

   @backstage/plugin-jenkins : 0.4.7 ~> 0.5.0
   https://github.com/backstage/backstage/blob/master/plugins/jenkins/CHANGELOG.md

   @backstage/plugin-scaffolder-backend : 0.13.0 ~> 0.14.0
   https://github.com/backstage/backstage/blob/master/plugins/scaffolder-backend/CHANGELOG.md

   @backstage/plugin-techdocs : 0.9.9 ~> 0.10.0
   https://github.com/backstage/backstage/blob/master/plugins/techdocs/CHANGELOG.md

   @backstage/plugin-user-settings : 0.2.12 ~> 0.3.0
   https://github.com/backstage/backstage/blob/master/plugins/user-settings/CHANGELOG.md
   ```

   > If any of the steps below fail, it's possible a breaking change in Backstage caused it.
   > Refer to these changelogs to fix any broken code.

1. Run `yarn install`.
1. Run `yarn tsc`.
1. Start it up locally and ensure everything works.

## Creating a new plugin

1. Run `yarn create-plugin` and follow the instructions.
2. Use the [demo plugin](plugins/demo) to get your new plugin's test coverage to 100% quickly, so you can start working on it.
