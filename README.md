# Google Firebase App with React frontend

A demo app using React and Google Firebase V9. 

Not the most beautiful ui-ux - purpose is to take Firebase for a test drive.  

Having gone through the same process with (AWS) Amazon Web Services, I wanted to form an opinion on how Firebase - one of the Google Cloud Platform services worked in comparision.

This app has experimented with:

- Google Auth
- Federated sign in with Gmail
- File Storage (Image & file uploads and downloads)
- Firestore (document-type DB)

Key learnings - comparison with AWS (Amazon Web Services)

1. Firebase is easy to and a good introduction to GCP
2. Fewer data-zones, so latency for enterprise use may be an issue, also learning Google Functions requires premium access.
3. Authentication was definitely easier to establish - both federated and with email/ password - compared with AWS.
4. Programmatic image uploads and downloads challenging with V9 of GCS compared with S3 uploads
5. Like all data-hosting service providers lock-in is an issue - this app using dummy data.

Docs folder is a work-in-progress as I plan to check out Google Functions in the coming weeks/ months.
