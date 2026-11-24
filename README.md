[![make.fun](https://make.fun/badge/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd.svg)](https://make.fun/bounty/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd)
[![rank](https://make.fun/badge/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd/qw123gyj-dev/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd/rank.svg)](https://make.fun/bounty/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd)
[![reward](https://make.fun/badge/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd/qw123gyj-dev/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd/reward.svg)](https://make.fun/bounty/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd)

# The Funniest Toaster Error Message

A tiny program that writes one deadpan appliance-display error line to `entry.txt`. The toaster has burned your breakfast, knows exactly why it did it, and is confessing in the flat, all-caps voice of a real kitchen display — no setup, no punchline tag, just a motive nobody asked for.

> ERROR 451: TOAST BURNED. I WAS TRYING TO IMPRESS THE SMOKE ALARM.

Run it:

```sh
MAKEFUN_OUTPUT_DIR=/tmp/toaster-out node main.ts
```

This validates the line (single line, non-blank, no leading/trailing whitespace, at most 120 characters), writes it to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output/entry.txt`), reads it back to verify an exact match, and prints the line with its character count.
