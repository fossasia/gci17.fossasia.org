# Configuration de développement local

Les instructions sur cette page vous guideront dans la mise en place d'un développement local
environnement dans Mac OS.

### Installation des outils de développement Apple
1. Sous OS X, ouvrez votre dossier Applications, puis ouvrez le dossier Utilitaires. Ouvrez le terminal.
2. Entrer `xcode select --install`.

### Installation Homebrew
1. Entrer `/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"` dans le Terminal.

### Installation Ruby
1. Entrer `brew install ruby` dans le Terminal.
2. Pour vérifier s'il est correctement installé, tapez `which gem`. si vous voyez cela `usr/local/bin/gem` tous sont installés correctement.

### Installation Jekyll
1. Dans votre Terminal, entrer `gem install jekyll bundler`

### Mise en place localement
1. Fork ce référentiel.
2. Utilisez git pour cloner votre dépôt forké, c.-à-d. git clone .`https://github.com/<your_username>/gci17.fossasia.org.git`
3. Changer le répertoire vers le référentiel local, c.-à-d. `cd gci17.fossasia.org`. Maintenant tapez `ls` Pour voir si `Gemfile` peut être vu.
4. Tapez `bundle install` installer des dépendances.
5. Tapez `bundle exec jekyll serve `. Vous verrez une adresse du serveur.
6. Maintenant, votre serveur est opérationnel. Pour voir la page gci17.fossasia.org, allez à `localhost:4000`.
