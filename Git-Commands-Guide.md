# Git Commands Complete Guide

A comprehensive reference for all essential Git commands used in development.

## Table of Contents

- [Basic Git Commands](#basic-git-commands)
- [Branching Commands](#branching-commands)
- [Remote Repository Commands](#remote-repository-commands)
- [File Management Commands](#file-management-commands)
- [Advanced Commands](#advanced-commands)
- [Information & Debugging](#information--debugging)
- [Useful Aliases](#useful-aliases)
- [Common Workflows](#common-workflows)

---

## Basic Git Commands

### Initialization & Configuration

```bash
# Initialize a new Git repository
git init

# Clone an existing repository
git clone <repository-url>
git clone <repository-url> <directory-name>

# Configure user information
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"

# Check configuration
git config --list
git config user.name
git config user.email
```

### Basic Workflow

```bash
# Check status of files
git status

# Add files to staging area
git add <filename>
git add .                    # Add all files
git add *.js                 # Add all .js files
git add -A                   # Add all files (including deleted)

# Commit changes
git commit -m "Your commit message"
git commit -am "Add and commit all tracked files"

# View commit history
git log
git log --oneline           # Compact view
git log --graph             # Show branch graph
git log --oneline --graph   # Compact with graph
```

---

## Branching Commands

### Branch Management

```bash
# List branches
git branch                  # Local branches
git branch -r               # Remote branches
git branch -a               # All branches

# Create and switch to new branch
git checkout -b <branch-name>
git switch -c <branch-name>  # Newer syntax

# Switch between branches
git checkout <branch-name>
git switch <branch-name>     # Newer syntax

# Delete branches
git branch -d <branch-name>  # Safe delete
git branch -D <branch-name>  # Force delete
```

### Merging

```bash
# Merge branches
git merge <branch-name>
git merge --no-ff <branch-name>  # No fast-forward merge
git merge --squash <branch-name> # Squash merge
```

---

## Remote Repository Commands

### Remote Management

```bash
# Add remote repository
git remote add origin <repository-url>

# List remotes
git remote
git remote -v               # With URLs

# Remove remote
git remote remove origin

# Rename remote
git remote rename old-name new-name
```

### Push & Pull

```bash
# Push to remote
git push origin <branch-name>
git push -u origin <branch-name>  # Set upstream
git push --all                    # Push all branches
git push --force                  # Force push (dangerous!)

# Pull from remote
git pull origin <branch-name>
git pull                         # Pull from upstream
git fetch                        # Fetch without merging
git fetch --all                  # Fetch all remotes
```

---

## File Management Commands

### File Operations

```bash
# Remove files
git rm <filename>            # Remove and stage
git rm --cached <filename>   # Remove from index only

# Move/rename files
git mv <old-name> <new-name>

# Restore files
git restore <filename>       # Restore working directory
git restore --staged <filename>  # Unstage file
```

### Undoing Changes

```bash
# Undo last commit (keep changes)
git reset --soft HEAD~1

# Undo last commit (discard changes)
git reset --hard HEAD~1

# Undo to specific commit
git reset --hard <commit-hash>

# Revert a commit (creates new commit)
git revert <commit-hash>
```

---

## Advanced Commands

### Stashing

```bash
# Stash changes
git stash                    # Stash current changes
git stash push -m "message"  # Stash with message
git stash list               # List stashes
git stash pop                # Apply and remove latest stash
git stash apply              # Apply latest stash (keep stash)
git stash drop               # Delete latest stash
git stash clear              # Delete all stashes
```

### Rebasing

```bash
# Interactive rebase
git rebase -i HEAD~3         # Rebase last 3 commits
git rebase -i <commit-hash>  # Rebase from specific commit

# Rebase onto another branch
git rebase <branch-name>
git rebase --continue        # Continue after resolving conflicts
git rebase --abort           # Abort rebase
```

### Cherry-picking

```bash
# Cherry-pick commits
git cherry-pick <commit-hash>
git cherry-pick <commit1> <commit2>  # Multiple commits
```

---

## Information & Debugging

### Viewing Information

```bash
# Show differences
git diff                     # Working directory vs staged
git diff --staged            # Staged vs last commit
git diff HEAD                # Working directory vs last commit
git diff <branch1> <branch2> # Between branches

# Show file history
git log --follow <filename>
git blame <filename>         # Who changed what line

# Show commit details
git show <commit-hash>
git show HEAD                # Show last commit
```

### Search & Filter

```bash
# Search in commits
git log --grep="search term"
git log --author="author name"
git log --since="2023-01-01"
git log --until="2023-12-31"

# Search in code
git grep "search term"
git grep -n "search term"    # With line numbers
```

---

## Useful Aliases

Add these to your `~/.gitconfig` file for shortcuts:

```bash
# Add aliases
git config --global alias.st status
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.ci commit
git config --global alias.unstage 'reset HEAD --'
git config --global alias.last 'log -1 HEAD'
git config --global alias.visual '!gitk'
```

### Using Aliases

```bash
# After setting up aliases, you can use:
git st                       # Instead of git status
git co <branch-name>         # Instead of git checkout
git br                       # Instead of git branch
git ci -m "message"          # Instead of git commit -m
```

---

## Common Workflows

### Feature Branch Workflow

```bash
# Start new feature
git checkout -b feature/new-feature
# Make changes, commit
git add .
git commit -m "Add new feature"
# Push to remote
git push -u origin feature/new-feature
# Create pull request, then merge
git checkout main
git pull origin main
git branch -d feature/new-feature
```

### Hotfix Workflow

```bash
# Create hotfix branch
git checkout -b hotfix/urgent-fix
# Make changes, commit
git add .
git commit -m "Fix urgent issue"
# Push and merge
git push -u origin hotfix/urgent-fix
```

### Daily Development Workflow

```bash
# Start your day
git pull origin main

# Create feature branch
git checkout -b feature/my-feature

# Make changes and commit
git add .
git commit -m "Implement feature"

# Push to remote
git push -u origin feature/my-feature

# After code review and merge, clean up
git checkout main
git pull origin main
git branch -d feature/my-feature
```

---

## Quick Reference

### Most Used Commands

```bash
git status                  # Check what's changed
git add .                   # Stage all changes
git commit -m "message"     # Commit changes
git push                    # Push to remote
git pull                    # Pull from remote
git checkout -b branch      # Create new branch
git merge branch            # Merge branch
```

### Emergency Commands

```bash
git stash                  # Save work in progress
git reset --hard HEAD      # Discard all changes (dangerous!)
git revert <commit>        # Undo a specific commit safely
git reflog                 # Find lost commits
```

---

## Tips & Best Practices

1. **Always check status** before committing: `git status`
2. **Write descriptive commit messages**: "Fix bug" vs "Fix login validation error"
3. **Use branches** for new features: `git checkout -b feature/name`
4. **Pull before pushing**: `git pull` then `git push`
5. **Don't force push** unless absolutely necessary
6. **Use .gitignore** to exclude files you don't want to track
7. **Commit often** with small, logical changes
8. **Review changes** with `git diff` before committing

---

## Troubleshooting

### Common Issues

```bash
# Merge conflicts
git status                  # See conflicted files
# Edit files to resolve conflicts
git add <resolved-file>
git commit                  # Complete the merge

# Accidentally committed to wrong branch
git reset --soft HEAD~1    # Undo commit, keep changes
git checkout correct-branch
git commit -m "message"

# Lost commits
git reflog                  # Find lost commits
git checkout <commit-hash>  # Go to that commit
git checkout -b new-branch  # Create branch from there
```

---

_This guide covers the most commonly used Git commands. Start with the basic workflow and gradually learn advanced commands as needed._
