# SoundCloud API
<p align="center">
<a target="_blank" href="https://1000logos.net/wp-content/uploads/2021/04/Soundcloud-logo-768x432.png"><img src="https://1000logos.net/wp-content/uploads/2021/04/Soundcloud-logo-768x432.png" alt="" height="100"
/></a>
</p>

<p align="center">
<a target="_blank" href="//npmjs.com/scdl-api"><img src="https://img.shields.io/npm/dw/scdl-api?color=red&label=Downloads&logo=npm&style=flat"></a>
<br>
<a target="_blank" href="https://www.npmjs.com/package/scdl-api?activeTab=versions"><img src="https://img.shields.io/npm/v/scdl-api?color=green&label=version&logo=npm&style=social"></a>
</p>

# 📝Note

ID<br>
Jika Ada Bug,<br>
Silahkan Buat [Issues](https://github.com/RizzyFuzz/scdl-api/issues/new)

EN<br>
If there are bugs,<br>
please create [Issues](https://github.com/RizzyFuzz/scdl-api/issues/new)

# 📈Highlight 
-   [x] Private client id & oauth request
-   [x] Simple & easy to using
-   [x] 100% Safe
-   [x] No delay

# ⚙️Installation

## ⚙️ In Github

> `npm i github:RizzyFuzz/scdl-api`

## ⚙️ In Npm

> `npm i scdl-api`

# 🛠️ Require

<p align="center">

<a target="_blank" href="https://nodei.co/npm/scdl-api/"><img src="https://nodei.co/npm/scdl-api.png?downloads=true&downloadRank=true&stars=true" alt="" height="100"

/></a>

</p>

```js
 const scdl = require("scdl-api");
```



# 📕Docs

## 📄 Get Metadata
``` js
let url = "https://m.soundcloud.com/rizzlogy/lost-kontol";
await scdl.soundcloud(url).then(console.log);
```

<details>
<summary>👉 Preview Response</summary>
  
```js
{
  title: 'CRUCIBLE [W/ ANTIKVNG]',
  artist: 'sćythe',
  sharing: 'Public',
  genre: 'Unknown',
  likes: '189',
  comment: '75',
  reposts: '65',
  playback: '3.5K',
  duration: '00:02:30',
  createdAt: '2 February 2023, 04:23:09',
  description: '@antikvng\n\nbday upload!? 1/?!?!/',
  user: {
    artist: 'sćythe',
    username: 'prodbyscythe',
    track_count: '19',
    followers: '882',
    following: '247',
    permalink_url: 'https://soundcloud.com/prodbyscythe',
    avatar_url: 'https://i1.sndcdn.com/avatars-e4jEca43pMXqY0Gk-EVEPWQ-original.jpg'
  },
  media: {
    artwork_url: 'https://i1.sndcdn.com/artworks-GdEMyJyExIc7zEPs-WAKBCg-original.jpg',
    stream_url: 'https://tinyurl.com/2hsujao2'
  },
  status: 200,
  creator: 'RizzyFuzz'
}
```
</details>
  
## 🔎 Search Content
```js
await scdl.sndsearch("CRUCIBLE [W/ ANTIKVNG]").then(console.log);
```
<details>
<summary>👉 Preview Response</summary>
  
```js
{
  result: [
    {
      title: 'CRUCIBLE [W/ ANTIKVNG]',
      url: 'https://m.soundcloud.com/prodbyscythe/crucible-w-antikvng',
      thumb: 'https://i1.sndcdn.com/artworks-GdEMyJyExIc7zEPs-WAKBCg-original.jpg',
      artist: 'sćythe',
      views: '3483',
      release: '1mo',
      timestamp: '2:30'
    },
    {
      title: 'wwyd. w/ blayence',
      url: 'https://m.soundcloud.com/antikvng/wwyd',
      thumb: 'https://i1.sndcdn.com/artworks-9BSkjWlePgIGTDRT-zZCxYw-original.jpg',
      artist: 'antikvng',
      views: '6914',
      release: '2w',
      timestamp: '2:19'
    },
    {
      title: 'GLUTEN. w/ legend',
      url: 'https://m.soundcloud.com/antikvng/gluten',
      thumb: 'https://i1.sndcdn.com/artworks-mwGJtFyU2MUKj9Er-mQFEvA-original.jpg',
      artist: 'antikvng',
      views: '7687',
      release: '2mo',
      timestamp: '1:56'
    },
    {
      title: 'every chance i get. (w/ bsterthegawd, legend)',
      url: 'https://m.soundcloud.com/antikvng/everychance',
      thumb: 'https://i1.sndcdn.com/artworks-99oB0MEUSQIWQZ1z-72dMAg-original.jpg',
      artist: 'antikvng',
      views: '47.5K',
      release: '1y',
      timestamp: '3:52'
    },
    {
      title: 'yungblood. (w/ kedalos)',
      url: 'https://m.soundcloud.com/antikvng/yungblood',
      thumb: 'https://i1.sndcdn.com/artworks-5OOl81OOnYnTWk6A-NVz3Yg-original.jpg',
      artist: 'antikvng',
      views: '15.7K',
      release: '8mo',
      timestamp: '1:36'
    },
    {
      title: 'mad man. (w/ legend)',
      url: 'https://m.soundcloud.com/antikvng/margiela',
      thumb: 'https://i1.sndcdn.com/artworks-ggkjDCzbnsqFQGJR-Nqyj0A-original.jpg',
      artist: 'antikvng',
      views: '37.8K',
      release: '1y',
      timestamp: '2:42'
    },
    {
      title: 'HELLMARY. (w/ KÉDALOS & SOMNII)',
      url: 'https://m.soundcloud.com/antikvng/hellmary',
      thumb: 'https://i1.sndcdn.com/artworks-RvNeWegzCfoeQryz-LRWsjA-original.jpg',
      artist: 'antikvng',
      views: '40.5K',
      release: '1y',
      timestamp: '5:00'
    },
    {
      title: 'a-man w/ blayence',
      url: 'https://m.soundcloud.com/antikvng/aman',
      thumb: 'https://i1.sndcdn.com/artworks-VfH8w9HI9FZnd9CR-6WBYyA-original.jpg',
      artist: 'antikvng',
      views: '14.6K',
      release: '4mo',
      timestamp: '2:36'
    },
    {
      title: "KILL 'EM ALL w/ antikvng",
      url: 'https://m.soundcloud.com/bsterthegawd/kill-em-all-w-antikvng',
      thumb: 'https://i1.sndcdn.com/artworks-EmBvSwzuJ9nVzvHz-htC8yg-original.jpg',
      artist: 'bsterthegawd',
      views: '25.7K',
      release: '4mo',
      timestamp: '2:48'
    },
    {
      title: 'final stage (w/ bster)',
      url: 'https://m.soundcloud.com/antikvng/final-stage-w-bster',
      thumb: 'https://i1.sndcdn.com/artworks-Lg7mL918dzoBwibe-y21FDQ-original.jpg',
      artist: 'antikvng',
      views: '36.7K',
      release: '2y',
      timestamp: '1:39'
    }
  ],
  status: 200,
  creator: 'RizzyFuzz'
}
```
</details>

# 💾 Downloading a Song With node-id3 Tags

<details>
<summary>👉 Preview Functions</summary>
  
```js
const scdl = require("scdl-api");
const fs = require("fs");
const axios = require("axios");
const { spawn } = require("child_process");
const NodeID3 = require("node-id3");

async function downloadSong(url) {
  try {
    const song = await scdl.soundcloud(url);
    const streamUrl = `${song.media.stream_url}`;

    const response = await axios.get(streamUrl, { responseType: "arraybuffer" });
    const audioBuffer = Buffer.from(response.data);

    //Convert audio to 360kbps
    const ffmpeg = spawn("ffmpeg", [
      "-i", "pipe:0",
      "-f", "mp3",
      "-ab", "360k",
      "-"
    ]);

    const filename = `${song.title}.mp3`;

     ffmpeg.stdout.pipe(fs.createWriteStream(filename));

    ffmpeg.stdin.write(audioBuffer);
    ffmpeg.stdin.end();

    ffmpeg.on("close", async (code) => {
      if (code === 0) {
        const tags = {
          title: song.title,
          artist: song.artist,
          album: song.title,
          year: song.created_at,
          image: {
            mime: "image/jpeg",
            type: {
              id: 3,
              name: "front cover"
            },
            description: "SoundCloud album cover",
            imageBuffer: await axios.get(song.artwork_url, { responseType: "arraybuffer" })
              .then((res) => Buffer.from(res.data))
              .catch((err) => console.error("Error downloading album art:", err))
          }
        };

        const success = NodeID3.write(tags, filename);
        if (success) {
          console.log(`Finished writing song "${song.title}" to file "${filename}"!`);
        } else {
          console.error("Failed to write ID3 tags to file");
        }
      } else {
        console.error(`FFmpeg process exited with code ${code}`);
      }
    });
  } catch (err) {
    console.error(err);
  }
}

downloadSong("https://soundcloud.com/prodbyscythe/crucible-w-antikvng");
```
</details>

# ©RizzyFuzz
