# Notes for installing Cypress to work alongside Eclipse

## Configure Eclipse to ignore node_modules:

* In the top menu, click "Project" => "Properties" (or right click your project in the Package Manager and click "Properties")
* Under the "Resource" section, click "Resource Filters"
* Click "Add Filter" and select these settings:
  * Filter type: Exclue all
  * Applies to: Folders
  * [Name] [matches] "node_modules"
  * Click "OK"
* If you configure Eclipse before setting up Cypress in your project, you should be able to avoid Eclipse getting hung up on the node_modules folder.

## To install Cypress in your project (creates an /e2e directory for your end-to-end integration tests):

```
cd Dyvers-Pages-Correct
mkdir e2e
cd e2e
npm init -f
npm install --save-dev cypress
```

Also, make sure you add node_modules and debug.log to your .gitignore file.

Cypress will create a `/cypress directory` for your tests. You will see the example tests there.

To start cypress, run `node_modules/.bin/cypress open` (or `e2e/node_modules/.bin/cypress open` from the root of your project).