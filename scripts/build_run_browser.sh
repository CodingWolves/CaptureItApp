p=$PWD
let i=${#p}-7
curDir=$(echo "$p" | cut -c$i-)
if [ "$curDir" = "/scripts" ]; then 
cd ../
echo "up directory"
fi

npm run build
platP=$PWD/platforms/browser
if [ ! -d "$platP" ]; then
	cordova platform add browser
fi
cordova run browser