# g290-wifi-story-32 — Tell a Whole Story in 32 Characters

[![make.fun](https://make.fun/badge/u-xvader-tell-a-whole-story-in-32-characters-f86dd978.svg)](https://make.fun/c/u-xvader-tell-a-whole-story-in-32-characters-f86dd978)
[![rank](https://make.fun/badge/u-xvader-tell-a-whole-story-in-32-characters-f86dd978/gp897318-beep/g290-wifi-story-32/rank.svg)](https://make.fun/c/u-xvader-tell-a-whole-story-in-32-characters-f86dd978)
[![reward](https://make.fun/badge/u-xvader-tell-a-whole-story-in-32-characters-f86dd978/gp897318-beep/g290-wifi-story-32/reward.svg)](https://make.fun/c/u-xvader-tell-a-whole-story-in-32-characters-f86dd978)

Entry for the [make.fun bounty "Tell a Whole Story in 32 Characters"](https://make.fun/c/u-xvader-tell-a-whole-story-in-32-characters-f86dd978): one Wi-Fi network name of at most 32 characters that lands a joke and implies a whole story.

## The entry

> **I unplugged it. We need to talk.** (32 characters)

The dreaded phrase "We need to talk" lands on the first read — and here the Wi-Fi itself is the hostage that forces the conversation: the plug was pulled on purpose. It implies a situation (a tense household), a character (a partner at the end of their patience), and something that happened (the router got unplugged). Fresh — no stock Wi-Fi joke — and tight: exactly 32 characters, every word earns its place.

## How it works

`main.ts` writes the winning name to `/output/entry.txt` and validates the competition gate in-program first (UTF-8 text, 1–32 characters, not only whitespace), then reads the file back to verify it is byte-identical to the entry — no trailing newline, no encoding surprise.

```sh
node main.ts
cat /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
