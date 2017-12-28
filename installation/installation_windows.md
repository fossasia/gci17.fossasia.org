# Local Development Setup

The instructions on this page will guide you in setting up a local development
environment in Windows OS.

### Ruby Installation
1. [Install Ruby and Development Kit](https://rubyinstaller.org/downloads/). During ruby installation check the “Add Ruby executables to your PATH” box.
e.g. for 64-bit architecture install: [Ruby2.3.3](https://dl.bintray.com/oneclick/rubyinstaller/ruby-2.3.3-i386-mingw32.7z)
2. [Install corresponding Ruby DevKit](https://rubyinstaller.org/downloads/) e.g. corresponding [developer kit](https://dl.bintray.com/oneclick/rubyinstaller/DevKit-mingw64-64-4.7.2-20130224-1432-sfx.exe).
When you execute the file , it’ll ask you for a destination for the files. Enter a path that has no spaces in it.
3. Navigate to the folder you extracted the DevKit using your Command Line. e.g. using `powershell` or `cmd`
4. Enter `ruby dk.rb init` in the command line interface followed by `ruby dk.rb review` and finally `ruby dk.rb install` to complete the installation of the DevKit by binding it to your Ruby installation.

### jekyll Installation
1. Open cmd and type `gem install jekyll bundler`

### Setting up locally
1. Fork this repository.
2. Open git terminal(Git bash in windows), and clone your forked repo i.e. `git clone https://github.com/<your_username>/gci17.fossasia.org.git` in the directory you want.
3. Change directory to the local repository i.e. `cd gci17.fossasia.org`. Now type `ls` to see if `Gemfile` can be seen.
4. Type `bundle install` to install dependencies.
5. Type `gem install jekyll-sitemap` and then `gem install jekyll-paginate`.(Not necessary, If it is installed in the previous step.)
6. Now open Gemfile(with any text editor e.g. sublime) and then remove '#' in `#gem 'github-pages', group: :jekyll_plugins` and add '#' to `gem 'jekyll-sitemap'` 
`gem 'jekyll-paginate'`. Save the file.
7. Type in the git terminal `bundle exec jekyll serve `. You will see a Server address.
8. Now your server is up and running. To view gci17.fossasia.org page, go to `localhost:4000`.
