# ප්‍රාදේශීය සංවර්ධන සැකසුම

මෙම පිටුවෙහි ඇති උපදෙස් ඔබට ලිනක්ස් පාරිසරිකය තුල ප්‍රාදේශීය ප්‍රවර්ධන සැකසුමට මග පෙන්වනු ඇත. 

### Ruby ස්ථාපනය කිරීම  
1. ටර්මිනල් එකක් විවෘත කර ruby ස්ථාපනය කිරීම සඳහා ඇසුරුම් කළමණාකරු භාවිතා කරන්න. නිදසුනක් ලෙස, Ubuntu or Debian භාවිතා කර `sudo apt-get install ruby ruby-dev` හෝ Arch Linux මත `sudo pacman -S ruby ruby-dev` හෝ භාවිතා කරන්න
2. ක්‍රියාත්මක කළ හැකි gems වර්ගයක් සැකසීම සඳහා `(ruby -e 'print Gem.user_dir')` අනතුරුව `PATH="$(ruby -e 'print Gem.user_dir')/bin:$PATH"` ඒ වගේම අවසානයට `export GEM_HOME=$HOME/.gem` ලියනය කරන්න.(වැඩි දුර විස්තර මෙතැන `https://wiki.archlinux.org/index.php/ruby#Setup`)

### jekyll ස්ථාපනය කිරීම
1. ඔබගේ ටර්මිනලය තුල `gem install jekyll bundler` යැයි ලියනය කරන්න.

### ප්‍රාදේශීය ප්‍රවර්ධනය සැකසීම 
1. රෙපෝසිට්‍රිය ෆොර්ක් කර ගන්න.
2. git භාවිතා කරමින් ඔබගේ ෆොර්ක් කෙරුනු රෙපෝව පිටපත් කර ගන්න, පෙ.අ.*
`git clone https://github.com/<your_username>/gci17.fossasia.org.git`
3. යොමුව ප්‍රාදේශීය රෙපෝවට මාරු කරන්න. පෙ.අ.* `cd gci17.fossasia.org`. `Gemfile` තිබේ දැයි බැලීමට `ls` ලෙස ලියනය කරන්න.
4. යැපෙන්නන් ස්ථාපනයට `bundle install` ලියනය කරන්න
5. `bundle exec jekyll serve` යැයි ලියනය කරන්න. ඔබ සර්වර් ලිපිනයක් දකිනු ඇත.
6. දැන් ඔබගේ සේවාදායකය ක්‍රියාත්මක වෙමින් පවතී. gci17.fossasia.org පිටුව බැලීමට,`localhost:4000` වෙත යන්න. 

*පෙ.අ. - පෙන්වන  අයුරින් 