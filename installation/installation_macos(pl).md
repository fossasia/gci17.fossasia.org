# Konfiguracja lokalnego środowiska

Instrukcje na tej stronie przeprowadzą Cię przez proces konfiguracji lokalnego środowiska programistycznego w MacOS.

### Instalacja narzędzi developerskich Apple
1. Na OS X, otwórz swój folder aplikacji, następnie otwórz folder Ułatwień/Narzędzi. Otwórz Terminal.
2. Wpisz `xcode select --install`.

### Instalacja Homebrew
1. Enter `/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"` in the Terminal.

### Instalacja Ruby
1. Wpisz w Terminalu `brew install ruby`.
2. Aby sprawdzić czy instalacja przebiegła pomyślnie, wpisz `which gem`. Jeśli zobaczysz `usr/local/bin/gem` wszystko jest zainstalowanie poprawnie.

### Instalacja jekyll
1. W terminalu wpisz `gem install jekyll bundler`

### Lokalna konfiguracja
1. `Fork` this repository.
2. Użyj gita aby sklonować repository które zforkowałeś, t.j.
`git clone https://github.com/<your_username>/gci17.fossasia.org.git`
3. Zmień ścieżkę do lokalnego repository, t.j. `cd gci17.fossasia.org`. Teraz wpisz `ls` aby zobaczyć czy `Gemfile` jest widoczny.
4. Wpisz `bundle install` aby zainstalować zależności.
5. Wpisz `bundle exec jekyll serve `. Zobaczysz adres serwera.
6. Teraz Twój serwer powinien działać. Aby zobaczyć stronę gci17.fossasia.org, otwórz w przeglądarce `localhost:4000`.