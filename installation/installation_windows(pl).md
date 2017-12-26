# Konfiguracja lokalnego środowiska

Instrukcje na tej stronie przeprowadzą Cię przez proces konfiguracji lokalnego środowiska programistycznego w Windows OS.

### Instalacja Ruby
1. [Install Ruby and Development Kit](https://rubyinstaller.org/downloads/). Podczas instalacji Ruby zaznacz opcję dodania Ruby do Twojej PATH.
n.p. dla systemu 64-bit zainstaluj: [Ruby2.3.3](https://dl.bintray.com/oneclick/rubyinstaller/ruby-2.3.3-i386-mingw32.7z)
2. [Zainstaluj zgodne Ruby DevKit](https://rubyinstaller.org/downloads/) e.g. corresponding [developer kit](https://dl.bintray.com/oneclick/rubyinstaller/DevKit-mingw64-64-4.7.2-20130224-1432-sfx.exe).
Gdy uruchomisz plik, zostaniesz zapytany o ścieżkę pliku. Podaj ścieżkę pliku bez odstępów.
3. Przejdź do folderu w którym wypakowałeś DevKit używając wiersza poleceń. n.p. używając `powershell` lub `cmd`.
4. Wpisz `ruby dk.rb init` w interfejsie wiersza poleceń, następnie `ruby dk.rb review` i w końcu `ruby dk.rb install` aby zakończyć instalację DevKit wiążąc to ze swoją instalacją Ruby.

### Instalacja jekyll
1. Otwórz cmd i wpisz `gem install jekyll bundler`

### Lokalna konfiguracja
1. `Fork` this repository.
2. Użyj gita aby sklonować repository które zforkowałeś, t.j.
`git clone https://github.com/<your_username>/gci17.fossasia.org.git`
3. Zmień ścieżkę do lokalnego repository, t.j. `cd gci17.fossasia.org`. Teraz wpisz `ls` aby zobaczyć czy `Gemfile` jest widoczny.
4. Wpisz `bundle install` aby zainstalować zależności.
5. Wpisz `bundle exec jekyll serve `. Zobaczysz adres serwera.
6. Teraz Twój serwer powinien działać. Aby zobaczyć stronę gci17.fossasia.org, otwórz w przeglądarce `localhost:4000`.
