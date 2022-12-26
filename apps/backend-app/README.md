# Reaktor Birdnest Backend service 
The following service is a background worker, which:
- collects intruder drones data and updates database with pilot information
- Removes stale pilot data (more than 10 minutes old) from the database