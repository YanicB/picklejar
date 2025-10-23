# PickleJar

PickleJar is the LettuceMeet-for-ideas: a lightweight, anonymous idea-sharing and voting app. Hosts create a link, friends drop ideas, then everyone votes. When voting closes, the winner is clear—no bias, no endless back-and-forth.

## The Problem
Making group decisions is painful, people talk over each other, louder voices win, and favorites skew choices. PickleJar removes identities from the decision step so ideas compete on merit. It also adds a simple, repeatable flow so groups stop stalling and start deciding.

## How It Works (3 steps)
1. **Create a poll** → get a shareable link and a private **manage token**.
2. **Collect ideas** (Phase: `COLLECTING`) → anyone with the link can add ideas.
3. **Start voting** (Phase: `VOTING`) → participants cast a single vote; changing is allowed until close.  
   **Close** (Phase: `CLOSED`) → results lock and the winner is shown.

## Core Features
- **Short shareable links** (random slug, easy to send)
- **Anonymous idea submission** (optional display name)
- **Single-choice voting** (one vote per participant per poll; re-vote updates)
- **Clear phases** (`COLLECTING` → `VOTING` → `CLOSED`) with server-enforced rules
- **Creator controls** with a one-time **manage token** (start/close)

## Use Cases
- **Friends** deciding weekend plans, restaurants, activities  
- **Student clubs** picking themes, event ideas, workshop topics  
- **Teams** prioritizing offsite ideas, retrospectives, naming options  
- **Communities** choosing meet-up locations or talk topics

## Tech Stack
**Frontend:** React (Vite), React Router, Tailwind CSS  
**Backend:** Node.js, Express  
**Database/ORM:** PostgreSQL, Prisma

---
