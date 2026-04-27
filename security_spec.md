# Security Specification - Steak Portfolio

## Data Invariants
- Projects: Only admins can create/update/delete. Anyone can read.
- Pricing: Only admins can create/update/delete. Anyone can read.
- Contacts: Anyone can create (submit form). Only admins can read/delete.
- Profiles: Only admins can update. Anyone can read.

## The Dirty Dozen Payloads
1. **P1 (Project Spoof):** Try to create a project with `featured: true` as a non-admin.
2. **P2 (Project ID Poisoning):** Try to create a project with a 2KB ID.
3. **P3 (Pricing Price Manip):** Try to update a pricing tier to $0 as a non-admin.
4. **P4 (Contact Data Extraction):** Try to list all contacts as a guest.
5. **P5 (Contact Spam):** Try to submit a contact with a 1MB message.
6. **P6 (Profile Takeover):** Try to update the developer's name as a guest.
7. **P7 (Timestamp Fraud):** Try to set `createdAt` back in time.
8. **P8 (Shadow Field):** Try to add `isAdmin: true` to a profile document.
9. **P9 (Relational Break):** Try to delete a project while someone is viewing it (not really a rule but an integrity check).
10. **P10 (Auth Bypass):** Try to write to `contacts` without a name.
11. **P11 (Admin Escalation):** Try to add your own ID to an `admins` collection.
12. **P12 (PII Leak):** Try to read `contacts` emails as a guest.

## Rules Design
- `isValidProject(data)` helper.
- `isValidPricing(data)` helper.
- `isValidContact(data)` helper.
- `isAdmin()` helper check against `/admins/{userId}`.
- Default deny all.
- Global catch-all.
