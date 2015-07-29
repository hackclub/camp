# Setting up your workspace

Just like you may write your English essays in Microsoft Word or Google Docs we will be writing code in Cloud9.

## Open `github.com`
![](img/c9_v2_setup_1.png)

## Create an account with a valid eamil
![](img/c9_v2_setup_2.png)

## Click "Sign up for Github"
![](img/c9_v2_setup_3.png)

## Validating your Email Address

- Check your email inbox for a confirmation email from github
- Make sure you click on the link it tells you to to confirm your accountl.

> *Important Note*: If you don't do this now, the latter part of this tutorial will not work for you!

## Open `c9.io`
![](img/c9_v2_setup_4.png)

# Click "SIGN UP"
![](img/c9_v2_setup_5.png)

## Click "GitHub"
![](img/c9_v2_setup_6.png)

## Sign In with Github
![](img/c9_v2_setup_7.png)

## Click "Dashboard"
![](img/c9_v2_setup_8.png)

## Click on the "+" button
This creates a new Cloud9 workspace.

## Set the workspace name to `hack-camp`
![](img/c9_v2_setup_12.png)

## Click "Custom"

![](img/c9_v2_setup_13.png)

## Click "Create Workspace"
![](img/c9_v2_setup_14.png)

## Scroll Down
![](img/c9_v2_setup_16.png)

## Change `Soft Tabs` to `2`
![](img/c9_v2_setup_17.png)

## The Terminal
When we talk about the terminal, this is what we are referring to.

This is another user interface for running commands on the computer.

![](img/c9_v2_setup_18.png)

## Start the Server

- Paste the following command into the terminal

    ```
    curl -sL https://git.io/vtbp6 | sudo dd of=/usr/local/bin/live_reload && sudo chmod +x /usr/local/bin/live_reload && live_reload
    ```

- hit `enter`. 

- this may take a few minutes to finish.

## Close the Welcome Tab
![](img/c9_closed_welcome_tab.png)

## When it's done, your workspace should look like the following:
![](img/c9_live_reload_installed.png)

## Next

Great, now you've finished setting up your Cloud9 workspace!

The next step is to [create the folders and files for your website.](file_creation.md)
