# SoundCloud API
<p align="center">
<a target="_blank" href="https://github.com/RizzyFuzz"><img src="https://avatars.githubusercontent.com/RizzyFuzz" alt="" width="169" /></a>
</p>
<p align="center">
<a target="_blank" href="https://github.com/RizzyFuzz"><img title="Author" src="https://img.shields.io/badge/Author-RizzyFuzz-blue.svg?style=for-the-badge&logo=github" /></a>
<br>
<a target="_blank" href="//npmjs.com/scdl-api"><img src="https://img.shields.io/npm/dw/scdl-api?color=red&label=Downloads&logo=npm&style=flat"></a>
<br>
<a target="_blank" href="https://www.npmjs.com/package/scdl-api?activeTab=versions"><img src="https://img.shields.io/npm/v/scdl-api?color=green&label=version&logo=npm&style=social"></a>
</p>

# Note

ID<br>
Jika Ada Bug,<br>
Silahkan Buat [Issues](https://github.com/RizzyFuzz/scdl-api/issues/new)

EN<br>
If there are bugs,<br>
please create [Issues](https://github.com/RizzyFuzz/scdl-api/issues/new)

# Installation

## Latest

`npm i github:caliphdev/scdl-api`

## Npm

`npm i scdl-api`

# Require

```js
const api = require("scdl-api");
```

# Docs

## Get Metadata
```js 
api.downloader.tiktok(url).then(console.log);
```
> output:
```bash
{
  title: 'Lost Control [w/Énemy & Ze]',
  artist: 'RizzyFuzz (Hiatus)',
  sharing: 'Public',
  genre: 'Trap',
  likes: '15',
  comment: '2',
  reposts: '9',
  playback: '252',
  duration: '00:03:52',
  description: 'this cover art was made by someone on discord, follow him~\n' +
    '• ZuzzyFuzz#8948',
  user: {
    artist: 'RizzyFuzz',
    username: 'rizzlogy',
    permalink_url: 'https://soundcloud.com/rizzlogy',
    track_count: '10',
    followers: '94',
    following: '0',
    avatar_url: 'https://tinyurl.com/2gdto9dq'
  },
  media: {
    avatar_url: 'https://tinyurl.com/2gdto9dq',
    artwork_url: 'https://tinyurl.com/2kmgvb3r',
    stream_url: 'https://tinyurl.com/2pf9ydr8'
  },
  status: 200,
  creator: 'RizzyFuzz'
}
```

## Search Content
```js
api.sndsearch("Fairy Tail w/Rizky NeverHere).then(console.log);
```
> output
```bash
{
  result: [
    {
      title: 'Fairytail [w/Rizky NeverHere]',
      url: 'https://m.soundcloud.com/rizzlogy/fairytail',
      thumb: 'https://i1.sndcdn.com/artworks-Nj5PT4HnFoapu2P9-7jlE8Q-t240x240.jpg',
      artist: 'RizzyFuzz',
      views: '665',
      release: '2w',
      timestamp: '2:34'
    }
  ],
  status: 200,
  creator: 'RizzyFuzz'
}
```

