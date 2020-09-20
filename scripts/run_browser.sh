p=$PWD
let i=${#p}-7
curDir=$(echo "$p" | cut -c$i-)
if [ "$curDir" = "/scripts" ]; then 
	cd ../
	echo "up directory"
fi

p=$PWD/www/index.html
if [ ! -f "$p" ]; then 
	echo "build does not exist, run 'npm run build' to make a build in project directory"
else
	platP=$PWD/platforms/browser
	if [ ! -d "$platP" ]; then
		cordova platform add browser
	fi
	cordova run browser
fi