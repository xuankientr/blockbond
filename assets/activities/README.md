# Activity media assets

Three original JPEG photographs supplied by the site owner are stored in `images/`, in the same order as the supplied Drive links. Original bytes are preserved. Metadata and source links are recorded in `manifest.json`.

These source images are 7008 × 4672 pixels each, totaling about 78 MB. They are kept outside the deployed `dist/` directory so staging the media does not add large unused files to the current website. Create web-sized versions in `dist/assets/activities/` when implementing the activities section.

## Videos

`videos/activity-video-01.mp4` is the original first supplied video, preserved unchanged: H.264/AAC MP4, 2560 × 1440, approximately 53 seconds. It is stored outside the deployed `dist/` directory. Metadata and the Drive source are in `manifest.json`.

## Awaiting content

- `videos/`: the first video is ready; two remaining video slots still have null file paths in the manifest.
- `images/pending/`: reserved for additional photographs.
- Event titles, descriptions, alt text and video posters remain blank until the actual content is supplied.

No placeholder files pretend to be playable videos, and this asset update does not add media to the current page.
