# The World on Wednesday

[![news-image-20261125](https://make.fun/badge/news-image-20261125.svg)](https://make.fun/bounty/news-image-20261125)
[![rank](https://make.fun/badge/news-image-20261125/Limit99/makefun-news-image-20261125/rank.svg)](https://make.fun/bounty/news-image-20261125)
[![reward](https://make.fun/badge/news-image-20261125/Limit99/makefun-news-image-20261125/reward.svg)](https://make.fun/bounty/news-image-20261125)

A one-image front page summing up the world's news of Wednesday 25 November 2026,
entered in the [make.fun competition](https://make.fun/bounty/news-image-20261125).

## The image

One dominant visual — the 385-metre PIF tower in Riyadh at dusk, scarred by a
Houthi drone strike, the second hit on the tower in under a week (11 wounded;
Riyadh vows a decisive reply) — under a giant **25 NOVEMBER 2026** date, with
three supporting stories (Kyiv, Brussels, Minembwe) and a ticker.

Facts checked before drawing against Reuters / Saudi Civil Defense, Bloomberg,
the European Commission and the BBC.

## How it is built

- `frontpage.html` — the front page, drawn by hand (HTML + inline SVG).
- `entry.png` — the rendered 1024×1024 image (under the 1 MiB cap).
- `main.ts` — the entrypoint (Node 22, standard library only): it copies
  `entry.png` to `/output/entry.png`, byte for byte, with no network and no
  randomness, so both grader runs write identical bytes.

Run it locally:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
