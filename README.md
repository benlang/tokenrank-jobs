# TokenRank Jobs

A small static job board where employer-posted roles are ranked by token count.

## How it works

- Employers add a job title, company, location, description, and token count.
- Jobs sort from highest token count to lowest token count.
- If two jobs have the same token count, the newest posting ranks first.

## Run locally

Use any static file server from the project root:

```bash
python3 -m http.server 5173
```

Then open `http://localhost:5173`.
