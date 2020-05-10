# Run build command (cleans lib)
npm run compile

# Zip from root
rm -f lib.zip
zip -r lib.zip lib package*.json

# Add kudu files to zip, ignoring paths
zip -j lib.zip azure/kudu/.deployment azure/kudu/build.sh

# Execute zip deployment
az webapp deployment source config-zip -g $1 -n $2 --src lib.zip