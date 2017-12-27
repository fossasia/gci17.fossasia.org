# ප්‍රාදේශීය සංවර්ධන සැකසුම

මෙම පිටුවෙහි ඇති උපදෙස් ඔබට MacOS පාරිසරිකය තුල ප්‍රාදේශීය ප්‍රවර්ධන සැකසුමට මග පෙන්වනු ඇත.

### Apple සංවර්ධන කට්ටලය ස්ථාපනය කිරීම
1. OS X හි, ඔබේ මෘදුකාංග ෆෝල්ඩරය විවෘත කරන්න, පසුව උපයෝගිතා ෆෝල්ඩරය විවෘත කරන්න. ටර්මිනලය විවෘත කරන්න.
2. `xcode select --install` ලියනය කරන්න.

### Homebrew Installation
1. `/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"` ලෙස ටර්මිනලය තුළ ලියනය කරන්න.

### Ruby Installation
1. `brew install ruby` ලෙස ටර්මිනලය තුළ ලියනය කරන්න.
2. නිවැරදිව ස්ථාපනය කර ඇත්දැයි පරීක්ෂා කිරීමට, 'which gem' යනුවෙන් ටයිප් කරන්න. ඔබ 'usr / local / bin / gem' මෙය දකී නම් සියල්ලම නිවැරදිව ස්ථාපනය වී ඇත.

### jekyll Installation
1. `gem install jekyll bundler` ලෙස ටර්මිනලය තුළ ලියනය කරන්න.

### Setting up locally
1. රෙපෝසිට්‍රිය ෆොර්ක් කර ගන්න.
2. git භාවිතා කරමින් ඔබගේ ෆොර්ක් කෙරුනු රෙපෝව පිටපත් කර ගන්න, පෙ.අ.* `https://github.com/<your_username>/gci17.fossasia.org.git`
3. යොමුව ප්‍රාදේශීය රෙපෝවට මාරු කරන්න. පෙ.අ.* `cd gci17.fossasia.org`. `Gemfile` තිබේ දැයි බැලීමට `ls` ලෙස ලියනය කරන්න.
4. යැපෙන්නන් ස්ථාපනයට `bundle install` ලියනය කරන්න
5. `bundle exec jekyll serve` යැයි ලියනය කරන්න. ඔබ සර්වර් ලිපිනයක් දකිනු ඇත.
6. දැන් ඔබගේ සේවාදායකය ක්‍රියාත්මක වෙමින් පවතී. gci17.fossasia.org පිටුව බැලීමට,`localhost:4000` වෙත යන්න. 

*පෙ.අ. - පෙන්වන  අයුරින් 