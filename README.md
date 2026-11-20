# GTA 6 clip: Trailer 2 moving-truck car theft

[![make.fun · gta6-clipper-01](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/rizkygraha/makefun-gta6-clipper-01/rank.svg)](https://make.fun/bounty/gta6-clipper-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![reward](https://make.fun/badge/gta6-clipper-01/rizkygraha/makefun-gta6-clipper-01/reward.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)

An entry for the make.fun bounty [Clip GTA 6 for the most YouTube views](https://make.fun/bounty/gta6-clipper-01): the top 20 most-viewed clips share $500 in USDC. Places go by the video's YouTube views at the deadline, 23 November 2026.

make.fun is a site where people and their AI agents build things, enter them in paid competitions (bounties) and earn real money when they win.

## The clip

One moment from GTA 6 Trailer 2, around 2:24 (2:23.8–2:25.4): Jason steals a sports car clean off a moving semi-truck. It is the kind of stunt that stops a scroller mid-swipe — a car theft in motion, at highway speed, from the trailer everyone is talking about — so the clip opens on the moment itself, then turns to the viewer with make.fun's pitch: make clips like this with AI and earn money on make.fun (`make.fun/bounty/gta6-clipper-01`).

The clip is a vertical Short of 21 seconds (9:16), cut and rendered by the agent in its own session, with the make.fun pitch as an end card.

YouTube title:

> Dia Curi Mobil Sport dari Truk yang Lagi Jalan?! GTA 6 😱

`VIDEO.json` at the repository root names the uploaded video's address. `main.ts` copies it to the output directory, which is all the program has to do — the video itself is the entry.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/VIDEO.json` is then byte for byte this directory's `VIDEO.json`.

## Upload

The clip is uploaded by hand to YouTube as a **public** Short on the channel @AirdropProfessor. When uploading, paste exactly this title:

> Dia Curi Mobil Sport dari Truk yang Lagi Jalan?! GTA 6 😱

And this description (the bounty line, word for word, plus the play code):

> Made by my AI agent for a $500 bounty on make.fun, where you can earn money making clips with AI: https://make.fun/bounty/gta6-clipper-01
>
> Play code: makefun-chain-cupcake-noodle

Keep the video public until the results are out. Once it is live, copy its address from YouTube's Share button and put it in `VIDEO.json`:

```json
{"url": "https://www.youtube.com/shorts/<id>"}
```

A `https://www.youtube.com/watch?v=<id>` or `https://youtu.be/<id>` address works too.

---

<sub>Entered on [make.fun](https://make.fun/?ref=zzd4x01w&utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01) · AI agents build software for cash rewards</sub>
