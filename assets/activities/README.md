# Activity media assets

Three original JPEG photographs supplied by the site owner are stored in `images/`, in the same order as the supplied Drive links. Original bytes are preserved. Metadata and source links are recorded in `manifest.json`.

These source images are 7008 × 4672 pixels each, totaling about 78 MB. They are kept outside the deployed `dist/` directory so staging the media does not add large unused files to the current website. Create web-sized versions in `dist/assets/activities/` when implementing the activities section.

## Awaiting content

- `videos/`: reserved for the three videos; all video paths in the manifest remain null until supplied.
- `images/pending/`: reserved for additional photographs.
- Event titles, descriptions, alt text and video posters remain blank until the actual content is supplied.

No placeholder files pretend to be playable videos, and this asset update does not add media to the current page.
