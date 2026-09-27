# Adding real project photography

Each service has its own folder here:

```
public/projects/window-cleaning/
public/projects/power-washing/
public/projects/holiday-lighting/
```

## 1. Add the images

- Same camera position for the before and after shot
- At least 1600px on the long edge
- Landscape or portrait, either works — the slider adapts
- Name them clearly, e.g. `smith-driveway-before.jpg` / `smith-driveway-after.jpg`

Drop both files into the matching service folder.

## 2. Register the project

Open `data/projects.ts` and add an entry to the `projects` array:

```ts
{
  id: "power-washing-smith-driveway",
  service: "power-washing",
  title: "Driveway reset",
  location: "Rochester, MI",
  description: "Two-year buildup of algae and tire staining removed from the full driveway and walkway.",
  beforeSrc: "/projects/power-washing/smith-driveway-before.jpg",
  afterSrc: "/projects/power-washing/smith-driveway-after.jpg",
  beforeAlt: "Algae-stained concrete driveway before Bright View power washing",
  afterAlt: "Clean concrete driveway after Bright View power washing",
}
```

`location` and `description` are optional — leave them out if you'd rather not include them yet.

That's it. The homepage, the service pages, and `/gallery` all read from this same array, so a project you add here automatically appears everywhere it's relevant. Until an entry exists for a given service, that service's before/after section stays hidden rather than showing a placeholder.
