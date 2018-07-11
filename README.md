# Basemap group causing login prompt

The code in this repository demonstrates a difference in behavior between different versions of the ArcGIS API for JavaScipt.

When using a specific group as a source for the Basemap Gallery control, the current version of the API will show a login prompt to the user, but the user can cancel the prompt and the basemaps will still load. Using an earlier version of the API, there is no login prompt.

**If you just want to try the sample without downloading anything, go to [the version hosted on Github Pages](https://wsdot-gis.github.io/agol-bridge-basemap-group-test/).**

## Installation

### Prerequisites

- [Node]
- [A Git client]

### Installation steps

1.  [Clone this repository][git clone].

    ```console
    git clone https://github.com/WSDOT-GIS/agol-bridge-basemap-group-test.git
    ```

    All subsequent commands in this document should be run from the cloned repository's folder.

2.  The following command will install the required dependencies and start the build process.

    ```console
    npm install
    ```

## Run

The following command will start a [web server].

```console
npm start
```

The console will display one (or more) URLs that can be opened in a web browser. You should see something similar in the console to what is shown below.

```console
   ┌─────────────────────────────────────────────────────┐
   │                                                     │
   │   Serving!                                          │
   │                                                     │
   │   - Local:            http://localhost:5000         │
   │   - On Your Network:  http://x.x.x.x:5000           │
   │                                                     │
   │   Copied local address to clipboard!                │
   │                                                     │
   └─────────────────────────────────────────────────────┘
```

### Stopping the server

In the console where the server was started, press CTRL + C.

[a git client]: https://git-scm.com/downloads
[git clone]: https://git-scm.com/book/en/v2/Git-Basics-Getting-a-Git-Repository#_git_cloning
[web server]: https://www.npmjs.com/package/serve
[node]: https://nodejs.org
