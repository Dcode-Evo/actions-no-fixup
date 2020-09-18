import {execSync} from 'child_process';
import * as core from '@actions/core';
import {context} from '@actions/github';

async function run() {
  try {
    const pr = context.payload.pull_request || {base: {ref: ''}, head: {ref: ''}, title: ''};
    const base = pr.base.ref;
    const head = pr.head.ref;

    if (/^\[?wip]?(?!\w)/gi.test(pr.title)) {
      core.setFailed(`Pull request's title indicates WIP status`);
    }

    const diffCommits = execSync(
      `git fetch && git log --oneline --no-merges --pretty='format:%s' origin/${base}...origin/${head}`,
      {encoding: 'utf8'}
    );

    if (/^-{0,2}[[!]?(fixup!?|wip)(?!\w)/gim.test(diffCommits)) {
      core.setFailed(`Branch '${head}' contains "fixup" or "WIP" commit(s)`);
    }
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
