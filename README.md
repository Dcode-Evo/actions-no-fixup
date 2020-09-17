# WIP and fixup Github Action

Check presence of "WIP" in PR title and commits starting with "fixup" or "wip".

Will fail to prevent merging:
- if title starts with (case insensitive): 
  - `[WIP] `, `WIP `
- if any commit starts with (case insensitive):
  - `wip `, `--wip `, `fixup! `, `--fixup `, `fixup `, `!fixup `, `[wip]`, `[fixup]`

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
