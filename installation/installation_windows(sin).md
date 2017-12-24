# ප්‍රාදේශීය සංවර්ධන සැකසුම

මෙම පිටුවෙහි ඇති උපදෙස් ඔබට වින්ඩෝස් පාරිසරිකය තුල ප්‍රාදේශීය ප්‍රවර්ධන සැකසුමට මග පෙන්වනු ඇත.

### Ruby ස්ථාපනය කිරීම 
1. [Ruby හා සංවර්ධන කට්ටලය ස්ථාපනය කිරීම](https://rubyinstaller.org/downloads/). Ruby ස්ථාපනය අතරතුරදී “Add Ruby executables to your PATH” යන්න යොදන්න.
උදා:- 64-bit ආකෘතිය ස්ථාපනය සඳහා [Ruby2.3.3](https://dl.bintray.com/oneclick/rubyinstaller/ruby-2.3.3-i386-mingw32.7z)
2. [අදාල Ruby DevKit ස්ථාපනය කරන්න කිරීම](https://rubyinstaller.org/downloads/) උදා:- අනුරූපී [සංවර්ධක කට්ටලය](https://dl.bintray.com/oneclick/rubyinstaller/DevKit-mingw64-64-4.7.2-20130224-1432-sfx.exe).
ඔබ විසින් ගොනුව ක්‍රියාත්මක කරන විට, එය ගොනු සඳහා යොමුවක් ඔබෙන් විමසනු ඇත. එය ගොනු සඳහා යොමුවක් ඔබෙන් විමසනු ඇත. එය තුළ අවකාශයක් නොමැති මාර්ගයක් ඇතුළු කරන්න. හිස්තැන් නොමැති යොමුවක් එහි ලියනය කරන්න. 
3. ඔබ විසින් ඔබගේ විධාන රේඛාව භාවිතා කරමින් DevKit උද්ධරණය කර ගත් ෆෝල්ඩරය වෙත යන්න. උදා:- `powershell` හෝ `cmd` භාවිතා කරමින් 
4. `ruby dk.rb review` අනුගමනය කරමින් විධාන රේඛා අතුරු මුහුණතේ `ruby dk.rb init` යැයි ද අවසානයේ Ruby ස්ථාපනය සම්බන්ධ කර ගනිමින් DevKit ස්ථාපනය සම්පූර්ණ කිරීම සඳහා `ruby dk.rb install` යැයි ද ලියනය කරන්න.

### jekyll ස්ථාපනය කිරීම
1. cmd විවෘත කර `gem install jekyll bundler` යැයි ලියනය කරන්න.

### Setting up locally
1. රෙපෝසිට්‍රිය ෆොර්ක් කර ගන්න.
2. git ටර්මිනලය (Git bash in windows) විවෘත කර ඔබගේ ෆොර්ක් කරගත් රෙපෝව පෙ.අ.* `git clone https://github.com/<your_username>/gci17.fossasia.org.git` ඔබට අවශ්‍ය යොමුවක පිටපත් කරගන්න.
3. යොමුව ප්‍රාදේශීය රෙපෝවට මාරු කරන්න. පෙ.අ.* `cd gci17.fossasia.org`. `Gemfile` තිබේ දැයි බැලීමට `ls` ලෙස ලියනය කරන්න.
4. යැපෙන්නන් ස්ථාපනයට `bundle install` ලියනය කරන්න.
5. `gem install jekyll-sitemap`හා අනතුරුව `gem install jekyll-paginate` ලියනය කරන්න.(එය පෙර පියවරේදී ස්ථාපනය කර තිබේ නම් අවශ්‍ය නොවේ.)
6. දැන් Gemfile(ඕනෑම වදන් සකසනයක් මඟින් උදා:- sublime) සමඟ විවෘත කරන්න, ඉන්පසු `#gem 'github-pages', group: :jekyll_plugins` තුළ පවතින '#' ඉවත් කර `gem 'jekyll-sitemap'`,`gem 'jekyll-paginate'` වලට '#' යොදන්න. ගොනුව සුරකින්න.
7. `bundle exec jekyll serve` යැයි ලියනය කරන්න. ඔබ සර්වර් ලිපිනයක් දකිනු ඇත.
8.  දැන් ඔබගේ සේවාදායකය ක්‍රියාත්මක වෙමින් පවතී. gci17.fossasia.org පිටුව බැලීමට,`localhost:4000` වෙත යන්න. 

*පෙ.අ. - පෙන්වන  අයුරින් 
