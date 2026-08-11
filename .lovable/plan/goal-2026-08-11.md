Remove poptart from the roster

## Goal
Remove the NA player "poptart" from the team roster.

## Current state
- `src/lib/team-data.ts` contains a `roster` array with a player entry for `poptart` (id `p12`, lines 196-204).
- No other files reference `poptart`.

## Change
- Delete the `p12` player object from the `roster` array in `src/lib/team-data.ts`.

## Verification
- Confirm the roster renders without poptart in the preview.
- Confirm the build still passes.
