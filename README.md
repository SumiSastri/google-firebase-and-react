# Google Firebase App with React frontend

A demo app using React and Google Firebase V9.

Not the most beautiful ui-ux - purpose is to take Google Cloud Services (GCS) for a test drive. A lame-attempt to use Motion-CSS to animate images. 

Having gone through the same process with (AWS) Amazon Web Services, I wanted to form an opinion on how GCS worked in comparision.

This app has experimented with:

- Google Auth
- Federated sign in with Gmail
- File Storage (Image uploads and downloads)
- Firestore (document-type DB)

Key learnings - comparison with AWS (Amazon Web Services)

1. GCS much simpler and easier to use, great for SME (small-to-medium-size enterprises) but tough to scale up.
2. Fewer data-zones, so latency for enterprise use may be an issue, also learning Google Functions requires premium access.
3. Authentication was definitely easier to establish - both federated and with email/ password - compared with AWS.
4. Programmatic image uploads and downloads challenging with V9 of GCS.
5. Like all data-hosting service providers lock-in is an issue - this app using dummy data.

Docs folder is a work-in-progress as I plan to check out Google Functions in the coming weeks/ months.
