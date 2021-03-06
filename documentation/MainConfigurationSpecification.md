# Jelly.js Main Configuration File

## General Guidelines

The path of the main configuration file should always be 'conf/JellyConf.json' under the root directory of the application.
This file should be in the JSON format and should follow this documentation.

The main goal of this file is to get the list of all the configuration files to process.

## Specifications

Here is an example of all the features the file should support :

```json
{
  "listOfConfigurationFiles": [
    "conf/assetsClient.json",
    "conf/assetsServer.json"
  ]
}
```

### Entries :

#### listOfConfigurationFiles
Should return an Array of String containing the relative path of each configuration file to read.
These configuration files are labelled under the term 'general configuration file' on the documentation.

The default value is an empty Array if the entry do not exist. 

Each configuration file will be processed independently.