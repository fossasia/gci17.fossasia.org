# Konfiguracja lokalnego środowiska

Instrukcje na tej stronie przeprowadzą Cię przez proces konfiguracji lokalnego środowiska programistycznego w Linuksie.

### Instalacja Ruby
1. Otwórz Terminal i użyj package managera aby zainstalować Ruby. Na przykład, dla Ubuntu lub Debiana użyj `sudo apt-get install ruby ruby-dev` a dla Arch Linux `sudo pacman -S ruby ruby-dev`.
2. Aby gemy były wykonywalne użyj `(ruby -e 'print Gem.user_dir')` następnie `PATH="$(ruby -e 'print Gem.user_dir')/bin:$PATH"` i w końcu `export GEM_HOME=$HOME/.gem`.(więcej informacji `https://wiki.archlinux.org/index.php/ruby#Setup`)

### Instalacja jekyll
1. W swoim Terminalu wpisz `gem install jekyll bundler`.

### Lokalna konfiguracja
1. `Fork` this repository.
2. Użyj gita aby sklonować repository które zforkowałeś, t.j.
`git clone https://github.com/<your_username>/gci17.fossasia.org.git`
3. Zmień ścieżkę do lokalnego repository, t.j. `cd gci17.fossasia.org`. Teraz wpisz `ls` aby zobaczyć czy `Gemfile` jest widoczny.
4. Wpisz `bundle install` aby zainstalować zależności.
5. Wpisz `bundle exec jekyll serve `. Zobaczysz adres serwera.
6. Teraz Twój serwer powinien działać. Aby zobaczyć stronę gci17.fossasia.org, otwórz w przeglądarce `localhost:4000`.