from pathlib import Path



# Define the markdown content for Docker and Git commands

content = """# 🐳 Docker & 🧩 Git Commands Guide



This guide provides a **comprehensive list of commonly used Docker and Git commands**, along with detailed descriptions to help you understand their usage.



---



## 🐳 Docker Commands



| Command | Description |

|----------|--------------|

| `docker --version` | Shows the installed Docker version. |

| `docker pull <image_name>` | Downloads a Docker image from Docker Hub. |

| `docker images` | Lists all downloaded Docker images. |

| `docker run -it <image_name>` | Runs a container interactively using the specified image. |

| `docker ps` | Lists all running containers. |

| `docker ps -a` | Lists all containers (including stopped ones). |

| `docker stop <container_id>` | Stops a running container. |

| `docker start <container_id>` | Starts a stopped container. |

| `docker restart <container_id>` | Restarts a container. |

| `docker rm <container_id>` | Removes a stopped container. |

| `docker rmi <image_name>` | Removes a Docker image. |

| `docker exec -it <container_id> /bin/bash` | Opens an interactive bash shell inside a running container. |

| `docker build -t <tag_name> .` | Builds a Docker image from a Dockerfile in the current directory. |

| `docker-compose up` | Starts services defined in a `docker-compose.yml` file. |

| `docker-compose down` | Stops and removes services defined in the compose file. |

| `docker logs <container_id>` | Displays logs from a container. |

| `docker network ls` | Lists all Docker networks. |

| `docker volume ls` | Lists all Docker volumes. |

| `docker system prune -a` | Removes all unused containers, images, and networks. |



---



## 🧩 Git Commands



| Command | Description |

|----------|--------------|

| `git --version` | Displays the installed Git version. |

| `git init` | Initializes a new Git repository in the current directory. |

| `git clone <repo_url>` | Clones a remote repository to your local machine. |

| `git status` | Shows the current status of your working directory. |

| `git add <file_name>` | Stages specific files for commit. |

| `git add .` | Stages all changes in the current directory. |

| `git commit -m "message"` | Commits staged changes with a message. |

| `git log` | Displays the commit history. |

| `git diff` | Shows changes between commits, branches, or working directory and index. |

| `git branch` | Lists all local branches. |

| `git branch <branch_name>` | Creates a new branch. |

| `git checkout <branch_name>` | Switches to the specified branch. |

| `git merge <branch_name>` | Merges another branch into the current one. |

| `git pull origin <branch_name>` | Fetches and merges changes from a remote branch. |

| `git push origin <branch_name>` | Pushes local commits to the remote repository. |

| `git remote -v` | Shows the configured remote repositories. |

| `git fetch` | Downloads objects and refs from another repository. |

| `git reset --hard <commit_id>` | Resets the repository to a specific commit (discarding changes). |

| `git revert <commit_id>` | Creates a new commit that undoes the changes of a specific commit. |

| `git stash` | Temporarily saves uncommitted changes. |

| `git stash apply` | Re-applies the most recently stashed changes. |

| `git tag <tag_name>` | Creates a tag for a specific commit (useful for releases). |



---



## 🧠 Tips



- Use `docker ps -q` to get only container IDs.

- Use `git log --oneline --graph --all` to visualize your commit history.

- Use `.gitignore` to exclude unnecessary files from being tracked.

- Combine `docker-compose` with `.env` for managing environment variables easily.



---



> **Author:** Yash Avsarmal  

> **Last Updated:** November 2025  

> 🚀 For learning, reference, and DevOps practice.

"""



# Save the markdown file

file_path = Path("/mnt/data/Docker_Git_Commands_Guide.md")

file_path.write_text(content)



file_path
