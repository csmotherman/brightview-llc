# Bright View project photography

The website is already wired for matched before/after photography.

Recommended source images:
- landscape 4:3 or portrait 4:5
- at least 1400px wide
- same camera position for the before and after shot
- avoid screenshots with UI around the photo

Suggested filenames:
- power-wash-01-before.jpg
- power-wash-01-after.jpg
- windows-01-before.jpg
- windows-01-after.jpg
- holiday-01-before.jpg
- holiday-01-after.jpg

Once photos are available, place them in this folder and pass their public paths to the BeforeAfter component, for example:

<BeforeAfter
  beforeSrc="/work/power-wash-01-before.jpg"
  afterSrc="/work/power-wash-01-after.jpg"
  title="Driveway refresh"
  service="Power Washing"
/>
