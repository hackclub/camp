- Let's get this website on the real internet.
  - [GitHub](https://github.com/) is where millions of developers store their
    code online. One of their services,
    [GitHub Pages](https://pages.github.com/), will put a website online for
    you. We'll be using GitHub pages to host our portfolio.
  - Head over to https://github.com/ and create a free account.

    ![](img/github_create_account.png)

  - Before proceeding, **verify the email on your GitHub accounts**. The
    following steps _will not_ work if you don't do this. If you check your
    inbox, you'll see an email from GitHub with a confirmation link.
  - Once you have an account created, go to the GitHub homepage at
    https://github.com and create a new repository with the name
    _username_.github.io (replacing _username_ with your GitHub username).
    Make sure `Initialize this repository with a README` **is not** checked.

    ![](img/github_create_repo.gif)

  - To use GitHub, we need to use another tool called git. Git is a tool that
    lets us take "snapshots" of the code we've written so far. GitHub is a
    place where we can store our git projects and collaborate with others. Do
    note, GitHub and git are _not_ the same thing. We'll go further into the
    distinction later.
  - Git is already installed on Cloud9. Go ahead and open a new terminal tab
    and run the command `git init` to create a new git project.

    ![](img/git_init.gif)

  - Go ahead and run `git add -A :/` and then `git commit -m "Initial
    commit."` in the terminal. Don't worry about what these two commands mean,
    they're just telling git to create a snapshot of our code and adding the
    message "Initial commit." to the snapshot.

    ![](img/git_initial_commit.gif)

  - Final step. Let's tell git to upload our code to GitHub. Run the following
    two commands in your terminal, replacing `username` with your GitHub
    username. It'll prompt you for your GitHub username and password, go ahead
    and enter those. Don't worry if it doesn't display any characters while
    you type your password, just hit enter when you're done and all should be
    well with the world.

    ```
    $ git remote add origin https://github.com/username/username.github.io
    $ git push -u origin master
    ```

    ![](img/git_initial_push.gif)

  - Great! Now if you head over to
    https://{username}.github.io/portfolio/index.html (replace {username} with
    your GitHub username), you'll see the site we just made deployed live. It
    may take a few minutes for GitHub to prepare your site. If you get an
    error, no worries, just wait a few minutes and try again.

--------------------------------------------------------------------------------

[Heading Challenge](heading_challenge.md)
