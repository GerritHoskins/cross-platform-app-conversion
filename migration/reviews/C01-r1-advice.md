The second opinion is to make a narrow, explicit exception to the pinned test script, not to waive the test.

Apply exactly this fixed-decision change:

"test": "npm run build && tsc -p tsconfig.test.json && node --test \"build-test/test/*.js\"",

with backslash-escaped quotes in the JSON. The original fixed text remains recorded in the handoff evidence as the source exception.

I verified the quoted glob invocation independently: exit 0, 2 pass / 0 fail, including through Windows cmd.exe shell execution. In package.json, the npm script must therefore contain literal double quotes around the glob so the Node test runner receives one quoted literal pattern.

The evidence must record all of:
- original fixed text,
- reproduced Node v26.3.0 directory-argument failure,
- exact replacement text,
- this explicit second-opinion exception.

The submission hash must cover the corrected package.json. After that, run:

npm --prefix migration/core test

twice from the repository root. Both runs must exit 0 and report 2 passes / 0 failures.

Do not claim literal compliance with the original script, and do not treat the original failure as an accepted environment-limited waiver. The corrected full npm command must actually pass.

Revise, verify, and then submit for formal review. Do not begin C02.
