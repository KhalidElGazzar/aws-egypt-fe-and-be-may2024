# Create one hosted zones in AWS 


1. built-on-cloud.online
	- from you domain provider, you will need to add the 4 records for AWS NS records.
	- AWS will auto add the SOA record

Afterwards, add the following A record (simple routing) and make it point to an AWS resource.
2. static-website-aws-egypt-02.built-on-cloud.online


## Important Notes:
- This should be done only if you already purchased a domain
- Usually you will buy the domain from a service provider outside AWS such as namecheap or godaddy etc (since they have wide varieties), then by doing the steps above you transfer its management to AWS.

- Hosted zones is not part of 12 months free services. It will cost you $0.5 / month / hosted zone once you create a hosted zone (even if you deleted them afterwards).