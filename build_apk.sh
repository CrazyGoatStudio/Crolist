echo "Script directory" && pwd
cordova plugin rm cordova-plugin-console
cordova platform add android
cordova build --release android
