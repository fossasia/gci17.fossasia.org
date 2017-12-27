# Local Development Setup

The instructions on this page will guide you in setting up a local development
environment in MacOS.

### Apple Developer Tools Installation
1. On OS X, open your Applications folder, then open the Utilities folder. Open the Terminal.
2. Enter `xcode select --install`.

### Homebrew Installation
1. Enter `/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"` in the Terminal.

### Ruby Installation
1. Enter `brew install ruby` in the Terminal.
2. To check if it is correctly installed, type `which gem`. If you see this `usr/local/bin/gem` all are installed correctly.

### jekyll Installation
1. In your Terminal enter `gem install jekyll bundler`

### Setting up locally
1. Fork this repository.
2. Use git to clone your forked repository, i.e. git clone .`https://github.com/<your_username>/gci17.fossasia.org.git`
3. Change directory to the local repository, i.e. `cd gci17.fossasia.org`. Now type `ls` to see if `Gemfile` can be seen.
4. Type `bundle install` to install dependencies.
5. Type `bundle exec jekyll serve `. You will see a Server address.
6. Now your server is up and running. To view gci17.fossasia.org page, go to `localhost:4000`.