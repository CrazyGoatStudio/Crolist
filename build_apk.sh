echo "Script directory" && pwd
mkdir www
mkdir "$ANDROID_HOME/licenses"
echo -e "\n8933bad161af4178b1185d1a37fbf41ea5269c55" > "$ANDROID_HOME/licenses/android-sdk-license"
cordova plugin rm cordova-plugin-console
cordova platform add android
cordova build --release android
