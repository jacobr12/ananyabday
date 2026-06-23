# A Little House for Ananya

A cozy birthday gift website — walk a tiny character through a dollhouse, click objects to learn about Ananya, and open the door to read letters.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy to Vercel

1. Push this folder to a GitHub repo.
2. Import the repo at [vercel.com](https://vercel.com).
3. Deploy — no env vars needed.

## Edit content (no coding required beyond text)

| File | What to change |
|------|----------------|
| `src/content/friend.ts` | Name, tagline, welcome message |
| `src/content/rooms.ts` | Room items, modal text, photo paths |
| `src/content/letters.ts` | Letters from friends & family |
| `public/photos/` | Add or replace photos |

### Adding a letter

Open `src/content/letters.ts` and add an object:

```ts
{
  id: "letter-from-mom",
  from: "Mom",
  sealColor: "#8aa87a",
  body: `Your letter here — *markdown* works.`,
  signoff: "love always,",
},
```

### Adding photos to an item

Put the image in `public/photos/`, then in `rooms.ts`:

```ts
image: "/photos/your-file.jpg",
caption: "Optional caption",
```

## Controls

- **Desktop:** Arrow keys or WASD to move; click items to interact.
- **Mobile:** Tap the floor to walk; tap items to interact.
- **Door (porch):** Opens the letters wall.
