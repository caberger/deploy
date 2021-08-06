# install-ssh-key Github Action

This [action](https://github.com/features/actions) installs a private key into the current [github runner](https://docs.github.com/en/actions/using-github-hosted-runners/about-github-hosted-runners) so that [ssh](https://www.openssh.com/), scp and sftp can be used
to access your server from the current github runner instance. 

Motivation
===

Sometimes you want to run commands on a server owned by you as part of the github workflow. Sometimes you want to copy files from/to your own server as part of a build step.

This action prepares the current runner instance so that you can use ssh and run commands like the following:
~~~yaml
- run: |
    echo "this is a test" > ~/test.txt
    scp ~/test.txt server:~/
    ssh server "ls -l ~"
~~~

Usage
===

- create a private and public key pair:
    ```bash
    ssh-keygen -m PEM -t rsa -b 4096 -C "your_email@example.com" -f server -q -N ""
    ```
- append the public part of the key to your ~/.ssh/authorized_keys file on your server:

    ```bash
    ssh-copy-id -i server server
    ```

- add the generated private key __server__ as the [github secret](https://docs.github.com/en/actions/reference/encrypted-secrets) with the name __SERVER_SSH_PRIVATE_KEY__ to your repository.
- add your user name on the server as the github secret __SERVER_USER__
- add the full qualified domain name of your server as the github secret __SERVER__ 

Now you can access your server with standard run commands just like this:
```yaml
- name: install ssh key
    uses: caberger/deploy@v1.0
    with:
        ssh-private-key:  ${{ secrets.SSH_SERVER_PRIVATE_KEY }}
        user: ${{ secrets.SERVER_USER }}
        server: ${{ secrets.SERVER }}
        alias: server
- run: |
    echo "this is a test" > ~/test.txt
    scp ~/test.txt server:~/
    ssh server "ls -l ~"
```
See [demo.yml](.github/workflows/demo.yml) for a more detailled example.
