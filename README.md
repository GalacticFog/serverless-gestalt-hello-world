# serverless-gestalt-hello-world
starter for gestalt serverless provider plugin

Make sure you have the [serverless-gestalt](https://github.com/GalacticFog/serverless-gestalt) provider plugin installed

## Configure
You will need to point the serverless.yml to your Gestalt context. Edit the following lines in the `provider` section

```
provider:
  ...
  context: /fqon/workspace.name/environment.name # your context path
  laser: laser-provider-name # the name of the laser provider
  api: api-name # the name of the api under the context
```

## Install

```
serverless install --url https://github.com/GalacticFog/serverless-gestalt-hello-world
cd serverless-gestalt-hello-world
serverless deploy
```

This will create a lambda and endpoint in Gestalt
