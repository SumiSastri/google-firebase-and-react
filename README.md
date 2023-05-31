# Google Firebase App with React frontend

A demo app using React and Google Firebase - not the most beautiful ui-ux - purpose is to take Google Cloud Services (GCS) for a test drive.

You can sign-in with a federated Gmail account or with an email and password. Firebase Authentication methods are imported and the config provided used to set up a simple sign-in/ sign-out or register facility.

Having gone through the same process with Amazon Web Services, I wanted to form an opinion on how GCS worked in comparision.

Key learnings - GCS much simpler and easier to use, great for SME (small-to-medium-size enterprises) but tough to scale up. Fewer data-zones, so latency for enterprise use may be an issue. Authentication was definitely easier to establish - both federated and with email/ password - compared with AWS.
