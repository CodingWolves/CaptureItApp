p=$PWD
let i=${#p}-7
curDir=$(echo "$p" | cut -c$i-)
if [ "$curDir" = "/scripts" ]; then 
cd ../
echo "up directory"
fi

npm run build
platP=$PWD/platforms/android
if [ ! -d "$platP" ]; then
	cordova platform add android
fi
cordova run android