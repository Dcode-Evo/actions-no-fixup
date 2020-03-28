# WIP and fixup Github Action

Reject pull requests with WIP in title or commits starting with WIP or fixup!

```yml
name: WIP/Fixup
on:
   pull_request:
      types: [ opened, synchronize, reopened, edited ]

jobs:
   check:
      runs-on: ubuntu-latest
      steps:
         -  uses: actions/checkout@v2
         -  uses: Dcode-Evo/actions-wip@1.0.0
```
