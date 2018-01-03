# Configuration de développement local

Les instructions sur cette page vous guideront dans la mise en place d'un développement local
environnement dans Linux.

### Installation Ruby
1. Ouvrez un terminal et utilisez un gestionnaire de paquets pour installer ruby. Par exemple, sur Ubuntu ou Debian, utilisez `sudo apt-get install ruby ruby-dev` or on Arch Linux `sudo pacman -S ruby ruby-dev`.
2. Pour rendre les gemmes exécutables, tapez `(ruby -e 'print Gem.user_dir')` alors `PATH="$(ruby -e 'print Gem.user_dir')/bin:$PATH"` et enfin `export GEM_HOME=$HOME/.gem`. (plus d'infos à `https://wiki.archlinux.org/index.php/ruby#Setup`)

### Installation Jekyll
1. Ouvrez le terminal et tapez `gem install jekyll bundler`.

### Mise en place localement
1. Fork ce référentiel.
2. Utilisez git pour cloner votre dépôt forké, c.-à-d.
`git clone https://github.com/<your_username>/gci17.fossasia.org.git`
3. Changer le répertoire vers le référentiel local, c.-à-d. `cd gci17.fossasia.org`. Maintenant tapez `ls` Pour voir si `Gemfile` peut être vu.
4. Tapez `bundle install` to install dependencies.
5. Tapez `bundle exec jekyll serve `. Vous verrez une adresse du serveur.
6. Maintenant, votre serveur est opérationnel. Pour voir la page gci17.fossasia.org, allez à `localhost:4000`.
