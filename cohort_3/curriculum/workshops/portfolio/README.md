# Portfolio

## Cloud9

- Go to https://c9.io, click the `Sign Up` button, and create an account
- Click `Go to your dashboard`
- Creating a workspace
    - Click `Create a new workspace`
    - Give it the name `hack-camp`
    - Make sure the `Custom` type is selected
    - Click `Create workspace`
- Configuring your workspace
    - Select the `Minimal Editor` preset.
    - Change `Soft Tabs` to 2
    - Turn on `Enable Auto-Save`
    - At the very top of the window, click the little triangle on the bar to show the Cloud9 editor options.

      ![](img/c9_configuring_workspace_top_bar.png)

    - Click `View` and then `Console` to open up the terminal
    - Your workspace should now look like the following:

      ![](img/c9_configured_workspace.png)

    - Go ahead and close the welcome tab

      ![](img/c9_closed_welcome_tab.png)

    - Final step, paste the following command into the terminal on the bottom and hit enter. This may take a few minutes to finish.

            $ curl -sL https://git.io/vtbp6 | sudo dd of=/usr/local/bin/live_reload && sudo chmod +x /usr/local/bin/live_reload && live_reload

    - When it's done, your workspace should look like the following

      ![](img/c9_live_reload_installed.png)
- Bootstrapping portfolio website
    - On the left file pane, right click and click `New Folder` to create a new folder. Name it `portfolio``

      ![](img/c9_create_portfolio_folder.gif)

    - Create a new file inside of portfolio called `index.html` and open it

      ![](img/c9_create_index_file.gif)

    - Go ahead and type the following into the open file (don't copy and paste it! and make sure to indent properly!). Replace "Zaphod" with your first name and "Zaphod Beeblebrox" with your first and last name.

      ```html
      <!DOCTYPE html>
      <html>
        <head>
          <title>Zaphod's Portfolio</title>
        </head>
        <body>
          <h1>Zaphod Beeblebrox</h1>
        </body
      </html>
      ```

      ![](img/c9_portfolio_template.gif)

    - Let's see what our website looks like so far.

      ![](img/c9_preview_template_website.gif)

    - We can also open the website in its own tab.

      ![](img/c9_preview_template_website_own_tab.gif)
