# Activity media

The original three JPEG photos and one MP4 video supplied by the site owner are preserved here. Source links, original dimensions and checksums are recorded in `manifest.json`.

The published **BlockBond in action** section uses optimized versions in `dist/assets/activities/`: responsive WebP photographs, a video poster, and a 1080p H.264/AAC MP4 with fast-start metadata. Originals remain outside `dist/`. The video only loads when a visitor starts playback (`preload="none"`), and the photographs support an accessible lightbox.

## Future additions

`images/pending/` is reserved for additional photographs. The current section displays one video and three photos. Activity names, dates and other specific event details have not been invented; captions describe only the visible community moments.

To add another photo, add its original to this folder, create web-sized versions in `dist/assets/activities/`, and add a button with the existing `activity-photo` structure to the gallery. Gallery navigation automatically includes it.
