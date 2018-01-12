# Local Development Setup

The instructions on this page will guide you in setting up a local development
environment in Linux.

### Ruby Installation
1. Open a Terminal and use a package manager to install ruby. For example, on Ubuntu or Debian use `sudo apt-get install ruby ruby-dev` or on Arch Linux `sudo pacman -S ruby ruby-dev`.
2. To make gems executable type `(ruby -e 'print Gem.user_dir')` then `PATH="$(ruby -e 'print Gem.user_dir')/bin:$PATH"` and last `export GEM_HOME=$HOME/.gem`.(more info at `https://wiki.archlinux.org/index.php/ruby#Setup`)

### jekyll Installation
1. In your Terminal enter `gem install jekyll bundler`.

### Setting up locally
1. Fork this repository.
2. Use git to clone your forked repository, i.e.
`git clone https://github.com/<your_username>/gci17.fossasia.org.git`
3. Change directory to the local repository, i.e. `cd gci17.fossasia.org`. Now type `ls` to see if `Gemfile` can be seen.
4. Type `bundle install` to install dependencies.
5. Type `bundle exec jekyll serve `. You will see a Server address.
6. Now your server is up and running. To view gci17.fossasia.org page, go to `localhost:4000`.
