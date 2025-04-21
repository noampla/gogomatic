@echo off
echo Creating 'public' directory if not exists...
if not exist public mkdir public

echo Copying files to 'public'...
copy index.html public\
copy index-heb.html public\
copy rulebook.html public\
copy rulebook-heb.html public\
copy strategy.html public\
copy strategy-heb.html public\
copy cardtypes.html public\
copy cardtypes-heb.html public\
copy faq.html public\

copy index.css public\
copy index-heb.css public\
copy rulebook.css public\
copy strategy.css public\
copy cardtypes.css public\

copy index-dr.html public\index.html
copy index-dr.css public\

copy script.js public\

echo Copying assets folder...
xcopy /E /I assets public\assets\

echo All files copied. Ready for deployment!
pause
