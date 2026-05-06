# GitHub Token Troubleshooting

## Issue: 403 Permission Denied

The current token is being rejected. Here's the checklist:

## ✅ Token Creation Checklist

### 1. Go to Token Settings
https://github.com/settings/tokens/new

### 2. Required Permissions (Scopes)
Make sure these are **checked**:
- ✅ **repo** (all sub-options)
  - repo:status
  - repo_deployment
  - public_repo
  - repo:invite
  - security_events
- ✅ **workflow** (Update GitHub Action workflows)

### 3. Token Type
- Use **Classic Token** (not Fine-grained - those have different permissions model)
- Expiration: 30/60/90 days (your choice)

### 4. SSO Authorization (if applicable)
If `Figma_MakeKit_test` is under an **organization**:
1. After creating the token, you'll see "Configure SSO" next to it
2. Click "Configure SSO"
3. Click "Authorize" next to the organization name

This is the most common cause of 403 errors!

### 5. Repository Ownership
Verify the repository at https://github.com/hkanchev/Figma_MakeKit_test
- Is it under your personal account? ✅ OK
- Is it under an organization? ⚠️ Need SSO authorization

## Alternative: SSH Instead of HTTPS

If token issues persist, you can use SSH:

### Setup SSH Key (one-time)
```bash
# Generate SSH key (if you don't have one)
ssh-keygen -t ed25519 -C "xpucmok@gmail.com"

# Copy public key
cat ~/.ssh/id_ed25519.pub
```

### Add to GitHub
1. Go to https://github.com/settings/keys
2. Click "New SSH key"
3. Paste the public key
4. Save

### Update Remote
```bash
git remote set-url origin git@github.com:hkanchev/Figma_MakeKit_test.git
git push -u origin main
```

---

## Once You Have a Working Token

Paste the new token here and I'll push your code immediately!

**Token format**: Should start with `ghp_` (classic token) or `github_pat_` (fine-grained)
