# Configuration de développement local

Les instructions sur cette page vous guideront dans la mise en place d'un développement local
environnement dans Windows OS.

### Installation Ruby
1. [Installez Ruby et le kit de développement](https://rubyinstaller.org/downloads/). Lors de l'installation de ruby, cochez la case "Ajouter des exécutables Ruby à votre PATH".
Par exemple, pour l'architecture 64 bits, installer: [Ruby2.3.3](https://dl.bintray.com/oneclick/rubyinstaller/ruby-2.3.3-i386-mingw32.7z)
2. [Installez Ruby DevKit correspondant](https://rubyinstaller.org/downloads/) Par exemple, correspondant [kit développeur](https://dl.bintray.com/oneclick/rubyinstaller/DevKit-mingw64-64-4.7.2-20130224-1432-sfx.exe).
Lorsque vous exécutez le fichier, il vous demandera une destination pour les fichiers. Entrez un chemin sans espace.
3. Accédez au dossier que vous avez extrait le DevKit en utilisant votre ligne de commande. Par exemple, utilisant `powershell` ou `cmd`
4. Entrer `ruby dk.rb init` dans l'interface de ligne de commande suivie par `ruby dk.rb review` et enfin `ruby dk.rb install` pour terminer l'installation du DevKit en le reliant à votre installation Ruby.

### Installation Jekyll
1. Ouvrez le cmd et tapez `gem install jekyll bundler`

### Mise en place localement
1. Fork ce référentiel.
2. Ouvrez le terminal git (Git bash dans windows), et clone votre repo fourchu c.-à-d. `git clone https://github.com/<your_username>/gci17.fossasia.org.git` dans le répertoire que vous voulez.
3. Changer le répertoire dans le référentiel local c.-à-d. `cd gci17.fossasia.org`. Maintenant tapez `dir` Pour voir si `Gemfile` peut être vu.
4. Tapez `bundle install` pour installer des dépendances.
5. Tapez `gem install jekyll-sitemap` et alors `gem install jekyll-paginate`.(Pas nécessaire, s'il est installé à l'étape précédente.)
6. Maintenant, ouvrez Gemfile (avec n'importe quel éditeur de texte, par exemple sublime), puis supprimez "#" dans `#gem 'github-pages', group: :jekyll_plugins` et ajouter '#' à `gem 'jekyll-sitemap'`
`gem 'jekyll-paginate'`. Enregistrez le fichier.
7. Tapez le terminal git `bundle exec jekyll serve `. Vous verrez une adresse du serveur.
8. Maintenant, votre serveur est opérationnel. Pour voir la page gci17.fossasia.org, allez à `localhost:4000`.
