set -e
npm run build
cd dist
git init
git add -A
git commit -m 'New Deploy'
git push -f git@github.com:bekdauletarynbek/tz-joke.git mastes:gh-pages

cd -